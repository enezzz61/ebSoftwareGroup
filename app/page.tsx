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
        className="navbar flex justify-between items-center px-8 py-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3">
          {/* 🔹 Logo örnek yolu */}
          <Image
            src="/images/logo.png"
            alt="E&B Software Group Logo"
            width={40}
            height={40}
            className="rounded-xl shadow-md"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-wide">
              E&B Software Group
            </h1>
            <p className="text-xs md:text-sm text-gray-300">
              Smart Solutions for a Digital World.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a href="#hizmetler" className="hidden md:inline text-sm hover:text-primary transition">
            {t.services}
          </a>
          <a href="#projeler" className="hidden md:inline text-sm hover:text-primary transition">
            {t.projeler}
          </a>
          <a href="#iletisim" className="hidden md:inline text-sm hover:text-primary transition">
            {t.contact}
          </a>
          <button
            onClick={() => setLang(lang === "tr" ? "en" : "tr")}
            className="text-sm font-semibold hover:text-primary transition"
          >
            {lang === "tr" ? "TR | EN" : "EN | TR"}
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-primary/20 transition"
            aria-label="Tema değiştir"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Hero */}
      <motion.section
        className="pt-28 pb-24 px-6 md:px-10 bg-gradient-to-b from-dark to-mid text-center"
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
          <p className="uppercase tracking-[0.3em] text-xs text-primary mb-4">
            {t.slogan}
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            {t.heroTitle1}{" "}
            <span className="text-primary">{t.heroTitle2}</span>.
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8">{t.heroDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#hizmetler" className="btn-primary w-full sm:w-auto">
              {t.explore}
            </a>
            <a href="#iletisim" className="btn-outline w-full sm:w-auto">
              {t.contact}
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* Hizmetlerimiz */}
      <section id="hizmetler" className="py-20 px-6 md:px-10 bg-dark">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-10 text-primary text-center">
            {t.services}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="card"
              >
                <h4 className="text-xl font-semibold mb-3">
                  {t[`service${i}` as keyof typeof t]}
                </h4>
                <p className="text-gray-300 text-sm">
                  {t[`service${i}desc` as keyof typeof t]}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projeler */}
      <section id="projeler" className="py-20 px-6 md:px-10 bg-mid">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-10 text-primary text-center">
            {t.projeler}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.length > 0 ? (
              projects.map((proj) => (
                <motion.a
                  key={proj._id}
                  href={proj.url || "#"}
                  target={proj.url ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="card block cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="text-xl font-semibold mb-3">{proj.title}</h4>
                  <p className="text-gray-300 text-sm">{proj.desc}</p>
                </motion.a>
              ))
            ) : (
              <p className="text-gray-400 text-center col-span-3">
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
        className="py-20 px-6 md:px-10 bg-dark text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-6 text-primary">{t.iletisimBaslik}</h3>
        <p className="text-gray-300 mb-6">{t.iletisimDesc}</p>
        <a href={`mailto:${t.email}`} className="btn-primary inline-block">
          {t.email}
        </a>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="pt-10 pb-6 text-center bg-mid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://www.linkedin.com/in/enes-bayram-1a6b43237/" target="_blank" className="hover:text-primary transition"><Linkedin /></a>
          <a href="https://instagram.com/menes.61" target="_blank" className="hover:text-primary transition"><Instagram /></a>
          <a href="https://github.com/enezzz61" target="_blank" className="hover:text-primary transition"><Github /></a>
        </div>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} E&B Software Group. All rights reserved.
        </p>
      </motion.footer>
    </main>
  );
}
