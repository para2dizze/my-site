const i18n = {
  ka: {
    "nav.systems": "სისტემები",
    "nav.integration": "ინტეგრაცია",
    "nav.portfolio": "პორტფოლიო",
    "nav.about": "კომპანიის შესახებ",
    "nav.contact": "კონტაქტები",
    "btn.consultation": "კონსულტაცია",
    "hero.title": "ჩვენ ვპროექტებთ შენობის ნერვულ სისტემას",
    "hero.subtitle": "გათბობა, ვენტილაცია, გაგრილება, წყალი, ელექტრო, ქსელები და უსაფრთხოება...",
    "btn.systems": "სისტემების ნახვა →",
    "systems.tag": "— ეკოსისტემა",
    "systems.title": "ცამეტი მიმართულება — ერთი ინჟინრული ლოგიკა",
    "scenarios.title": "ერთი სცენარი — ცამეტი რეაქცია",
    "config.title": "შეამზადეთ თქვენი სისტემა",
    "btn.send": "გაგზავნა"
  },
  en: {
    "nav.systems": "SYSTEMS",
    "nav.integration": "INTEGRATION",
    "nav.portfolio": "PORTFOLIO",
    "nav.about": "ABOUT",
    "nav.contact": "CONTACT",
    "btn.consultation": "CONSULTATION",
    "hero.title": "We engineer the nervous system of a building",
    "hero.subtitle": "Heating, ventilation, cooling, water, power, networks and security...",
    "btn.systems": "View systems →",
    "systems.tag": "— SYSTEM ECOSYSTEM",
    "systems.title": "Thirteen disciplines — one engineering logic",
    "scenarios.title": "One scenario — thirteen reactions",
    "config.title": "Build your system",
    "btn.send": "Send Request"
  },
  ru: {
    "nav.systems": "СИСТЕМЫ",
    "nav.integration": "ИНТЕГРАЦИЯ",
    "nav.portfolio": "ПОРТФОЛИО",
    "nav.about": "О КОМПАНИИ",
    "nav.contact": "КОНТАКТЫ",
    "btn.consultation": "КОНСУЛЬТАЦИЯ",
    "hero.title": "Мы проектируем нервную систему здания",
    "hero.subtitle": "Отопление, вентиляция, холод, вода, электрика, сети и безопасность...",
    "btn.systems": "Смотреть системы →",
    "systems.tag": "— ЭКОСИСТЕМА СИСТЕМ",
    "systems.title": "Тринадцать направлений — одна инженерная логика",
    "scenarios.title": "Один сценарий — тринадцать реакций",
    "config.title": "Соберите свою систему",
    "btn.send": "Отправить"
  }
};

const systemsData = [
  { id: "SYS-01", title: { ka: "ავტომატიზაცია (BMS)", en: "Building Automation (BMS)", ru: "Автоматизация (BMS)" }, desc: "Единый мозг здания, диспетчеризация и аналитика." },
  { id: "SYS-02", title: { ka: "გათბობის სისტემები", en: "Heating Systems", ru: "Системы отопления" }, desc: "Котельные, тепловые узлы, погодозависимое регулирование." },
  { id: "SYS-03", title: { ka: "ვენტილაცია (AHU)", en: "Air Handling Units (AHU)", ru: "Вентиляционные установки (AHU)" }, desc: "Приточно-вытяжные установки с рекуперацией." },
  { id: "SYS-04", title: { ka: "ფანქოილები", en: "Fan Coils", ru: "Фанкойлы" }, desc: "Зональный контроль климата в помещениях." },
  { id: "SYS-05", title: { ka: "ჩილერები", en: "Chillers", ru: "Чиллеры" }, desc: "Холодоснабжение любой мощности." },
  { id: "SYS-06", title: { ka: "ბოილერები", en: "Boilers", ru: "Бойлеры" }, desc: "Горячее водоснабжение и аккумуляция тепла." }
];