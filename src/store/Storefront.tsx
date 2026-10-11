import { useEffect, useMemo, useRef, useState } from "react";
import { SiteLoader } from "@/store/Loader";
import {
  brands,
  categories,
  categoryTiles,
  money,
  photo,
  products,
  type Product,
} from "@/store/products";

type Cart = Record<number, number>;
type SortMode = "popular" | "new" | "cheap";
type Drawer = "cart" | "favorites" | null;

const MAKES = ["Toyota", "Kia", "Hyundai", "BMW", "Mercedes-Benz", "Volkswagen", "LADA", "Skoda", "Honda"];
const MODELS = ["Camry", "RAV4", "Rio", "Solaris", "3 Series", "C-Class", "Vesta", "Octavia", "Другая"];
const YEARS = ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018 и старше"];

const FAQS = [
  {
    q: "Как проверить совместимость с моим автомобилем?",
    a: "Выберите марку, модель и год в форме подбора или напишите нам. Для точного результата можем уточнить комплектацию и поколение автомобиля.",
  },
  {
    q: "Сколько занимает доставка?",
    a: "Срок зависит от города и способа доставки. После подтверждения заказа сообщим ориентировочную дату и отправим трек-номер.",
  },
  {
    q: "Можно заказать установку купленного товара?",
    a: "Да, помогаем с установкой мультимедиа, света и автоэлектроники. Оставьте заявку в контактах — согласуем задачу, стоимость и время.",
  },
  {
    q: "Что делать, если товар не подошёл?",
    a: "Свяжитесь с нами до установки товара. Разберёмся с причиной и подскажем дальнейшие действия в соответствии с условиями возврата и действующим законодательством.",
  },
  {
    q: "Какие способы оплаты доступны?",
    a: "В демонстрационной версии заказ оформляется как заявка. Менеджер подтверждает наличие, стоимость доставки и доступные способы оплаты.",
  },
];

function BrandMark({ withWheels = true }: { withWheels?: boolean }) {
  return (
    <svg className="brand-mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M5 29 11 17Q12 14 16 14H32Q36 14 38 18L43 29V37H38V33H10V37H5V29Z" stroke="currentColor" strokeWidth="2.5" />
      <path d="M12 25 16 18H32L37 25H12Z" fill="currentColor" opacity=".28" />
      <path d="M3 25H11M37 25H45M16 33H32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {withWheels ? (
        <>
          <circle cx="13" cy="29" r="2" fill="currentColor" />
          <circle cx="35" cy="29" r="2" fill="currentColor" />
        </>
      ) : null}
    </svg>
  );
}

function SearchIcon() {
  return (
    <span className="icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 5 5" />
      </svg>
    </span>
  );
}

function HeartIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8">
      <path d="M20.8 8.8c0 5.5-8.8 11-8.8 11s-8.8-5.5-8.8-11A4.8 4.8 0 0 1 12 6.4a4.8 4.8 0 0 1 8.8 2.4Z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <span className="icon">
      <svg viewBox="0 0 24 24">
        <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.4L22 8H6" />
        <circle cx="10" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </svg>
    </span>
  );
}

function loadCart(): Cart {
  try {
    const raw = JSON.parse(localStorage.getItem("russt_cart") || "{}") as Record<string, number>;
    const cart: Cart = {};
    for (const [key, qty] of Object.entries(raw)) {
      const id = Number(key);
      if (qty > 0 && Number.isFinite(id)) cart[id] = qty;
    }
    return cart;
  } catch {
    return {};
  }
}

function loadFavs(): number[] {
  try {
    const raw = JSON.parse(localStorage.getItem("russt_favs") || "[]") as number[];
    return Array.isArray(raw) ? raw.filter((id) => typeof id === "number") : [];
  } catch {
    return [];
  }
}

export function Storefront() {
  const [cart, setCart] = useState<Cart>({});
  const [favorites, setFavorites] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [sortMode, setSortMode] = useState<SortMode>("popular");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [availability, setAvailability] = useState("");
  const [drawer, setDrawer] = useState<Drawer>(null);
  const [checkout, setCheckout] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [toastOn, setToastOn] = useState(false);
  const [openFaq, setOpenFaq] = useState<Record<number, boolean>>({ 0: true });
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [timer, setTimer] = useState({ d: "02", h: "14", m: "36", s: "48" });
  const toastTimer = useRef(0);
  const contactRef = useRef<HTMLFormElement>(null);
  const checkoutRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setCart(loadCart());
    setFavorites(loadFavs());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("russt_cart", JSON.stringify(cart));
    localStorage.setItem("russt_favs", JSON.stringify(favorites));
  }, [cart, favorites, hydrated]);

  useEffect(() => {
    document.body.style.overflow = drawer || checkout ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer, checkout]);

  useEffect(() => {
    const deadline = Date.now() + 2 * 86400000 + 14 * 3600000 + 36 * 60000 + 48000;
    const tick = () => {
      const t = Math.max(0, deadline - Date.now());
      const pad = (n: number) => String(n).padStart(2, "0");
      setTimer({
        d: pad(Math.floor(t / 86400000)),
        h: pad(Math.floor((t % 86400000) / 3600000)),
        m: pad(Math.floor((t % 3600000) / 60000)),
        s: pad(Math.floor((t % 60000) / 1000)),
      });
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((el) => el.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    nodes.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const showToast = (message: string) => {
    setToast(message);
    setToastOn(true);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToastOn(false), 2300);
  };

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  const list = useMemo(() => {
    const q = query.toLowerCase().trim();
    const next = products.filter((p) => {
      const hay = `${p.name} ${p.brand} ${p.category}`.toLowerCase();
      if (q && !hay.includes(q)) return false;
      if (category && p.category !== category) return false;
      if (brand && p.brand !== brand) return false;
      if (availability === "yes") return true;
      return true;
    });
    if (sortMode === "cheap") next.sort((a, b) => a.price - b.price);
    else if (sortMode === "new") next.sort((a, b) => b.id - a.id);
    else next.sort((a, b) => b.pop - a.pop);
    return next;
  }, [query, category, brand, availability, sortMode]);

  const addToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    showToast("Добавлено в корзину");
  };

  const changeQty = (id: number, delta: number) => {
    setCart((prev) => {
      const next = { ...prev };
      const qty = (next[id] || 0) + delta;
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  };

  const toggleFav = (id: number) => {
    const exists = favorites.includes(id);
    setFavorites(exists ? favorites.filter((item) => item !== id) : [...favorites, id]);
    showToast(exists ? "Удалено из избранного" : "Добавлено в избранное");
  };

  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  };

  const onSearch = (value: string, scroll: boolean) => {
    setQuery(value);
    if (scroll && value) scrollTo("#catalog");
  };

  const findForCar = () => {
    if (!make || !model || !year) {
      showToast("Выберите марку, модель и год");
      return;
    }
    showToast(`Подбор для ${make} ${model}, ${year}`);
    setQuery("");
    setCategory("");
    scrollTo("#catalog");
  };

  const openCheckout = () => {
    if (!Object.keys(cart).length) {
      showToast("Добавьте товары в корзину");
      return;
    }
    setDrawer(null);
    setCheckout(true);
  };

  const entries = Object.entries(cart).filter(([, qty]) => qty > 0);
  const total = entries.reduce((sum, [id, qty]) => {
    const product = products.find((item) => item.id === Number(id));
    return sum + (product ? product.price * qty : 0);
  }, 0);
  const favList = products.filter((item) => favorites.includes(item.id));

  return (
    <>
      <SiteLoader />
      <header>
        <div className="wrap topbar">
          <a className="brand" href="#home" aria-label="RUSST — на главную">
            <BrandMark />
            <span className="brand-name">
              RUS<b>ST</b>
            </span>
          </a>
          <nav className="nav" aria-label="Основная навигация">
            <a href="#catalog">Каталог</a>
            <a href="#services">Установка</a>
            <a href="#about">О нас</a>
            <a href="#reviews">Отзывы</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <label className="searchbox">
            <input
              id="headerSearch"
              placeholder="Найти аксессуар..."
              aria-label="Поиск товаров"
              value={query}
              onChange={(event) => onSearch(event.target.value, true)}
            />
            <SearchIcon />
          </label>
          <div className="head-actions">
            <button className="round-btn" aria-label="Избранное" type="button" onClick={() => setDrawer("favorites")}>
              <span className="icon">
                <HeartIcon />
              </span>
              <span className="count" id="favCount">
                {favorites.length}
              </span>
            </button>
            <button className="round-btn" aria-label="Корзина" type="button" onClick={() => setDrawer("cart")}>
              <CartIcon />
              <span className="count" id="cartCount">
                {cartCount}
              </span>
            </button>
            <a className="btn btn-primary btn-small call-btn" href="tel:+79877928082">
              Позвонить ↗
            </a>
            <button className="round-btn mobile-menu" aria-label="Открыть меню" type="button" onClick={() => setMenuOpen((open) => !open)}>
              <span className="icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <nav id="mobileNav" style={{ display: menuOpen ? "block" : "none", padding: "0 16px 18px" }} aria-label="Мобильная навигация">
          <div style={{ display: "grid", gap: 12 }}>
            <a href="#catalog" onClick={() => setMenuOpen(false)}>Каталог</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Установка</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>О нас</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)}>Отзывы</a>
            <a href="#contacts" onClick={() => setMenuOpen(false)}>Контакты</a>
            <input
              className="field"
              id="mobileSearch"
              placeholder="Поиск по каталогу..."
              value={query}
              onChange={(event) => onSearch(event.target.value, true)}
            />
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-art" aria-hidden="true" />
          <div className="wrap hero-content">
            <div className="hero-kicker">
              <span className="live-dot" /> Автоаксессуары нового уровня
            </div>
            <h1>
              Детали,
              <br />
              которые <span>решают.</span>
            </h1>
            <p className="hero-copy">Технологии, стиль и комфорт для твоего автомобиля. Подбираем то, что работает — и выглядит безупречно.</p>
            <div className="hero-buttons">
              <a className="btn btn-primary" href="#catalog">
                Открыть каталог <span>↗</span>
              </a>
              <button className="btn btn-ghost" type="button" onClick={() => scrollTo("#fit")}>
                Подобрать для авто <span>↗</span>
              </button>
            </div>
            <div className="hero-meta">
              <div className="meta-item">
                <strong>2 400+</strong>
                <span>товаров в ассортименте</span>
              </div>
              <div className="meta-item">
                <strong>24/7</strong>
                <span>приём заказов</span>
              </div>
              <div className="meta-item">
                <strong>4.9/5</strong>
                <span>оценка клиентов</span>
              </div>
            </div>
          </div>
        </section>

        <div className="trust-strip">
          <div className="wrap trust-inner">
            <div className="trust-item"><span className="icon">✳</span> Проверенные бренды</div>
            <div className="trust-item"><span className="icon">↗</span> Доставка по России</div>
            <div className="trust-item"><span className="icon">◈</span> Гарантия на товары</div>
            <div className="trust-item"><span className="icon">⌁</span> Установка под ключ</div>
          </div>
        </div>

        <section className="wrap" id="fit" style={{ paddingTop: 26 }}>
          <div className="fit-panel reveal">
            <div className="fit-title">
              <h3>Найди своё сочетание</h3>
              <p>Подберём аксессуары под марку и модель авто</p>
            </div>
            <div className="fit-fields">
              <select className="field" id="carMake" aria-label="Марка автомобиля" value={make} onChange={(event) => setMake(event.target.value)}>
                <option value="">Марка автомобиля</option>
                {MAKES.map((item) => <option key={item}>{item}</option>)}
              </select>
              <select className="field" id="carModel" aria-label="Модель автомобиля" value={model} onChange={(event) => setModel(event.target.value)}>
                <option value="">Модель</option>
                {MODELS.map((item) => <option key={item}>{item}</option>)}
              </select>
              <select className="field" id="carYear" aria-label="Год выпуска" value={year} onChange={(event) => setYear(event.target.value)}>
                <option value="">Год выпуска</option>
                {YEARS.map((item) => <option key={item}>{item}</option>)}
              </select>
            </div>
            <button className="btn btn-primary" type="button" onClick={findForCar}>
              Найти <span>→</span>
            </button>
          </div>
        </section>

        <section className="section wrap" id="categories">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow">Собери свой комфорт</div>
              <h2>Всё для твоего <span>авто</span></h2>
            </div>
            <p>От заметных апгрейдов до мелочей, которые каждый день делают поездку лучше.</p>
          </div>
          <div className="categories">
            {categoryTiles.map((tile) => (
              <a
                className="category reveal"
                href="#catalog"
                key={tile.cat}
                onClick={() => setCategory(tile.cat)}
              >
                <img loading="lazy" src={tile.img} alt="" />
                <div className="category-label">
                  <strong>{tile.title}</strong>
                  <span className="arrow">↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="catalog" style={{ background: "#0b0e11", borderBlock: "1px solid var(--line)" }}>
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <div className="eyebrow">Выбор водителей</div>
                <h2>Хиты и <span>новинки</span></h2>
              </div>
              <div className="product-tools">
                <button className={sortMode === "popular" ? "pill active" : "pill"} type="button" onClick={() => setSortMode("popular")}>Популярное</button>
                <button className={sortMode === "new" ? "pill active" : "pill"} type="button" onClick={() => setSortMode("new")}>Новинки</button>
                <button className={sortMode === "cheap" ? "pill active" : "pill"} type="button" onClick={() => setSortMode("cheap")}>Сначала дешевле</button>
              </div>
            </div>
            <div className="catalog-bar reveal">
              <input
                className="field"
                id="catalogSearch"
                placeholder="Название или бренд..."
                aria-label="Поиск в каталоге"
                value={query}
                onChange={(event) => onSearch(event.target.value, false)}
              />
              <select className="field" id="categoryFilter" aria-label="Категория" value={category} onChange={(event) => setCategory(event.target.value)}>
                <option value="">Все категории</option>
                {categories.map((item) => <option key={item}>{item}</option>)}
              </select>
              <select className="field" id="brandFilter" aria-label="Бренд" value={brand} onChange={(event) => setBrand(event.target.value)}>
                <option value="">Все бренды</option>
                {brands.map((item) => <option key={item}>{item}</option>)}
              </select>
              <select className="field" id="availabilityFilter" aria-label="Наличие" value={availability} onChange={(event) => setAvailability(event.target.value)}>
                <option value="">Любое наличие</option>
                <option value="yes">В наличии</option>
              </select>
              <span id="resultCount" style={{ color: "var(--muted)", fontSize: 11, marginLeft: "auto" }}>
                {list.length} товаров
              </span>
            </div>
            <div className="products" id="productGrid" aria-live="polite">
              {list.length === 0 ? (
                <div className="empty-state">Ничего не найдено. Попробуйте изменить фильтры.</div>
              ) : (
                list.map((item) => <ProductCard key={item.id} product={item} inCart={Boolean(cart[item.id])} faved={favorites.includes(item.id)} onAdd={addToCart} onFav={toggleFav} />)
              )}
            </div>
          </div>
        </section>

        <section className="promo">
          <div className="wrap">
            <div className="promo-card reveal">
              <div className="promo-content">
                <div className="eyebrow">Время обновить салон</div>
                <h2>
                  −15% на первый
                  <br />
                  апгрейд
                </h2>
                <p>
                  Скидка на аксессуары по промокоду <strong style={{ color: "var(--accent)" }}>START15</strong>. До конца предложения.
                </p>
                <a href="#catalog" className="btn btn-primary">Выбрать товары ↗</a>
              </div>
              <div className="promo-right">
                <div className="timer" id="timer">
                  <div className="timer-unit"><strong id="days">{timer.d}</strong><span>дней</span></div>
                  <div className="timer-unit"><strong id="hours">{timer.h}</strong><span>часов</span></div>
                  <div className="timer-unit"><strong id="minutes">{timer.m}</strong><span>минут</span></div>
                  <div className="timer-unit"><strong id="seconds">{timer.s}</strong><span>секунд</span></div>
                </div>
                <span style={{ fontSize: 10, color: "#9ba58a" }}>Предложение ограничено по времени</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section wrap">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow">Почему RUSST</div>
              <h2>Сервис без <span>компромиссов</span></h2>
            </div>
            <p>Не просто продаём коробки. Помогаем выбрать решение, которое подходит именно тебе.</p>
          </div>
          <div className="features">
            <Feature icon="◇" title="Проверенное качество" text="Отбираем бренды и проверяем каждую поставку." />
            <Feature icon="✓" title="Гарантия и поддержка" text="Не пропадаем после покупки — остаёмся на связи." />
            <Feature icon="↗" title="Быстрая доставка" text="Отправляем заказы по всей России." />
            <Feature icon="⌁" title="Установка у профи" text="Аккуратный монтаж и проверка результата." />
            <Feature icon="◎" title="Помощь в подборе" text="Учитываем модель, комплектацию и задачи." />
          </div>
        </section>

        <section className="section" id="services" style={{ background: "#0b0e11", borderBlock: "1px solid var(--line)" }}>
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <div className="eyebrow">Установка и настройка</div>
                <h2>
                  Сделаем красиво.
                  <br />
                  <span>Сделаем правильно.</span>
                </h2>
              </div>
              <p>Чистый монтаж, аккуратная интеграция и никаких лишних проводов на виду.</p>
            </div>
            <div className="install-grid">
              <article className="install-main reveal">
                <img loading="lazy" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1100&q=80" alt="Работа в автомобильном сервисе" />
                <div className="install-copy">
                  <div className="eyebrow">01 / Мультимедиа</div>
                  <h3>Звук, который меняет поездку</h3>
                  <p>Установка головных устройств, камер, акустики и интеграция со штатными системами.</p>
                  <a href="#contacts" className="btn btn-primary btn-small">Записаться на установку ↗</a>
                </div>
              </article>
              <div className="install-side">
                <article className="install-mini reveal">
                  <img loading="lazy" src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80" alt="" />
                  <div>
                    <div className="eyebrow">02 / Свет</div>
                    <h3>Видеть больше. Светить точнее.</h3>
                    <p>Подбор и установка автомобильного света.</p>
                  </div>
                </article>
                <article className="install-mini reveal">
                  <img loading="lazy" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80" alt="" />
                  <div>
                    <div className="eyebrow">03 / Электроника</div>
                    <h3>Защита под контролем</h3>
                    <p>Регистраторы, парктроники и охранные системы.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section wrap" id="reviews">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow">Говорят клиенты</div>
              <h2>Проверено <span>дорогой</span></h2>
            </div>
            <p>Доверие складывается из деталей — и мы это ценим.</p>
          </div>
          <div className="reviews">
            <Review initials="АК" name="Алексей К." meta="Kia Sportage · Магнитола" text="«Подобрали магнитолу под штатное место, всё встало идеально. Установили за пару часов, салон оставили чище, чем был. Очень достойно»." />
            <Review initials="МВ" name="Мария В." meta="Volkswagen Polo · Свет" text="«Наконец-то нормальный свет без колхоза. Объяснили разницу, предложили варианты под бюджет. По итогу — именно то, что хотел»." />
            <Review initials="ДР" name="Дмитрий Р." meta="Toyota Camry · Коврики" text="«Заказ приехал быстро, упаковка отличная. Помогли проверить совместимость ковриков до оплаты — вот это сервис. Буду обращаться ещё»." />
          </div>
        </section>

        <section className="section about" id="about">
          <div className="wrap about-grid">
            <div className="about-visual reveal">
              <img loading="lazy" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1100&q=85" alt="Спортивный автомобиль на дороге" />
              <div className="about-stamp">
                <strong>R + S</strong>
                <span>Два друга. Один драйв.</span>
              </div>
            </div>
            <div className="about-copy reveal">
              <div className="eyebrow">Кто стоит за брендом</div>
              <h2>
                Начали с гаража.
                <br />
                <span>Выросли в дело.</span>
              </h2>
              <p>Мы — Руслан и Стас. Когда-то спорили о том, почему найти хорошую мелочь для машины сложнее, чем саму машину. В итоге решили: сделаем место, куда сами хотели бы приходить.</p>
              <p>Так появился RUSST — магазин для тех, кто замечает детали. Мы тестируем, сравниваем, задаём поставщикам неудобные вопросы и не советуем то, что не поставили бы себе.</p>
              <p>Наша идея простая: меньше шума, больше пользы. Выбирай с умом, ездить должно в удовольствие.</p>
              <div className="about-sign">
                <div className="founder"><strong>Руслан</strong><span>Подбор и технологии</span></div>
                <div className="founder"><strong>Стас</strong><span>Сервис и качество</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section wrap" id="faq">
          <div className="faq-grid">
            <div className="faq-intro reveal">
              <div className="eyebrow">Есть вопросы?</div>
              <h2>
                Разложим
                <br />
                по <span>полочкам</span>
              </h2>
              <p>Если не нашли ответ — напишите нам. Поможем разобраться без сложных терминов.</p>
              <a href="#contacts" className="btn btn-ghost">Задать вопрос ↗</a>
            </div>
            <div className="faq-list reveal">
              {FAQS.map((item, index) => {
                const open = Boolean(openFaq[index]);
                return (
                  <div className={open ? "faq-item open" : "faq-item"} key={item.q}>
                    <button
                      className="faq-question"
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenFaq((prev) => ({ ...prev, [index]: !prev[index] }))}
                    >
                      {item.q}
                      <span>＋</span>
                    </button>
                    <div className="faq-answer">{item.a}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="contacts" style={{ background: "#0b0e11", borderTop: "1px solid var(--line)" }}>
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <div className="eyebrow">Мы на связи</div>
                <h2>Обсудим твой <span>проект?</span></h2>
              </div>
              <p>Подскажем по товару, совместимости, срокам и установке.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-info reveal">
                <h3>Контакты</h3>
                <div className="contact-line"><span className="icon">↗</span><div><strong>Телефон</strong><a href="tel:+79877928082">+7 987 792-80-82</a></div></div>
                <div className="contact-line"><span className="icon">◷</span><div><strong>График работы</strong><span>Ежедневно, 09:00–21:00</span></div></div>
                <div className="contact-line"><span className="icon">⌖</span><div><strong>Шоурум и установка</strong><span>Адрес уточняется при записи</span></div></div>
                <div className="contact-line">
                  <span className="icon">✉</span>
                  <div>
                    <strong>Мессенджеры</strong>
                    <a href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a>
                    {" · "}
                    <a href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp</a>
                  </div>
                </div>
                <div className="map-placeholder" role="img" aria-label="Карта — адрес уточняется при записи">
                  <div className="map-pin"><span className="icon">⌖</span><span>RUSST / точка встречи</span></div>
                </div>
              </div>
              <form
                className="contact-form reveal"
                id="contactForm"
                ref={contactRef}
                onSubmit={(event) => {
                  event.preventDefault();
                  contactRef.current?.reset();
                  showToast("Спасибо! В демо-версии заявка не отправляется на сервер.");
                }}
              >
                <h3>Оставить заявку</h3>
                <p>Ответим и поможем найти правильное решение.</p>
                <div className="form-row">
                  <input className="field" required name="name" placeholder="Как к вам обращаться" aria-label="Имя" />
                  <input className="field" required name="phone" type="tel" placeholder="+7 (___) ___-__-__" aria-label="Телефон" />
                </div>
                <select className="field" name="topic" aria-label="Тема обращения">
                  <option>Подбор товара</option>
                  <option>Установка</option>
                  <option>Статус заказа</option>
                  <option>Другой вопрос</option>
                </select>
                <textarea className="field" name="message" placeholder="Марка авто и что хотите подобрать (необязательно)" aria-label="Сообщение" />
                <label style={{ display: "flex", gap: 9, alignItems: "start", color: "var(--muted)", fontSize: 10, margin: "6px 0 18px" }}>
                  <input type="checkbox" required style={{ accentColor: "var(--accent)", marginTop: 3 }} /> Согласен(на) на обработку персональных данных для ответа на заявку.
                </label>
                <button className="btn btn-primary" type="submit">Отправить заявку ↗</button>
                <p style={{ fontSize: 10, margin: "13px 0 0" }}>Демо-форма: данные не отправляются на сервер.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-brand">
              <a className="brand" href="#home">
                <BrandMark withWheels={false} />
                <span className="brand-name">
                  RUS<b>ST</b>
                </span>
              </a>
              <p>Аксессуары, которые делают каждую поездку твоей. Два друга, один подход к качеству.</p>
            </div>
            <div className="footer-col">
              <h4>Покупателям</h4>
              <a href="#catalog">Каталог товаров</a>
              <a href="#fit">Подбор по авто</a>
              <a href="#contacts">Доставка и оплата</a>
              <a href="#faq">Возврат и гарантия</a>
            </div>
            <div className="footer-col">
              <h4>Сервис</h4>
              <a href="#services">Установка</a>
              <a href="#reviews">Отзывы</a>
              <a href="#about">О бренде</a>
              <a href="#contacts">Задать вопрос</a>
            </div>
            <div className="footer-col">
              <h4>На связи</h4>
              <a href="tel:+79877928082">+7 987 792-80-82</a>
              <a href="https://t.me/" target="_blank" rel="noreferrer">Telegram ↗</a>
              <a href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp ↗</a>
              <a href="mailto:hello@russt.example">hello@russt.example</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025–2026 RUSST. Демонстрационный магазин.</span>
            <span>Цены и наличие в макете — примеры. Политика конфиденциальности</span>
          </div>
        </div>
      </footer>

      <nav className="mobile-bottom" aria-label="Быстрые действия">
        <button type="button" onClick={() => scrollTo("#catalog")}><span className="icon">▦</span>Каталог</button>
        <button
          type="button"
          onClick={() => {
            document.querySelector<HTMLInputElement>("#headerSearch")?.focus();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="icon">⌕</span>Поиск
        </button>
        <button type="button" onClick={() => setDrawer("cart")}>
          <span className="icon">♧</span>Корзина <span id="mobileCartCount">{cartCount ? `(${cartCount})` : ""}</span>
        </button>
        <a href="tel:+79877928082" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4, flexDirection: "column", fontSize: 9, color: "#aeb6bd" }}>
          <span className="icon">↗</span>Позвонить
        </a>
      </nav>

      <div className={drawer ? "drawer-backdrop open" : "drawer-backdrop"} id="backdrop" onClick={() => setDrawer(null)} />
      <aside className={drawer ? "drawer open" : "drawer"} id="drawer" aria-label="Панель корзины">
        <div className="drawer-head">
          <h3 id="drawerTitle">{drawer === "favorites" ? "Избранное" : "Корзина"}</h3>
          <button className="close-btn" type="button" onClick={() => setDrawer(null)} aria-label="Закрыть">×</button>
        </div>
        <div id="drawerBody">
          {drawer === "favorites" ? (
            favList.length ? (
              favList.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={photo(item.img, 200)} alt="" />
                  <div>
                    <strong>{item.name}</strong>
                    <small>{money(item.price)}</small>
                    <div className="qty">
                      <button type="button" onClick={() => toggleFav(item.id)}>×</button>
                      <button type="button" onClick={() => addToCart(item.id)}>В корзину +</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="drawer-empty">Пока ничего не добавлено в избранное.</div>
            )
          ) : entries.length ? (
            <>
              {entries.map(([id, qty]) => {
                const item = products.find((product) => product.id === Number(id));
                if (!item) return null;
                return (
                  <div className="cart-item" key={id}>
                    <img src={photo(item.img, 200)} alt="" />
                    <div>
                      <strong>{item.name}</strong>
                      <small>{money(item.price)}</small>
                      <div className="qty">
                        <button type="button" onClick={() => changeQty(item.id, -1)}>−</button>
                        <span>{qty}</span>
                        <button type="button" onClick={() => changeQty(item.id, 1)}>+</button>
                      </div>
                    </div>
                    <strong>{money(item.price * qty)}</strong>
                  </div>
                );
              })}
              <div className="cart-total">
                <span>Итого</span>
                <strong>{money(total)}</strong>
              </div>
              <button className="btn btn-primary" type="button" onClick={openCheckout}>Перейти к оформлению ↗</button>
              <button className="btn btn-ghost" type="button" onClick={() => setDrawer(null)}>Продолжить покупки</button>
            </>
          ) : (
            <div className="drawer-empty">
              Корзина пока пуста.
              <br />
              <br />
              <a className="btn btn-primary" href="#catalog" onClick={() => setDrawer(null)}>Перейти в каталог ↗</a>
            </div>
          )}
        </div>
      </aside>

      <div
        className={checkout ? "modal open" : "modal"}
        id="checkoutModal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkoutTitle"
        onClick={(event) => {
          if (event.target === event.currentTarget) setCheckout(false);
        }}
      >
        <div className="modal-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3 id="checkoutTitle">Оформление заказа</h3>
            <button className="close-btn" type="button" onClick={() => setCheckout(false)} aria-label="Закрыть">×</button>
          </div>
          <p>Оставьте контакты — менеджер подтвердит заказ и доставку.</p>
          <form
            id="checkoutForm"
            ref={checkoutRef}
            onSubmit={(event) => {
              event.preventDefault();
              setCart({});
              setCheckout(false);
              checkoutRef.current?.reset();
              showToast("Заявка оформлена в демо-режиме");
            }}
          >
            <input className="field" name="name" required placeholder="Ваше имя" aria-label="Ваше имя" style={{ marginBottom: 10 }} />
            <input className="field" name="phone" required type="tel" placeholder="Телефон" aria-label="Телефон" style={{ marginBottom: 10 }} />
            <select className="field" name="delivery" style={{ marginBottom: 10 }}>
              <option>Доставка курьером</option>
              <option>Пункт выдачи</option>
              <option>Самовывоз после согласования</option>
            </select>
            <select className="field" name="payment" style={{ marginBottom: 10 }}>
              <option>Оплата при подтверждении</option>
              <option>Картой онлайн (демо)</option>
              <option>При получении</option>
            </select>
            <div className="modal-actions">
              <button type="button" className="btn btn-ghost" onClick={() => setCheckout(false)}>Назад</button>
              <button className="btn btn-primary" type="submit">Подтвердить ↗</button>
            </div>
            <p style={{ fontSize: 10, marginTop: 14 }}>Демонстрация: оформление не создаёт реальный заказ.</p>
          </form>
        </div>
      </div>
      <div className={toastOn ? "toast show" : "toast"} id="toast" role="status" aria-live="polite">{toast}</div>
    </>
  );
}

function ProductCard({
  product,
  inCart,
  faved,
  onAdd,
  onFav,
}: {
  product: Product;
  inCart: boolean;
  faved: boolean;
  onAdd: (id: number) => void;
  onFav: (id: number) => void;
}) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img loading="lazy" src={photo(product.img)} alt={product.name} />
        {product.badge ? <span className={product.badge === "Скидка" ? "product-badge sale" : "product-badge"}>{product.badge}</span> : null}
        <button className={faved ? "fav-btn active" : "fav-btn"} aria-label={faved ? "Убрать из избранного" : "В избранное"} type="button" onClick={() => onFav(product.id)}>
          <HeartIcon filled={faved} />
        </button>
      </div>
      <div className="product-info">
        <div className="product-category">{product.brand} / {product.category}</div>
        <h3>{product.name}</h3>
        <div className="price-line">
          <span className="price">{money(product.price)}</span>
          {product.old ? <span className="old-price">{money(product.old)}</span> : null}
        </div>
        <div className="product-bottom">
          <span className="stock">В наличии</span>
          <button className="add-btn" type="button" onClick={() => onAdd(product.id)}>{inCart ? "В корзине · +" : "В корзину +"}</button>
        </div>
      </div>
    </article>
  );
}

function Feature({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="feature reveal">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Review({ initials, name, meta, text }: { initials: string; name: string; meta: string; text: string }) {
  return (
    <article className="review reveal">
      <div className="stars">★★★★★</div>
      <blockquote>{text}</blockquote>
      <div className="review-person">
        <div className="avatar">{initials}</div>
        <div>
          <strong>{name}</strong>
          <span>{meta}</span>
        </div>
      </div>
    </article>
  );
}
