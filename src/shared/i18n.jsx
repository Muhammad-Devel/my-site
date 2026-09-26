import { createContext, useContext, useEffect, useMemo, useState } from "react";

const translations = {
  en: {
    nav: { home: "Home", about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
    hero: { greeting: "Hi, I’m", role: "Full-Stack Developer", description: "I build fast, responsive, and scalable web applications with React, Node.js, and modern web technologies.", projects: "View my projects", contact: "Contact me", github: "Open GitHub profile", linkedin: "Open LinkedIn profile", email: "Send an email" },
    about: { title: "About me", first: "I’m Mukhammadjon Jumaboyev, a passionate Full-Stack Developer who enjoys building modern, efficient, and scalable web applications.", second: "I combine clean frontend design with reliable backend logic to create seamless user experiences and useful digital products." },
    skills: { title: "My skills", intro: "Technologies and tools I use to build complete, efficient, and scalable web applications.", frontend: ["Frontend development", "Creating modern, responsive interfaces with React, Tailwind CSS, and JavaScript."], backend: ["Backend development", "Building scalable REST APIs with Node.js and Express.js."], database: ["Database management", "Designing and managing MongoDB databases for efficient queries."], tools: ["Tools & version control", "Using Git, GitHub, Vercel, and Render for a smooth workflow."] },
    projects: { title: "Selected projects", all: "All", frontend: "Frontend", backend: "Backend", fullstack: "Full-stack", html: "HTML/CSS/JS", algorithms: "Algorithms", demo: "Demo", code: "Code" },
    contact: { title: "Get in touch", intro: "Feel free to reach out for collaborations, opportunities, or just to say hello.", name: "Your name", email: "Your email", message: "Your message...", send: "Send message", sent: "Thanks! Your message is ready to send. Please use the email link below." },
    footer: { role: "Full-Stack Developer & UI Designer", top: "Back to top", rights: "All rights reserved." },
  },
  uz: {
    nav: { home: "Bosh sahifa", about: "Men haqimda", skills: "Ko‘nikmalar", projects: "Loyihalar", contact: "Aloqa" },
    hero: { greeting: "Salom, men", role: "Full-Stack dasturchiman", description: "React, Node.js va zamonaviy texnologiyalar yordamida tezkor, moslashuvchan va kengaytiriladigan web ilovalar yarataman.", projects: "Loyihalarim", contact: "Bog‘lanish", github: "GitHub profilini ochish", linkedin: "LinkedIn profilini ochish", email: "Email yuborish" },
    about: { title: "Men haqimda", first: "Men Mukhammadjon Jumaboyevman. Zamonaviy, samarali va kengaytiriladigan web ilovalar yaratishni yoqtiradigan Full-Stack dasturchiman.", second: "Toza frontend dizaynni ishonchli backend mantiqi bilan birlashtirib, qulay foydalanuvchi tajribasi va foydali raqamli mahsulotlar yarataman." },
    skills: { title: "Ko‘nikmalarim", intro: "To‘liq, samarali va kengaytiriladigan web ilovalar yaratishda foydalanadigan texnologiyalar.", frontend: ["Frontend dasturlash", "React, Tailwind CSS va JavaScript bilan zamonaviy, moslashuvchan interfeyslar yaratish."], backend: ["Backend dasturlash", "Node.js va Express.js yordamida kengaytiriladigan REST APIlar yaratish."], database: ["Ma’lumotlar bazasi", "Samarali so‘rovlar uchun MongoDB bazalarini loyihalash va boshqarish."], tools: ["Vositalar va Git", "Git, GitHub, Vercel va Render bilan qulay ishlab chiqish jarayoni."] },
    projects: { title: "Tanlangan loyihalar", all: "Barchasi", frontend: "Frontend", backend: "Backend", fullstack: "Full-stack", html: "HTML/CSS/JS", algorithms: "Algoritmlar", demo: "Demo", code: "Kod" },
    contact: { title: "Bog‘laning", intro: "Hamkorlik, ish imkoniyatlari yoki shunchaki salomlashish uchun yozing.", name: "Ismingiz", email: "Email manzilingiz", message: "Xabaringiz...", send: "Xabar yuborish", sent: "Rahmat! Xabaringiz tayyor. Quyidagi email havolasi orqali yuborishingiz mumkin." },
    footer: { role: "Full-Stack dasturchi va UI dizayner", top: "Yuqoriga", rights: "Barcha huquqlar himoyalangan." },
  },
  ru: {
    nav: { home: "Главная", about: "Обо мне", skills: "Навыки", projects: "Проекты", contact: "Контакты" },
    hero: { greeting: "Привет, я", role: "Full-Stack разработчик", description: "Создаю быстрые, адаптивные и масштабируемые веб-приложения на React, Node.js и современных технологиях.", projects: "Мои проекты", contact: "Связаться", github: "Открыть GitHub", linkedin: "Открыть LinkedIn", email: "Отправить email" },
    about: { title: "Обо мне", first: "Я Мухаммаджон Джумабоев, Full-Stack разработчик, который любит создавать современные, эффективные и масштабируемые веб-приложения.", second: "Объединяю чистый frontend-дизайн с надёжной backend-логикой, чтобы создавать удобный пользовательский опыт и полезные цифровые продукты." },
    skills: { title: "Мои навыки", intro: "Технологии и инструменты, которые я использую для создания эффективных веб-приложений.", frontend: ["Frontend-разработка", "Современные адаптивные интерфейсы на React, Tailwind CSS и JavaScript."], backend: ["Backend-разработка", "Масштабируемые REST API на Node.js и Express.js."], database: ["Базы данных", "Проектирование и управление базами MongoDB."], tools: ["Инструменты и Git", "Git, GitHub, Vercel и Render для удобного процесса разработки."] },
    projects: { title: "Избранные проекты", all: "Все", frontend: "Frontend", backend: "Backend", fullstack: "Full-stack", html: "HTML/CSS/JS", algorithms: "Алгоритмы", demo: "Демо", code: "Код" },
    contact: { title: "Свяжитесь со мной", intro: "Пишите по вопросам сотрудничества, работы или просто чтобы поздороваться.", name: "Ваше имя", email: "Ваш email", message: "Ваше сообщение...", send: "Отправить", sent: "Спасибо! Сообщение готово. Отправьте его по ссылке email ниже." },
    footer: { role: "Full-Stack разработчик и UI-дизайнер", top: "Наверх", rights: "Все права защищены." },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem("language") || "en");
  const changeLanguage = (next) => { setLanguage(next); localStorage.setItem("language", next); };
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  const value = useMemo(() => ({ language, setLanguage: changeLanguage, t: translations[language] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
