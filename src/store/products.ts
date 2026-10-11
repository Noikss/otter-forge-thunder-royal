export type Product = {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  old: number;
  badge: string;
  img: string;
  pop: number;
};

export const products: Product[] = [
  { id: 1, name: "Мультимедийная система DriveTech 9″", category: "Мультимедиа", brand: "DriveTech", price: 18990, old: 22990, badge: "Хит", img: "photo-1511919884226-fd3cad34687c", pop: 98 },
  { id: 2, name: "LED-комплект NightRay Pro H7", category: "Свет", brand: "NightRay", price: 4290, old: 5790, badge: "Скидка", img: "photo-1489824904134-891ab64532f1", pop: 96 },
  { id: 3, name: "Видеорегистратор RoadPro 4K Duo", category: "Видеорегистраторы", brand: "RoadPro", price: 12490, old: 0, badge: "Хит", img: "photo-1519641471654-76ce0107ad1b", pop: 94 },
  { id: 4, name: "Коврики 3D Premium — комплект", category: "Комфорт", brand: "AutoLux", price: 6490, old: 7990, badge: "Скидка", img: "photo-1507136566006-cfc505b114fc", pop: 93 },
  { id: 5, name: "Беспроводной держатель MagSafe", category: "Аксессуары", brand: "RUSST", price: 2490, old: 0, badge: "Новинка", img: "photo-1493238792000-8113da705763", pop: 90 },
  { id: 6, name: "Комплект линз Optic Vision LED", category: "Оптика", brand: "NightRay", price: 8990, old: 10990, badge: "Хит", img: "photo-1503376780353-7e6692767b70", pop: 89 },
  { id: 7, name: "Органайзер в багажник FlexBox", category: "Хранение", brand: "AutoLux", price: 1790, old: 0, badge: "Новинка", img: "photo-1533473359331-0135ef1b58bf", pop: 85 },
  { id: 8, name: "Пенный очиститель салона 500 мл", category: "Уход", brand: "RoadPro", price: 690, old: 890, badge: "Скидка", img: "photo-1601362840469-51e4d8d58785", pop: 84 },
  { id: 9, name: "Ручки дверей Black Edition", category: "Аксессуары", brand: "RUSST", price: 3290, old: 0, badge: "Новинка", img: "photo-1492144534655-ae79c964c9d7", pop: 80 },
  { id: 10, name: "Зарядное устройство USB-C 45W", category: "Аксессуары", brand: "DriveTech", price: 1490, old: 1990, badge: "Скидка", img: "photo-1503736334956-4c8f8e92946d", pop: 79 },
  { id: 11, name: "Камера заднего вида HD Wide", category: "Видеорегистраторы", brand: "RoadPro", price: 2890, old: 0, badge: "Хит", img: "photo-1486262715619-67b85e0b08d3", pop: 77 },
  { id: 12, name: "Подсветка салона Ambient RGB", category: "Свет", brand: "NightRay", price: 2190, old: 2790, badge: "Скидка", img: "photo-1503376780353-7e6692767b70", pop: 75 },
  { id: 13, name: "Автомагнитола Touch 7″", category: "Мультимедиа", brand: "DriveTech", price: 9990, old: 0, badge: "Новинка", img: "photo-1511919884226-fd3cad34687c", pop: 73 },
  { id: 14, name: "Чехол на руль SoftGrip", category: "Комфорт", brand: "AutoLux", price: 1290, old: 0, badge: "", img: "photo-1507136566006-cfc505b114fc", pop: 71 },
  { id: 15, name: "Полироль кузова Ceramic Coat", category: "Уход", brand: "RoadPro", price: 1190, old: 1590, badge: "Скидка", img: "photo-1601362840469-51e4d8d58785", pop: 68 },
  { id: 16, name: "Держатель очков магнитный", category: "Аксессуары", brand: "RUSST", price: 590, old: 0, badge: "", img: "photo-1493238792000-8113da705763", pop: 65 },
  { id: 17, name: "Фары LED Matrix Style", category: "Оптика", brand: "NightRay", price: 15990, old: 18990, badge: "Новинка", img: "photo-1489824904134-891ab64532f1", pop: 63 },
  { id: 18, name: "Складной столик TravelMate", category: "Хранение", brand: "AutoLux", price: 1990, old: 0, badge: "", img: "photo-1533473359331-0135ef1b58bf", pop: 61 },
  { id: 19, name: "Компрессор AirDrive Compact", category: "Аксессуары", brand: "DriveTech", price: 3590, old: 4290, badge: "Скидка", img: "photo-1503736334956-4c8f8e92946d", pop: 59 },
  { id: 20, name: "Силиконовые щётки стеклоочистителя", category: "Аксессуары", brand: "RUSST", price: 1690, old: 0, badge: "", img: "photo-1492144534655-ae79c964c9d7", pop: 56 },
];

export const categories = [
  "Мультимедиа",
  "Оптика",
  "Свет",
  "Комфорт",
  "Видеорегистраторы",
  "Уход",
  "Хранение",
  "Аксессуары",
] as const;

export const brands = ["DriveTech", "RoadPro", "AutoLux", "RUSST", "NightRay"] as const;

export const categoryTiles: { cat: string; title: string; img: string }[] = [
  { cat: "Мультимедиа", title: "Магнитолы и мультимедиа", img: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=700&q=80" },
  { cat: "Оптика", title: "Фары и оптика", img: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80" },
  { cat: "Свет", title: "Свет и подсветка", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80" },
  { cat: "Комфорт", title: "Комфорт и интерьер", img: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=700&q=80" },
  { cat: "Видеорегистраторы", title: "Видеорегистраторы", img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=700&q=80" },
  { cat: "Уход", title: "Автохимия и уход", img: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=700&q=80" },
  { cat: "Хранение", title: "Органайзеры и хранение", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=700&q=80" },
  { cat: "Аксессуары", title: "Аксессуары и гаджеты", img: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=700&q=80" },
];

export const money = (n: number) => new Intl.NumberFormat("ru-RU").format(n) + " ₽";

export const photo = (id: string, w = 650) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
