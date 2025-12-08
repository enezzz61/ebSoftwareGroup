"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sun, Moon, Linkedin, Instagram, Github } from "lucide-react";

interface Project {
  _id: string;
  title: string;
  desc: string;
  url?: string;
}

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState<"tr" | "en">("tr");
  const [projects, setProjects] = useState<Project[]>([]);

  // 💡 Tema toggle
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // 💡 Sayfa açıldığında önceki tema durumunu hatırla
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") setDarkMode(false);
  }, []);

  // 🔹 Projeleri getir
  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects", { cache: "no-store" });
        if (!res.ok) throw new Error("Projeler alınamadı");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("❌ Proje çekme hatası:", err);
      }
    }
    fetchProjects();
  }, []);

  // 🔤 Metin çeviri objesi
  const t = {
    tr: {
      slogan: "YAZILIM · DANIŞMANLIK · AR-GE",
      heroTitle1: "Dijital dünyanız için",
      heroTitle2: "akıllı yazılım çözümleri",
      heroDesc:
        "E&B Software Group olarak web, mobil ve kurumsal yazılım projelerinde işletmelere uçtan uca teknoloji çözümleri sunuyoruz.",
      explore: "Hizmetlerimizi Keşfet",
      contact: "Bizimle İletişime Geç",
      services: "Hizmetlerimiz",
      projeler: "Örnek Projelerimiz",
      iletisimBaslik: "Projeniz mi var?",
      iletisimDesc:
        "Yeni bir fikriniz veya modernleştirmek istediğiniz bir altyapınız mı var? E&B Software Group olarak sizinle en doğru çözümü üretelim.",
      email: "info@ebsoftwaregroup.com",
      service1: "Web & Mobil Uygulama Geliştirme",
      service1desc:
        "Modern, hızlı ve responsive web siteleri ile mobil uygulamalar geliştiriyoruz. Next.js, React, Node.js ve bulut teknolojileriyle ölçeklenebilir yapılar kuruyoruz.",
      service2: "Kurumsal Yazılım Çözümleri",
      service2desc:
        "İş süreçlerinizi dijitale taşıyan CRM, ERP ve yönetim panelleri geliştiriyoruz. Verimliliği artıran uçtan uca sistemler kuruyoruz.",
      service3: "Yapay Zekâ & Otomasyon",
      service3desc:
        "Yapay zekâ destekli otomasyon sistemleriyle iş yükünüzü azaltıyor, veri odaklı karar almayı kolaylaştırıyoruz.",
    },
    en: {
      slogan: "SOFTWARE · CONSULTING · R&D",
      heroTitle1: "Smart",
      heroTitle2: "software solutions for your digital world",
      heroDesc:
        "At E&B Software Group, we provide end-to-end technology solutions for web, mobile, and enterprise projects.",
      explore: "Explore Our Services",
      contact: "Contact Us",
      services: "Our Services",
      projeler: "Our Projects",
      iletisimBaslik: "Got a Project?",
      iletisimDesc:
        "Have a new idea or want to modernize your software infrastructure? Let’s build the right architecture together.",
      email: "info@ebsoftwaregroup.com",
      service1: "Web & Mobile App Development",
      service1desc:
        "We build modern, fast, and responsive websites and mobile apps using Next.js, React, Node.js, and scalable cloud infrastructures.",
      service2: "Enterprise Software Solutions",
      service2desc:
        "We develop CRM, ERP, and management panels to digitalize your business processes with end-to-end efficiency.",
      service3: "AI & Automation",
      service3desc:
        "AI-driven automation systems reduce workload and make data-driven decision-making easier for your business.",
    },
  }[lang];

  return (
    <main className="min-h-screen overflow-x-hidden bg-dark text-white transition-colors duration-300">
      {/* Navbar */}
      <motion.nav
        className="navbar flex flex-col gap-4 md:flex-row md:justify-between md:items-center px-4 md:px-8 py-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 justify-center md:justify-start">
          {/* 🔹 Logo örnek yolu */}
          <Image
            src="/images/logo.png"
            alt="E&B Software Group Logo"
            width={40}
            height={40}
            className="rounded-xl shadow-md"
          />
          <div className="text-center md:text-left">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
              E&B Software Group
            </h1>
            <p className="text-[11px] sm:text-xs md:text-sm text-gray-300">
              Smart Solutions for a Digital World.
            </p>
          </div>
        </div>

        <div className="flex items-center w-full md:w-auto justify-between md:justify-end gap-3 md:gap-5">
          <div className="hidden sm:flex items-center gap-3 md:gap-5 text-xs sm:text-sm">
            <a
              href="#hizmetler"
              className="hidden md:inline hover:text-primary transition"
            >
              {t.services}
            </a>
            <a
              href="#projeler"
              className="hidden md:inline hover:text-primary transition"
            >
              {t.projeler}
            </a>
            <a
              href="#iletisim"
              className="hidden md:inline hover:text-primary transition"
            >
              {t.contact}
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setLang(lang === "tr" ? "en" : "tr")}
              className="text-xs sm:text-sm font-semibold hover:text-primary transition"
            >
              {lang === "tr" ? "TR | EN" : "EN | TR"}
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-primary/20 transition"
              aria-label="Tema değiştir"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <motion.section
        className="pt-16 sm:pt-20 md:pt-28 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-dark to-mid text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[0.25em] text-[10px] sm:text-xs text-primary mb-3 sm:mb-4">
            {t.slogan}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
            {t.heroTitle1}{" "}
            <span className="text-primary">{t.heroTitle2}</span>.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 px-1">
            {t.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a href="#hizmetler" className="btn-primary w-full sm:w-auto text-sm sm:text-base">
              {t.explore}
            </a>
            <a href="#iletisim" className="btn-outline w-full sm:w-auto text-sm sm:text-base">
              {t.contact}
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* Hizmetlerimiz */}
      <section id="hizmetler" className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 bg-dark">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-primary text-center">
            {t.services}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="card h-full"
              >
                <h4 className="text-lg sm:text-xl font-semibold mb-3">
                  {t[`service${i}` as keyof typeof t]}
                </h4>
                <p className="text-gray-300 text-sm sm:text-[15px] leading-relaxed">
                  {t[`service${i}desc` as keyof typeof t]}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projeler */}
      <section id="projeler" className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 bg-mid">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-primary text-center">
            {t.projeler}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {projects.length > 0 ? (
              projects.map((proj) => (
                <motion.a
                  key={proj._id}
                  href={proj.url || "#"}
                  target={proj.url ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="card block cursor-pointer h-full"
                  whileHover={{ scale: 1.03 }}
                >
                  <h4 className="text-lg sm:text-xl font-semibold mb-3">
                    {proj.title}
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-[15px] leading-relaxed">
                    {proj.desc}
                  </p>
                </motion.a>
              ))
            ) : (
              <p className="text-gray-400 text-center col-span-3 text-sm sm:text-base">
                {lang === "tr"
                  ? "Projeler şu anda yüklenemedi."
                  : "Projects could not be loaded."}
              </p>
            )}
          </div>
        </motion.div>
      </section>

      {/* İletişim */}
      <motion.section
        id="iletisim"
        className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 bg-dark text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary">
          {t.iletisimBaslik}
        </h3>
        <p className="text-gray-300 mb-5 sm:mb-6 text-sm sm:text-base max-w-2xl mx-auto px-1">
          {t.iletisimDesc}
        </p>
        <a
          href={`mailto:${t.email}`}
          className="btn-primary inline-block text-sm sm:text-base"
        >
          {t.email}
        </a>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="pt-8 sm:pt-10 pb-5 sm:pb-6 text-center bg-mid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center gap-4 sm:gap-6 mb-3 sm:mb-4">
          <a
            href="https://www.linkedin.com/in/enes-bayram-1a6b43237/"
            target="_blank"
            className="hover:text-primary transition"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://instagram.com/menes.61"
            target="_blank"
            className="hover:text-primary transition"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://github.com/enezzz61"
            target="_blank"
            className="hover:text-primary transition"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
        <p className="text-[11px] sm:text-xs text-gray-500 px-2">
          © {new Date().getFullYear()} E&B Software Group. All rights reserved.
        </p>
      </motion.footer>
    </main>
  );
}
