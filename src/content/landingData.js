import home1 from "../components/assets/photos/home1.jpg";
import decor15 from "../components/assets/photos/phoca_thumb_l_decor15-1.jpg";
import m31 from "../components/assets/photos/phoca_thumb_l_m31-1.jpg";
import m32 from "../components/assets/photos/phoca_thumb_l_m32-1.jpg";
import m46 from "../components/assets/photos/phoca_thumb_l_m46-1.jpg";
import m47 from "../components/assets/photos/phoca_thumb_l_m47-1.jpg";
import m48 from "../components/assets/photos/phoca_thumb_l_m48-1.jpg";
import m49 from "../components/assets/photos/phoca_thumb_l_m49-1.jpg";
import slide1 from "../components/assets/photos/slide1.jpg";
import slide3 from "../components/assets/photos/slide3.jpg";

export const navigationLinks = [
  { href: "#advantages", label: "О нас" },
  { href: "#catalog", label: "Каталог" },
  { href: "#process", label: "Как работаем" },
  { href: "#gallery", label: "Работы" },
  { href: "#reviews", label: "Отзывы" },
];

export const mobileNavigationLinks = [
  ...navigationLinks,
  { href: "#cta", label: "Заявка" },
];

export const stats = [
  { value: "20", count: 20, label: "лет на рынке" },
  { value: "1200", count: 1200, label: "проектов выполнено" },
  { value: "25", count: 25, label: "дней — срок изготовления" },
  { value: "0 ₽", label: "замер и дизайн-проект" },
];

export const advantages = [
  {
    icon: "✦",
    title: "Индивидуальный дизайн",
    text: "Каждый проект разрабатывается с нуля под ваше пространство. Никаких шаблонов — только ваши параметры, стиль и образ жизни.",
  },
  {
    icon: "⬡",
    title: "Бесплатный замер",
    text: "Выезд специалиста в любой день недели, в удобное для вас время. Замер, дизайн, доставка, подъем и установка — в стоимость включены.",
  },
  {
    icon: "◈",
    title: "Собственное производство",
    text: "Высокотехнологичное оборудование по деревообработке. Контроль качества на каждом этапе — от заготовки до финишного покрытия.",
  },
  {
    icon: "◇",
    title: "Гарантия и экология",
    text: "Все материалы сертифицированы. Финальная цена называется сразу и не меняется. Гарантия на все изделия — 2 года.",
  },
];

export const catalogItems = [
  {
    tag: "01 / Кухни",
    name: "Кухни на заказ",
    description:
      "Из массива дерева, МДФ или пластика. Любые размеры и конфигурации. Встроенная техника, островные решения.",
    image: home1,
    alt: "Кухни на заказ",
  },
  {
    tag: "02 / Шкафы",
    name: "Шкафы-купе",
    description:
      "Встроенные и корпусные. Зеркальные фасады, матовое стекло, натуральный шпон. Оптимальное использование пространства.",
    image: m31,
    alt: "Шкафы-купе",
  },
  {
    tag: "03 / Гардеробные",
    name: "Гардеробные",
    description:
      "Системы хранения любой сложности. Открытые полки, ящики, штанги, подсветка — полная персонализация.",
    image: m32,
    alt: "Гардеробные",
  },
  {
    tag: "04 / Детская",
    name: "Детская мебель",
    description:
      "Безопасные экологичные материалы. Кровати, столы, стеллажи. Продуманные решения для роста ребенка.",
    image: m46,
    alt: "Детская мебель",
  },
];

export const processSteps = [
  {
    title: "Заявка",
    text: "Оставляете заявку онлайн или звоните. Менеджер связывается в течение 1 часа для уточнения деталей.",
  },
  {
    title: "Замер",
    text: "Выезжаем бесплатно в удобное время. Снимаем точные размеры, консультируем по материалам.",
  },
  {
    title: "Дизайн",
    text: "Создаем 3D-визуализацию с учетом ваших пожеланий. Вносим правки до полного согласования.",
  },
  {
    title: "Производство",
    text: "Изготавливаем на собственном оборудовании. Срок от 25 дней. Фото-отчет в процессе.",
  },
  {
    title: "Установка",
    text: "Доставляем и устанавливаем в удобный день, включая выходные. Демонтаж упаковки включен.",
  },
];

export const galleryItems = [
  {
    image: slide1,
    alt: "Кухня из массива",
  },
  {
    image: m47,
    alt: "Шкаф на заказ",
  },
  {
    image: m48,
    alt: "Гостиная мебель",
  },
  {
    image: m49,
    alt: "Спальный гарнитур",
  },
  {
    image: decor15,
    alt: "Гардеробная",
  },
];

export const trustMetrics = [
  {
    value: "20+",
    label: "лет мы создаем мебель для домов Подмосковья",
  },
  {
    value: "1200+",
    label: "довольных семей, которые заказывают снова",
  },
  {
    value: "98%",
    label: "клиентов рекомендуют нас друзьям",
  },
];

export const reviews = [
  {
    avatar: "Е",
    name: "Елена Смирнова",
    date: "Ногинск, кухня из массива",
    text: "После ремонта нам нужно было подбирать мебель. Обратились в МебельДор и не пожалели. Кухня получилась именно такой, о которой мечтали — все под размер, красиво и надежно. Замерщик приехал в удобное время, дизайнер всё учел. Рекомендую!",
  },
  {
    avatar: "А",
    name: "Аркадий Владимирович",
    date: "Электросталь, кухня + остров",
    text: "Заказывали кухню и не пожалели. Хотели что-то оригинальное — качественно и без лишнего. Итог превзошёл ожидания: всё чётко в срок, установка прошла аккуратно. Цена осталась той, что назвали изначально.",
  },
  {
    avatar: "М",
    name: "Марина и Дмитрий",
    date: "Балашиха, шкаф-купе 4.2 м",
    text: "Заказали шкаф-купе во всю стену. Приятно удивил профессионализм дизайнера — предложил решения, о которых мы сами не думали. Производство заняло 3 недели. Результат отличный, очень рекомендуем.",
  },
];

export const ctaBenefits = [
  "Замер, дизайн и доставка — бесплатно",
  "Цена фиксируется в договоре",
  "Гарантия 2 года на все изделия",
  "Срок изготовления от 25 дней",
];

export const furnitureTypes = [
  "Кухня на заказ",
  "Шкаф-купе",
  "Гардеробная",
  "Детская мебель",
  "Корпусная мебель",
  "Другое",
];

export const footerColumns = [
  {
    title: "Навигация",
    links: [
      { href: "#advantages", label: "О компании" },
      { href: "#catalog", label: "Каталог" },
      { href: "#process", label: "Как работаем" },
      { href: "#gallery", label: "Галерея" },
      { href: "#reviews", label: "Отзывы" },
    ],
  },
  {
    title: "Мебель",
    links: [
      { href: "#catalog", label: "Кухни на заказ" },
      { href: "#catalog", label: "Шкафы-купе" },
      { href: "#catalog", label: "Гардеробные" },
      { href: "#catalog", label: "Детская мебель" },
      { href: "#catalog", label: "Корпусная мебель" },
    ],
  },
];

export const contacts = [
  {
    label: "Телефон",
    value: "+7 (916) 754-03-37",
    href: "tel:+79167540337",
  },
  {
    label: "Email",
    value: "info@mebel-dor.ru",
    href: "mailto:info@mebel-dor.ru",
  },
  {
    label: "Адрес",
    value: "г. Ногинск, ул. Пугачёва, 1а",
  },
  {
    label: "Режим работы",
    value: "Пн–Вс, 9:00 – 20:00",
  },
];

export const socialLinks = [
  { label: "ВКонтакте", short: "BK", href: "#" },
  { label: "Telegram", short: "TG", href: "#" },
  { label: "WhatsApp", short: "WA", href: "#" },
];
