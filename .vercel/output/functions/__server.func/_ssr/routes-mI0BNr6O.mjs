import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-mI0BNr6O.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LOADER_HTML = `<div class="ld-brand">RUS<b>ST</b></div>
<div class="ld-scene" aria-hidden="true">
<div class="ld-layer ld-sky"></div>
<div class="ld-layer ld-lamps"></div>
<div class="ld-road"><div class="ld-dash"></div><div class="ld-edge"></div></div>
<div class="ld-car">
<svg viewBox="0 0 260 92">
<defs>
<linearGradient id="cb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a4552"/><stop offset=".55" stop-color="#1d242c"/><stop offset="1" stop-color="#10151a"/></linearGradient>
<linearGradient id="cg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7e98ad"/><stop offset="1" stop-color="#27323d"/></linearGradient>
<linearGradient id="bm" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f4ffc0" stop-opacity=".85"/><stop offset="1" stop-color="#d9ff3f" stop-opacity="0"/></linearGradient>
<radialGradient id="ug"><stop offset="0" stop-color="#d9ff3f" stop-opacity=".5"/><stop offset="1" stop-color="#d9ff3f" stop-opacity="0"/></radialGradient>
</defs>
<ellipse cx="130" cy="88" rx="125" ry="9" fill="url(#ug)"/>
<g stroke="#d9ff3f" stroke-width="2" stroke-linecap="round" opacity=".7"><line class="sl" x1="-10" y1="40" x2="-40" y2="40"/><line class="sl" x1="-6" y1="56" x2="-50" y2="56"/><line class="sl" x1="-12" y1="70" x2="-38" y2="70"/></g>
<polygon class="beam" points="250,56 470,28 470,92 250,66" fill="url(#bm)"/>
<path d="M8 66 L12 52 Q14 45 25 43 L60 39 Q80 17 114 15 L152 15 Q178 17 196 38 L232 43 Q252 47 254 60 L254 68 Q254 72 249 72 L12 72 Q8 72 8 68Z" fill="url(#cb)"/>
<path d="M72 38 Q88 22 113 21 L125 21 L125 38Z M133 21 L152 21 Q171 23 185 38 L133 38Z" fill="url(#cg)"/>
<path d="M14 54 L248 54" stroke="#d9ff3f" stroke-width="2.2" stroke-linecap="round" opacity=".95"/>
<path d="M129 21 L129 62" stroke="#0c1014" stroke-width="1.5"/>
<rect x="144" y="46" width="14" height="3" rx="1.5" fill="#0c1014"/>
<path d="M6 46 L22 44 L22 49 L6 52Z" fill="#161c22"/>
<rect x="5" y="55" width="7" height="7" rx="2" fill="#ff4a3d"/><rect x="5" y="55" width="7" height="7" rx="2" fill="#ff4a3d" opacity=".5" transform="translate(-3 0)"/>
<path d="M240 52 L254 56 L254 62 L242 62Z" fill="#f4ffc0"/>
<circle cx="64" cy="72" r="22" fill="#090b0e"/><circle cx="198" cy="72" r="22" fill="#090b0e"/>
<g class="wh"><circle cx="64" cy="72" r="18" fill="#0b0e12" stroke="#2c353f" stroke-width="2"/><circle cx="64" cy="72" r="11" fill="#1a2027" stroke="#d9ff3f" stroke-width="2"/><path d="M64 63V81M55 72H73M57.6 65.6 70.4 78.4M70.4 65.6 57.6 78.4" stroke="#d9ff3f" stroke-width="1.6" stroke-linecap="round"/><circle cx="64" cy="72" r="2.5" fill="#d9ff3f"/></g>
<g class="wh"><circle cx="198" cy="72" r="18" fill="#0b0e12" stroke="#2c353f" stroke-width="2"/><circle cx="198" cy="72" r="11" fill="#1a2027" stroke="#d9ff3f" stroke-width="2"/><path d="M198 63V81M189 72H207M191.6 65.6 204.4 78.4M204.4 65.6 191.6 78.4" stroke="#d9ff3f" stroke-width="1.6" stroke-linecap="round"/><circle cx="198" cy="72" r="2.5" fill="#d9ff3f"/></g>
</svg>
</div>
</div>
<div class="ld-bar"><div class="ld-row"><span id="ldText">Заводим мотор</span><strong id="ldPct">0%</strong></div><div class="ld-track"><div class="ld-fill" id="ldFill"></div></div></div>`;
var SiteLoader = (0, import_react.memo)(function SiteLoader() {
	const ref = (0, import_react.useRef)(null);
	const [gone, setGone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const L = ref.current;
		if (!L) return;
		const fill = L.querySelector("#ldFill");
		const pct = L.querySelector("#ldPct");
		const txt = L.querySelector("#ldText");
		if (!fill || !pct || !txt) return;
		document.body.classList.add("ld-lock");
		const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
		const start = Date.now();
		const MIN = reduce ? 300 : 2400;
		let loaded = document.readyState === "complete";
		let p = 0;
		let finished = false;
		const msgs = [
			[0, "Заводим мотор"],
			[30, "Выезжаем на трассу"],
			[65, "Набираем скорость"],
			[92, "Почти на месте"]
		];
		const onLoad = () => {
			loaded = true;
		};
		window.addEventListener("load", onLoad);
		const set = (v) => {
			p = v;
			const r = Math.round(v);
			fill.style.width = r + "%";
			pct.textContent = r + "%";
			for (let i = msgs.length - 1; i >= 0; i--) if (r >= msgs[i][0]) {
				txt.textContent = msgs[i][1];
				break;
			}
		};
		const timers = [];
		const finish = () => {
			if (finished) return;
			finished = true;
			set(100);
			txt.textContent = "Приехали!";
			L.classList.add("go");
			timers.push(window.setTimeout(() => {
				L.classList.add("done");
				document.body.classList.remove("ld-lock");
			}, reduce ? 0 : 750));
			timers.push(window.setTimeout(() => setGone(true), 2200));
		};
		const iv = window.setInterval(() => {
			const t = Date.now() - start;
			const target = Math.min(t / MIN * 90, 90);
			if (loaded && t >= MIN) {
				window.clearInterval(iv);
				finish();
				return;
			}
			if (target > p) {
				const step = p + (target - p) * .25 + .2;
				set(step > target ? target : step);
			}
			if (t > 9e3) {
				window.clearInterval(iv);
				finish();
			}
		}, 60);
		return () => {
			window.removeEventListener("load", onLoad);
			window.clearInterval(iv);
			timers.forEach((id) => window.clearTimeout(id));
			document.body.classList.remove("ld-lock");
		};
	}, []);
	if (gone) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "ld",
		id: "loader",
		role: "status",
		"aria-live": "polite",
		"aria-label": "Загрузка сайта",
		dangerouslySetInnerHTML: { __html: LOADER_HTML }
	});
});
var products = [
	{
		id: 1,
		name: "Мультимедийная система DriveTech 9″",
		category: "Мультимедиа",
		brand: "DriveTech",
		price: 18990,
		old: 22990,
		badge: "Хит",
		img: "photo-1511919884226-fd3cad34687c",
		pop: 98
	},
	{
		id: 2,
		name: "LED-комплект NightRay Pro H7",
		category: "Свет",
		brand: "NightRay",
		price: 4290,
		old: 5790,
		badge: "Скидка",
		img: "photo-1489824904134-891ab64532f1",
		pop: 96
	},
	{
		id: 3,
		name: "Видеорегистратор RoadPro 4K Duo",
		category: "Видеорегистраторы",
		brand: "RoadPro",
		price: 12490,
		old: 0,
		badge: "Хит",
		img: "photo-1519641471654-76ce0107ad1b",
		pop: 94
	},
	{
		id: 4,
		name: "Коврики 3D Premium — комплект",
		category: "Комфорт",
		brand: "AutoLux",
		price: 6490,
		old: 7990,
		badge: "Скидка",
		img: "photo-1507136566006-cfc505b114fc",
		pop: 93
	},
	{
		id: 5,
		name: "Беспроводной держатель MagSafe",
		category: "Аксессуары",
		brand: "RUSST",
		price: 2490,
		old: 0,
		badge: "Новинка",
		img: "photo-1493238792000-8113da705763",
		pop: 90
	},
	{
		id: 6,
		name: "Комплект линз Optic Vision LED",
		category: "Оптика",
		brand: "NightRay",
		price: 8990,
		old: 10990,
		badge: "Хит",
		img: "photo-1503376780353-7e6692767b70",
		pop: 89
	},
	{
		id: 7,
		name: "Органайзер в багажник FlexBox",
		category: "Хранение",
		brand: "AutoLux",
		price: 1790,
		old: 0,
		badge: "Новинка",
		img: "photo-1533473359331-0135ef1b58bf",
		pop: 85
	},
	{
		id: 8,
		name: "Пенный очиститель салона 500 мл",
		category: "Уход",
		brand: "RoadPro",
		price: 690,
		old: 890,
		badge: "Скидка",
		img: "photo-1601362840469-51e4d8d58785",
		pop: 84
	},
	{
		id: 9,
		name: "Ручки дверей Black Edition",
		category: "Аксессуары",
		brand: "RUSST",
		price: 3290,
		old: 0,
		badge: "Новинка",
		img: "photo-1492144534655-ae79c964c9d7",
		pop: 80
	},
	{
		id: 10,
		name: "Зарядное устройство USB-C 45W",
		category: "Аксессуары",
		brand: "DriveTech",
		price: 1490,
		old: 1990,
		badge: "Скидка",
		img: "photo-1503736334956-4c8f8e92946d",
		pop: 79
	},
	{
		id: 11,
		name: "Камера заднего вида HD Wide",
		category: "Видеорегистраторы",
		brand: "RoadPro",
		price: 2890,
		old: 0,
		badge: "Хит",
		img: "photo-1486262715619-67b85e0b08d3",
		pop: 77
	},
	{
		id: 12,
		name: "Подсветка салона Ambient RGB",
		category: "Свет",
		brand: "NightRay",
		price: 2190,
		old: 2790,
		badge: "Скидка",
		img: "photo-1503376780353-7e6692767b70",
		pop: 75
	},
	{
		id: 13,
		name: "Автомагнитола Touch 7″",
		category: "Мультимедиа",
		brand: "DriveTech",
		price: 9990,
		old: 0,
		badge: "Новинка",
		img: "photo-1511919884226-fd3cad34687c",
		pop: 73
	},
	{
		id: 14,
		name: "Чехол на руль SoftGrip",
		category: "Комфорт",
		brand: "AutoLux",
		price: 1290,
		old: 0,
		badge: "",
		img: "photo-1507136566006-cfc505b114fc",
		pop: 71
	},
	{
		id: 15,
		name: "Полироль кузова Ceramic Coat",
		category: "Уход",
		brand: "RoadPro",
		price: 1190,
		old: 1590,
		badge: "Скидка",
		img: "photo-1601362840469-51e4d8d58785",
		pop: 68
	},
	{
		id: 16,
		name: "Держатель очков магнитный",
		category: "Аксессуары",
		brand: "RUSST",
		price: 590,
		old: 0,
		badge: "",
		img: "photo-1493238792000-8113da705763",
		pop: 65
	},
	{
		id: 17,
		name: "Фары LED Matrix Style",
		category: "Оптика",
		brand: "NightRay",
		price: 15990,
		old: 18990,
		badge: "Новинка",
		img: "photo-1489824904134-891ab64532f1",
		pop: 63
	},
	{
		id: 18,
		name: "Складной столик TravelMate",
		category: "Хранение",
		brand: "AutoLux",
		price: 1990,
		old: 0,
		badge: "",
		img: "photo-1533473359331-0135ef1b58bf",
		pop: 61
	},
	{
		id: 19,
		name: "Компрессор AirDrive Compact",
		category: "Аксессуары",
		brand: "DriveTech",
		price: 3590,
		old: 4290,
		badge: "Скидка",
		img: "photo-1503736334956-4c8f8e92946d",
		pop: 59
	},
	{
		id: 20,
		name: "Силиконовые щётки стеклоочистителя",
		category: "Аксессуары",
		brand: "RUSST",
		price: 1690,
		old: 0,
		badge: "",
		img: "photo-1492144534655-ae79c964c9d7",
		pop: 56
	}
];
var categories = [
	"Мультимедиа",
	"Оптика",
	"Свет",
	"Комфорт",
	"Видеорегистраторы",
	"Уход",
	"Хранение",
	"Аксессуары"
];
var brands = [
	"DriveTech",
	"RoadPro",
	"AutoLux",
	"RUSST",
	"NightRay"
];
var categoryTiles = [
	{
		cat: "Мультимедиа",
		title: "Магнитолы и мультимедиа",
		img: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=700&q=80"
	},
	{
		cat: "Оптика",
		title: "Фары и оптика",
		img: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"
	},
	{
		cat: "Свет",
		title: "Свет и подсветка",
		img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80"
	},
	{
		cat: "Комфорт",
		title: "Комфорт и интерьер",
		img: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=700&q=80"
	},
	{
		cat: "Видеорегистраторы",
		title: "Видеорегистраторы",
		img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=700&q=80"
	},
	{
		cat: "Уход",
		title: "Автохимия и уход",
		img: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=700&q=80"
	},
	{
		cat: "Хранение",
		title: "Органайзеры и хранение",
		img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=700&q=80"
	},
	{
		cat: "Аксессуары",
		title: "Аксессуары и гаджеты",
		img: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=700&q=80"
	}
];
var money = (n) => new Intl.NumberFormat("ru-RU").format(n) + " ₽";
var photo = (id, w = 650) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
var MAKES = [
	"Toyota",
	"Kia",
	"Hyundai",
	"BMW",
	"Mercedes-Benz",
	"Volkswagen",
	"LADA",
	"Skoda",
	"Honda"
];
var MODELS = [
	"Camry",
	"RAV4",
	"Rio",
	"Solaris",
	"3 Series",
	"C-Class",
	"Vesta",
	"Octavia",
	"Другая"
];
var YEARS = [
	"2025",
	"2024",
	"2023",
	"2022",
	"2021",
	"2020",
	"2019",
	"2018 и старше"
];
var FAQS = [
	{
		q: "Как проверить совместимость с моим автомобилем?",
		a: "Выберите марку, модель и год в форме подбора или напишите нам. Для точного результата можем уточнить комплектацию и поколение автомобиля."
	},
	{
		q: "Сколько занимает доставка?",
		a: "Срок зависит от города и способа доставки. После подтверждения заказа сообщим ориентировочную дату и отправим трек-номер."
	},
	{
		q: "Можно заказать установку купленного товара?",
		a: "Да, помогаем с установкой мультимедиа, света и автоэлектроники. Оставьте заявку в контактах — согласуем задачу, стоимость и время."
	},
	{
		q: "Что делать, если товар не подошёл?",
		a: "Свяжитесь с нами до установки товара. Разберёмся с причиной и подскажем дальнейшие действия в соответствии с условиями возврата и действующим законодательством."
	},
	{
		q: "Какие способы оплаты доступны?",
		a: "В демонстрационной версии заказ оформляется как заявка. Менеджер подтверждает наличие, стоимость доставки и доступные способы оплаты."
	}
];
function BrandMark({ withWheels = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "brand-mark",
		viewBox: "0 0 48 48",
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M5 29 11 17Q12 14 16 14H32Q36 14 38 18L43 29V37H38V33H10V37H5V29Z",
				stroke: "currentColor",
				strokeWidth: "2.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 25 16 18H32L37 25H12Z",
				fill: "currentColor",
				opacity: ".28"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M3 25H11M37 25H45M16 33H32",
				stroke: "currentColor",
				strokeWidth: "2.5",
				strokeLinecap: "round"
			}),
			withWheels ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "13",
				cy: "29",
				r: "2",
				fill: "currentColor"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "35",
				cy: "29",
				r: "2",
				fill: "currentColor"
			})] }) : null
		]
	});
}
function SearchIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "icon",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 24 24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10.8",
				cy: "10.8",
				r: "6.8"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m16 16 5 5" })]
		})
	});
}
function HeartIcon({ filled = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		width: "17",
		height: "17",
		fill: filled ? "currentColor" : "none",
		stroke: "currentColor",
		strokeWidth: "1.8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.8 8.8c0 5.5-8.8 11-8.8 11s-8.8-5.5-8.8-11A4.8 4.8 0 0 1 12 6.4a4.8 4.8 0 0 1 8.8 2.4Z" })
	});
}
function CartIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "icon",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 24 24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.4L22 8H6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "10",
					cy: "20",
					r: "1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "18",
					cy: "20",
					r: "1"
				})
			]
		})
	});
}
function loadCart() {
	try {
		const raw = JSON.parse(localStorage.getItem("russt_cart") || "{}");
		const cart = {};
		for (const [key, qty] of Object.entries(raw)) {
			const id = Number(key);
			if (qty > 0 && Number.isFinite(id)) cart[id] = qty;
		}
		return cart;
	} catch {
		return {};
	}
}
function loadFavs() {
	try {
		const raw = JSON.parse(localStorage.getItem("russt_favs") || "[]");
		return Array.isArray(raw) ? raw.filter((id) => typeof id === "number") : [];
	} catch {
		return [];
	}
}
function Storefront() {
	const [cart, setCart] = (0, import_react.useState)({});
	const [favorites, setFavorites] = (0, import_react.useState)([]);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [sortMode, setSortMode] = (0, import_react.useState)("popular");
	const [query, setQuery] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("");
	const [brand, setBrand] = (0, import_react.useState)("");
	const [availability, setAvailability] = (0, import_react.useState)("");
	const [drawer, setDrawer] = (0, import_react.useState)(null);
	const [checkout, setCheckout] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [toast, setToast] = (0, import_react.useState)("");
	const [toastOn, setToastOn] = (0, import_react.useState)(false);
	const [openFaq, setOpenFaq] = (0, import_react.useState)({ 0: true });
	const [make, setMake] = (0, import_react.useState)("");
	const [model, setModel] = (0, import_react.useState)("");
	const [year, setYear] = (0, import_react.useState)("");
	const [timer, setTimer] = (0, import_react.useState)({
		d: "02",
		h: "14",
		m: "36",
		s: "48"
	});
	const toastTimer = (0, import_react.useRef)(0);
	const contactRef = (0, import_react.useRef)(null);
	const checkoutRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setCart(loadCart());
		setFavorites(loadFavs());
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		localStorage.setItem("russt_cart", JSON.stringify(cart));
		localStorage.setItem("russt_favs", JSON.stringify(favorites));
	}, [
		cart,
		favorites,
		hydrated
	]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = drawer || checkout ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [drawer, checkout]);
	(0, import_react.useEffect)(() => {
		const deadline = Date.now() + 1728e5 + 504e5 + 216e4 + 48e3;
		const tick = () => {
			const t = Math.max(0, deadline - Date.now());
			const pad = (n) => String(n).padStart(2, "0");
			setTimer({
				d: pad(Math.floor(t / 864e5)),
				h: pad(Math.floor(t % 864e5 / 36e5)),
				m: pad(Math.floor(t % 36e5 / 6e4)),
				s: pad(Math.floor(t % 6e4 / 1e3))
			});
		};
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, []);
	(0, import_react.useEffect)(() => {
		const nodes = document.querySelectorAll(".reveal");
		if (!("IntersectionObserver" in window)) {
			nodes.forEach((el) => el.classList.add("visible"));
			return;
		}
		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					io.unobserve(entry.target);
				}
			});
		}, { threshold: .08 });
		nodes.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
	const showToast = (message) => {
		setToast(message);
		setToastOn(true);
		window.clearTimeout(toastTimer.current);
		toastTimer.current = window.setTimeout(() => setToastOn(false), 2300);
	};
	const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
	const list = (0, import_react.useMemo)(() => {
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
	}, [
		query,
		category,
		brand,
		availability,
		sortMode
	]);
	const addToCart = (id) => {
		setCart((prev) => ({
			...prev,
			[id]: (prev[id] || 0) + 1
		}));
		showToast("Добавлено в корзину");
	};
	const changeQty = (id, delta) => {
		setCart((prev) => {
			const next = { ...prev };
			const qty = (next[id] || 0) + delta;
			if (qty <= 0) delete next[id];
			else next[id] = qty;
			return next;
		});
	};
	const toggleFav = (id) => {
		const exists = favorites.includes(id);
		setFavorites(exists ? favorites.filter((item) => item !== id) : [...favorites, id]);
		showToast(exists ? "Удалено из избранного" : "Добавлено в избранное");
	};
	const scrollTo = (selector) => {
		document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
	};
	const onSearch = (value, scroll) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLoader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap topbar",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "brand",
					href: "#home",
					"aria-label": "RUSST — на главную",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "brand-name",
						children: ["RUS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "ST" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "nav",
					"aria-label": "Основная навигация",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#catalog",
							children: "Каталог"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#services",
							children: "Установка"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#about",
							children: "О нас"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#reviews",
							children: "Отзывы"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contacts",
							children: "Контакты"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "searchbox",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "headerSearch",
						placeholder: "Найти аксессуар...",
						"aria-label": "Поиск товаров",
						value: query,
						onChange: (event) => onSearch(event.target.value, true)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchIcon, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "head-actions",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "round-btn",
							"aria-label": "Избранное",
							type: "button",
							onClick: () => setDrawer("favorites"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartIcon, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "count",
								id: "favCount",
								children: favorites.length
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "round-btn",
							"aria-label": "Корзина",
							type: "button",
							onClick: () => setDrawer("cart"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartIcon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "count",
								id: "cartCount",
								children: cartCount
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "btn btn-primary btn-small call-btn",
							href: "tel:+79877928082",
							children: "Позвонить ↗"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "round-btn mobile-menu",
							"aria-label": "Открыть меню",
							type: "button",
							onClick: () => setMenuOpen((open) => !open),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 7h16M4 12h16M4 17h16" })
								})
							})
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			id: "mobileNav",
			style: {
				display: menuOpen ? "block" : "none",
				padding: "0 16px 18px"
			},
			"aria-label": "Мобильная навигация",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "grid",
					gap: 12
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#catalog",
						onClick: () => setMenuOpen(false),
						children: "Каталог"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#services",
						onClick: () => setMenuOpen(false),
						children: "Установка"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#about",
						onClick: () => setMenuOpen(false),
						children: "О нас"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#reviews",
						onClick: () => setMenuOpen(false),
						children: "Отзывы"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contacts",
						onClick: () => setMenuOpen(false),
						children: "Контакты"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "field",
						id: "mobileSearch",
						placeholder: "Поиск по каталогу...",
						value: query,
						onChange: (event) => onSearch(event.target.value, true)
					})
				]
			})
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "home",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "hero",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-art",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap hero-content",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-kicker",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot" }), " Автоаксессуары нового уровня"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
								"Детали,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"которые ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "решают." })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hero-copy",
								children: "Технологии, стиль и комфорт для твоего автомобиля. Подбираем то, что работает — и выглядит безупречно."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-buttons",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "btn btn-primary",
									href: "#catalog",
									children: ["Открыть каталог ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "btn btn-ghost",
									type: "button",
									onClick: () => scrollTo("#fit"),
									children: ["Подобрать для авто ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-meta",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "meta-item",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "2 400+" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "товаров в ассортименте" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "meta-item",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "24/7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "приём заказов" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "meta-item",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "4.9/5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "оценка клиентов" })]
									})
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "trust-strip",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap trust-inner",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "trust-item",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "icon",
									children: "✳"
								}), " Проверенные бренды"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "trust-item",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "icon",
									children: "↗"
								}), " Доставка по России"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "trust-item",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "icon",
									children: "◈"
								}), " Гарантия на товары"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "trust-item",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "icon",
									children: "⌁"
								}), " Установка под ключ"]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "wrap",
					id: "fit",
					style: { paddingTop: 26 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fit-panel reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "fit-title",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Найди своё сочетание" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Подберём аксессуары под марку и модель авто" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "fit-fields",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "field",
										id: "carMake",
										"aria-label": "Марка автомобиля",
										value: make,
										onChange: (event) => setMake(event.target.value),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Марка автомобиля"
										}), MAKES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "field",
										id: "carModel",
										"aria-label": "Модель автомобиля",
										value: model,
										onChange: (event) => setModel(event.target.value),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Модель"
										}), MODELS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "field",
										id: "carYear",
										"aria-label": "Год выпуска",
										value: year,
										onChange: (event) => setYear(event.target.value),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Год выпуска"
										}), YEARS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "btn btn-primary",
								type: "button",
								onClick: findForCar,
								children: ["Найти ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "section wrap",
					id: "categories",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-head reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: "Собери свой комфорт"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: ["Всё для твоего ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "авто" })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "От заметных апгрейдов до мелочей, которые каждый день делают поездку лучше." })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "categories",
						children: categoryTiles.map((tile) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "category reveal",
							href: "#catalog",
							onClick: () => setCategory(tile.cat),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								loading: "lazy",
								src: tile.img,
								alt: ""
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "category-label",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: tile.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "arrow",
									children: "↗"
								})]
							})]
						}, tile.cat))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section",
					id: "catalog",
					style: {
						background: "#0b0e11",
						borderBlock: "1px solid var(--line)"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "section-head reveal",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow",
									children: "Выбор водителей"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: ["Хиты и ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "новинки" })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "product-tools",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: sortMode === "popular" ? "pill active" : "pill",
											type: "button",
											onClick: () => setSortMode("popular"),
											children: "Популярное"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: sortMode === "new" ? "pill active" : "pill",
											type: "button",
											onClick: () => setSortMode("new"),
											children: "Новинки"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											className: sortMode === "cheap" ? "pill active" : "pill",
											type: "button",
											onClick: () => setSortMode("cheap"),
											children: "Сначала дешевле"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "catalog-bar reveal",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field",
										id: "catalogSearch",
										placeholder: "Название или бренд...",
										"aria-label": "Поиск в каталоге",
										value: query,
										onChange: (event) => onSearch(event.target.value, false)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "field",
										id: "categoryFilter",
										"aria-label": "Категория",
										value: category,
										onChange: (event) => setCategory(event.target.value),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Все категории"
										}), categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "field",
										id: "brandFilter",
										"aria-label": "Бренд",
										value: brand,
										onChange: (event) => setBrand(event.target.value),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Все бренды"
										}), brands.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "field",
										id: "availabilityFilter",
										"aria-label": "Наличие",
										value: availability,
										onChange: (event) => setAvailability(event.target.value),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Любое наличие"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "yes",
											children: "В наличии"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										id: "resultCount",
										style: {
											color: "var(--muted)",
											fontSize: 11,
											marginLeft: "auto"
										},
										children: [list.length, " товаров"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "products",
								id: "productGrid",
								"aria-live": "polite",
								children: list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "empty-state",
									children: "Ничего не найдено. Попробуйте изменить фильтры."
								}) : list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
									product: item,
									inCart: Boolean(cart[item.id]),
									faved: favorites.includes(item.id),
									onAdd: addToCart,
									onFav: toggleFav
								}, item.id))
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "promo",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "wrap",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "promo-card reveal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "promo-content",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "eyebrow",
										children: "Время обновить салон"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
										"−15% на первый",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"апгрейд"
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										"Скидка на аксессуары по промокоду ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											style: { color: "var(--accent)" },
											children: "START15"
										}),
										". До конца предложения."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#catalog",
										className: "btn btn-primary",
										children: "Выбрать товары ↗"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "promo-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "timer",
									id: "timer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "timer-unit",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												id: "days",
												children: timer.d
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "дней" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "timer-unit",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												id: "hours",
												children: timer.h
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "часов" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "timer-unit",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												id: "minutes",
												children: timer.m
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "минут" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "timer-unit",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												id: "seconds",
												children: timer.s
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "секунд" })]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										fontSize: 10,
										color: "#9ba58a"
									},
									children: "Предложение ограничено по времени"
								})]
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "section wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-head reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: "Почему RUSST"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: ["Сервис без ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "компромиссов" })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Не просто продаём коробки. Помогаем выбрать решение, которое подходит именно тебе." })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "features",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
								icon: "◇",
								title: "Проверенное качество",
								text: "Отбираем бренды и проверяем каждую поставку."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
								icon: "✓",
								title: "Гарантия и поддержка",
								text: "Не пропадаем после покупки — остаёмся на связи."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
								icon: "↗",
								title: "Быстрая доставка",
								text: "Отправляем заказы по всей России."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
								icon: "⌁",
								title: "Установка у профи",
								text: "Аккуратный монтаж и проверка результата."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
								icon: "◎",
								title: "Помощь в подборе",
								text: "Учитываем модель, комплектацию и задачи."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section",
					id: "services",
					style: {
						background: "#0b0e11",
						borderBlock: "1px solid var(--line)"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-head reveal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow",
								children: "Установка и настройка"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"Сделаем красиво.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Сделаем правильно." })
							] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Чистый монтаж, аккуратная интеграция и никаких лишних проводов на виду." })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "install-grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "install-main reveal",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									loading: "lazy",
									src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1100&q=80",
									alt: "Работа в автомобильном сервисе"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "install-copy",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "eyebrow",
											children: "01 / Мультимедиа"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Звук, который меняет поездку" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Установка головных устройств, камер, акустики и интеграция со штатными системами." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#contacts",
											className: "btn btn-primary btn-small",
											children: "Записаться на установку ↗"
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "install-side",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "install-mini reveal",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										loading: "lazy",
										src: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
										alt: ""
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "eyebrow",
											children: "02 / Свет"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Видеть больше. Светить точнее." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Подбор и установка автомобильного света." })
									] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "install-mini reveal",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										loading: "lazy",
										src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
										alt: ""
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "eyebrow",
											children: "03 / Электроника"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Защита под контролем" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Регистраторы, парктроники и охранные системы." })
									] })]
								})]
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "section wrap",
					id: "reviews",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-head reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eyebrow",
							children: "Говорят клиенты"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: ["Проверено ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "дорогой" })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Доверие складывается из деталей — и мы это ценим." })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reviews",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Review, {
								initials: "АК",
								name: "Алексей К.",
								meta: "Kia Sportage · Магнитола",
								text: "«Подобрали магнитолу под штатное место, всё встало идеально. Установили за пару часов, салон оставили чище, чем был. Очень достойно»."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Review, {
								initials: "МВ",
								name: "Мария В.",
								meta: "Volkswagen Polo · Свет",
								text: "«Наконец-то нормальный свет без колхоза. Объяснили разницу, предложили варианты под бюджет. По итогу — именно то, что хотел»."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Review, {
								initials: "ДР",
								name: "Дмитрий Р.",
								meta: "Toyota Camry · Коврики",
								text: "«Заказ приехал быстро, упаковка отличная. Помогли проверить совместимость ковриков до оплаты — вот это сервис. Буду обращаться ещё»."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section about",
					id: "about",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap about-grid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "about-visual reveal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								loading: "lazy",
								src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1100&q=85",
								alt: "Спортивный автомобиль на дороге"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "about-stamp",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "R + S" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Два друга. Один драйв." })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "about-copy reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow",
									children: "Кто стоит за брендом"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
									"Начали с гаража.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Выросли в дело." })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Мы — Руслан и Стас. Когда-то спорили о том, почему найти хорошую мелочь для машины сложнее, чем саму машину. В итоге решили: сделаем место, куда сами хотели бы приходить." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Так появился RUSST — магазин для тех, кто замечает детали. Мы тестируем, сравниваем, задаём поставщикам неудобные вопросы и не советуем то, что не поставили бы себе." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Наша идея простая: меньше шума, больше пользы. Выбирай с умом, ездить должно в удовольствие." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "about-sign",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "founder",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Руслан" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Подбор и технологии" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "founder",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Стас" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Сервис и качество" })]
									})]
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section wrap",
					id: "faq",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "faq-grid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "faq-intro reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "eyebrow",
									children: "Есть вопросы?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
									"Разложим",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"по ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "полочкам" })
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Если не нашли ответ — напишите нам. Поможем разобраться без сложных терминов." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contacts",
									className: "btn btn-ghost",
									children: "Задать вопрос ↗"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "faq-list reveal",
							children: FAQS.map((item, index) => {
								const open = Boolean(openFaq[index]);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: open ? "faq-item open" : "faq-item",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "faq-question",
										type: "button",
										"aria-expanded": open,
										onClick: () => setOpenFaq((prev) => ({
											...prev,
											[index]: !prev[index]
										})),
										children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "＋" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "faq-answer",
										children: item.a
									})]
								}, item.q);
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section",
					id: "contacts",
					style: {
						background: "#0b0e11",
						borderTop: "1px solid var(--line)"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-head reveal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow",
								children: "Мы на связи"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: ["Обсудим твой ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "проект?" })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Подскажем по товару, совместимости, срокам и установке." })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "contact-grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "contact-info reveal",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Контакты" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "contact-line",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "icon",
											children: "↗"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Телефон" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+79877928082",
											children: "+7 987 792-80-82"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "contact-line",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "icon",
											children: "◷"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "График работы" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ежедневно, 09:00–21:00" })] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "contact-line",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "icon",
											children: "⌖"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Шоурум и установка" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Адрес уточняется при записи" })] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "contact-line",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "icon",
											children: "✉"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Мессенджеры" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "https://t.me/",
												target: "_blank",
												rel: "noreferrer",
												children: "Telegram"
											}),
											" · ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "https://wa.me/",
												target: "_blank",
												rel: "noreferrer",
												children: "WhatsApp"
											})
										] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "map-placeholder",
										role: "img",
										"aria-label": "Карта — адрес уточняется при записи",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "map-pin",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "icon",
												children: "⌖"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "RUSST / точка встречи" })]
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "contact-form reveal",
								id: "contactForm",
								ref: contactRef,
								onSubmit: (event) => {
									event.preventDefault();
									contactRef.current?.reset();
									showToast("Спасибо! В демо-версии заявка не отправляется на сервер.");
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Оставить заявку" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Ответим и поможем найти правильное решение." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "form-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: "field",
											required: true,
											name: "name",
											placeholder: "Как к вам обращаться",
											"aria-label": "Имя"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: "field",
											required: true,
											name: "phone",
											type: "tel",
											placeholder: "+7 (___) ___-__-__",
											"aria-label": "Телефон"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "field",
										name: "topic",
										"aria-label": "Тема обращения",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Подбор товара" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Установка" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Статус заказа" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Другой вопрос" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										className: "field",
										name: "message",
										placeholder: "Марка авто и что хотите подобрать (необязательно)",
										"aria-label": "Сообщение"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										style: {
											display: "flex",
											gap: 9,
											alignItems: "start",
											color: "var(--muted)",
											fontSize: 10,
											margin: "6px 0 18px"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											required: true,
											style: {
												accentColor: "var(--accent)",
												marginTop: 3
											}
										}), " Согласен(на) на обработку персональных данных для ответа на заявку."]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "btn btn-primary",
										type: "submit",
										children: "Отправить заявку ↗"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										style: {
											fontSize: 10,
											margin: "13px 0 0"
										},
										children: "Демо-форма: данные не отправляются на сервер."
									})
								]
							})]
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-brand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "brand",
							href: "#home",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { withWheels: false }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "brand-name",
								children: ["RUS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "ST" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Аксессуары, которые делают каждую поездку твоей. Два друга, один подход к качеству." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Покупателям" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#catalog",
								children: "Каталог товаров"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#fit",
								children: "Подбор по авто"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contacts",
								children: "Доставка и оплата"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#faq",
								children: "Возврат и гарантия"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Сервис" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								children: "Установка"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#reviews",
								children: "Отзывы"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#about",
								children: "О бренде"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contacts",
								children: "Задать вопрос"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "На связи" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+79877928082",
								children: "+7 987 792-80-82"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://t.me/",
								target: "_blank",
								rel: "noreferrer",
								children: "Telegram ↗"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://wa.me/",
								target: "_blank",
								rel: "noreferrer",
								children: "WhatsApp ↗"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:hello@russt.example",
								children: "hello@russt.example"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-bottom",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2025–2026 RUSST. Демонстрационный магазин." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Цены и наличие в макете — примеры. Политика конфиденциальности" })]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mobile-bottom",
			"aria-label": "Быстрые действия",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => scrollTo("#catalog"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "icon",
						children: "▦"
					}), "Каталог"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						document.querySelector("#headerSearch")?.focus();
						window.scrollTo({
							top: 0,
							behavior: "smooth"
						});
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "icon",
						children: "⌕"
					}), "Поиск"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setDrawer("cart"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "icon",
							children: "♧"
						}),
						"Корзина ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							id: "mobileCartCount",
							children: cartCount ? `(${cartCount})` : ""
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "tel:+79877928082",
					style: {
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: 4,
						flexDirection: "column",
						fontSize: 9,
						color: "#aeb6bd"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "icon",
						children: "↗"
					}), "Позвонить"]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: drawer ? "drawer-backdrop open" : "drawer-backdrop",
			id: "backdrop",
			onClick: () => setDrawer(null)
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: drawer ? "drawer open" : "drawer",
			id: "drawer",
			"aria-label": "Панель корзины",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "drawer-head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					id: "drawerTitle",
					children: drawer === "favorites" ? "Избранное" : "Корзина"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "close-btn",
					type: "button",
					onClick: () => setDrawer(null),
					"aria-label": "Закрыть",
					children: "×"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "drawerBody",
				children: drawer === "favorites" ? favList.length ? favList.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cart-item",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photo(item.img, 200),
						alt: ""
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.name }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: money(item.price) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "qty",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => toggleFav(item.id),
								children: "×"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => addToCart(item.id),
								children: "В корзину +"
							})]
						})
					] })]
				}, item.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "drawer-empty",
					children: "Пока ничего не добавлено в избранное."
				}) : entries.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					entries.map(([id, qty]) => {
						const item = products.find((product) => product.id === Number(id));
						if (!item) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "cart-item",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: photo(item.img, 200),
									alt: ""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.name }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: money(item.price) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "qty",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => changeQty(item.id, -1),
												children: "−"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: qty }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => changeQty(item.id, 1),
												children: "+"
											})
										]
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: money(item.price * qty) })
							]
						}, id);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "cart-total",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Итого" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: money(total) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn btn-primary",
						type: "button",
						onClick: openCheckout,
						children: "Перейти к оформлению ↗"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "btn btn-ghost",
						type: "button",
						onClick: () => setDrawer(null),
						children: "Продолжить покупки"
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "drawer-empty",
					children: [
						"Корзина пока пуста.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "btn btn-primary",
							href: "#catalog",
							onClick: () => setDrawer(null),
							children: "Перейти в каталог ↗"
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: checkout ? "modal open" : "modal",
			id: "checkoutModal",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "checkoutTitle",
			onClick: (event) => {
				if (event.target === event.currentTarget) setCheckout(false);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "modal-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							id: "checkoutTitle",
							children: "Оформление заказа"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "close-btn",
							type: "button",
							onClick: () => setCheckout(false),
							"aria-label": "Закрыть",
							children: "×"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Оставьте контакты — менеджер подтвердит заказ и доставку." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						id: "checkoutForm",
						ref: checkoutRef,
						onSubmit: (event) => {
							event.preventDefault();
							setCart({});
							setCheckout(false);
							checkoutRef.current?.reset();
							showToast("Заявка оформлена в демо-режиме");
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "field",
								name: "name",
								required: true,
								placeholder: "Ваше имя",
								"aria-label": "Ваше имя",
								style: { marginBottom: 10 }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "field",
								name: "phone",
								required: true,
								type: "tel",
								placeholder: "Телефон",
								"aria-label": "Телефон",
								style: { marginBottom: 10 }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "field",
								name: "delivery",
								style: { marginBottom: 10 },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Доставка курьером" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Пункт выдачи" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Самовывоз после согласования" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "field",
								name: "payment",
								style: { marginBottom: 10 },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Оплата при подтверждении" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Картой онлайн (демо)" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "При получении" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "modal-actions",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "btn btn-ghost",
									onClick: () => setCheckout(false),
									children: "Назад"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "btn btn-primary",
									type: "submit",
									children: "Подтвердить ↗"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									fontSize: 10,
									marginTop: 14
								},
								children: "Демонстрация: оформление не создаёт реальный заказ."
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: toastOn ? "toast show" : "toast",
			id: "toast",
			role: "status",
			"aria-live": "polite",
			children: toast
		})
	] });
}
function ProductCard({ product, inCart, faved, onAdd, onFav }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "product-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "product-image",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					loading: "lazy",
					src: photo(product.img),
					alt: product.name
				}),
				product.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: product.badge === "Скидка" ? "product-badge sale" : "product-badge",
					children: product.badge
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: faved ? "fav-btn active" : "fav-btn",
					"aria-label": faved ? "Убрать из избранного" : "В избранное",
					type: "button",
					onClick: () => onFav(product.id),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartIcon, { filled: faved })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "product-info",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "product-category",
					children: [
						product.brand,
						" / ",
						product.category
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: product.name }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "price-line",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "price",
						children: money(product.price)
					}), product.old ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "old-price",
						children: money(product.old)
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "product-bottom",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "stock",
						children: "В наличии"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "add-btn",
						type: "button",
						onClick: () => onAdd(product.id),
						children: inCart ? "В корзине · +" : "В корзину +"
					})]
				})
			]
		})]
	});
}
function Feature({ icon, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "feature reveal",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "icon",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text })
		]
	});
}
function Review({ initials, name, meta, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "review reveal",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "stars",
				children: "★★★★★"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: text }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "review-person",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "avatar",
					children: initials
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: meta })] })]
			})
		]
	});
}
var SplitComponent = Storefront;
//#endregion
export { SplitComponent as component };
