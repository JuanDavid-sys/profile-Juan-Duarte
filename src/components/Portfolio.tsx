import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { PROFILE } from "../constants/profile";
import { cn } from "../lib/utils";
import { 
  Github, Linkedin, Mail, MapPin, ExternalLink, ChevronRight, 
  Code2, Smartphone, Cpu, Sparkles, Atom, Globe, Database, 
  Terminal, Server, Zap, Activity, Layout, GitBranch, Box, 
  ShieldCheck, RefreshCw, FileJson, ArrowRightLeft, House,
  UserRound, BriefcaseBusiness, FolderKanban, Wrench, MessageCircle
} from "lucide-react";

const TECH_ICONS: Record<string, any> = {
  "React": Atom,
  "React Native": Smartphone,
  "JavaScript": FileJson,
  "TypeScript": ShieldCheck,
  "Redux": RefreshCw,
  "Expo": Zap,
  "Next.js": Globe,
  "Zustand": Box,
  "Python": Terminal,
  "Django": Server,
  "MySQL": Database,
  "WebSockets": Activity,
  "HTML5 / CSS3": Layout,
  "Git / GitHub": GitBranch,
  "Axios": ArrowRightLeft,
};

const NAV_ITEMS = [
  { href: "#home", label: "Inicio", icon: House },
  { href: "#about", label: "Sobre mí", icon: UserRound },
  { href: "#experience", label: "Experiencia", icon: BriefcaseBusiness },
  { href: "#projects", label: "Proyectos", icon: FolderKanban },
  { href: "#tech", label: "Tecnologías", icon: Wrench },
];

export const Intro = () => {
  const introImage = PROFILE.profileImage;
  
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-slate-950">
      {/* Background Blurred Image */}
      <motion.img 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 1.5 }}
        src={introImage}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover object-[22%_center] blur-sm md:object-center"
        referrerPolicy="no-referrer"
      />
      
      {/* Foreground Sharp Image with Margins */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        className="absolute top-[100px] left-4 md:left-[100px] right-4 md:right-[100px] bottom-0 z-10"
      >
        <div className="w-full h-full rounded-t-[2rem] overflow-hidden shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.5)] border-t border-x border-white/10">
          <img 
            src={introImage} 
            alt="Hero Visual"
            className="h-full w-full object-cover object-[22%_center] md:object-center"
            referrerPolicy="no-referrer"
          />
          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-start justify-end p-8 md:p-16">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="p-8 md:p-12 rounded-[2rem]"
            >
              <h1 
                className="text-4xl md:text-7xl font-display font-black tracking-tighter uppercase text-left leading-[0.9]"
                style={{ 
                  color: 'transparent',
                  WebkitTextStroke: '1.5px white',
                }}
              >
                Juan<br />David<br />Duarte
              </h1>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Desliza</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-10 bg-gradient-to-b from-brand-500 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export const Navbar = () => {
  return (
    <nav className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-3 sm:bottom-6 sm:px-4 md:bottom-8 md:px-6">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass w-full max-w-max rounded-full px-3 py-2 shadow-2xl"
      >
        <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              aria-label={label}
              title={label}
              className="flex h-11 w-11 items-center justify-center rounded-full text-slate-200 transition-colors hover:text-brand-400 md:h-auto md:w-auto md:px-3 md:py-2"
            >
              <Icon size={18} className="md:hidden" />
              <span className="hidden text-sm font-medium md:inline">{label}</span>
            </a>
          ))}
          <a
            href="#contact"
            aria-label="Contáctame"
            title="Contáctame"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-white transition-all hover:bg-brand-500 md:h-auto md:w-auto md:px-4 md:py-2"
          >
            <MessageCircle size={18} className="md:hidden" />
            <span className="hidden text-sm font-semibold md:inline">Contáctame</span>
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % PROFILE.aboutImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-500/5 -skew-x-12 -z-10 rounded-[4rem] hidden lg:block" />
      
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="space-y-2">
            <span className="text-brand-400 font-mono text-sm tracking-widest uppercase">Descubre mi historia</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight uppercase">
              Sobre <span className="text-gradient">mí</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Perfil Profesional</h4>
              {PROFILE.about.split('\n\n').slice(0, 2).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="space-y-6 text-slate-400 leading-relaxed">
              <div>
                <h4 className="text-brand-400 font-bold text-xs uppercase tracking-widest mb-3">Metodología</h4>
                <div className="border-l-2 border-brand-500/30 pl-4">
                  <p className="text-sm">{PROFILE.about.split('\n\n')[2]}</p>
                </div>
              </div>
              <div>
                <h4 className="text-brand-400 font-bold text-xs uppercase tracking-widest mb-3">Experiencia & Visión</h4>
                <div className="border-l-2 border-brand-500/30 pl-4">
                  {PROFILE.about.split('\n\n').slice(3).map((paragraph, i) => (
                    <p key={i} className="text-sm mb-2">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-slate-900/50 rounded-full border border-slate-800">
              <MapPin size={18} className="text-brand-400" />
              <span className="text-sm font-medium text-slate-300">{PROFILE.location}</span>
            </div>
            <span className="text-xs text-slate-500 font-medium italic">Disponible para nuevos desafíos</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative"
        >
          <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImage}
                initial={{ opacity: 0, scale: 1.2, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: -5 }}
                transition={{ duration: 1, ease: "anticipate" }}
                src={PROFILE.aboutImages[currentImage]} 
                alt={`${PROFILE.name} - ${currentImage}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            
            {/* Glass Overlay for Carousel Controls */}
            <div className="absolute bottom-8 left-8 right-8 glass p-4 rounded-2xl flex items-center justify-between backdrop-blur-xl border-white/20">
              <div className="flex gap-1.5">
                {PROFILE.aboutImages.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-500",
                      currentImage === i ? "bg-brand-400 w-8" : "bg-white/20 w-2 hover:bg-white/40"
                    )}
                  />
                ))}
              </div>
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">
                0{currentImage + 1} / 0{PROFILE.aboutImages.length}
              </span>
            </div>
          </div>

          {/* Floating Stats Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 glass p-6 rounded-3xl border-brand-500/20 shadow-xl z-20 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-500/20 rounded-2xl flex items-center justify-center text-brand-400">
                <Sparkles size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">2+ Años</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Experiencia Real</div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Rings */}
          <div className="absolute -top-12 -right-12 w-64 h-64 border border-brand-500/10 rounded-full -z-10" />
          <div className="absolute -top-20 -right-20 w-80 h-80 border border-brand-500/5 rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">Experiencia</h2>
            <p className="text-slate-500">Mi trayectoria profesional en el mundo del desarrollo.</p>
          </div>
          <div className="h-px flex-1 bg-slate-800 hidden md:block mb-4 mx-8" />
        </div>

        <div className="space-y-8">
          {PROFILE.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl group hover:border-brand-500/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-400 transition-colors">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-slate-400 mt-1">
                    <span className="font-medium text-slate-200">{exp.company}</span>
                    <span>•</span>
                    <span>{exp.type}</span>
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-brand-500/10 border border-brand-500/20 rounded-full text-brand-400 text-sm font-medium">
                  {exp.period}
                </div>
              </div>
              
              <ul className="grid md:grid-cols-2 gap-4">
                {exp.description.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-400">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div className="max-w-2xl">
          <span className="text-brand-400 font-mono text-sm tracking-widest uppercase mb-4 block">Portafolio Seleccionado</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">Proyectos que definen mi <span className="text-gradient">visión técnica</span></h2>
          <p className="text-slate-400 text-lg">Una mirada a las soluciones que he construido, desde sistemas industriales hasta experiencias de bienestar.</p>
        </div>
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 hover:border-brand-500 hover:text-brand-400 transition-all cursor-pointer">
            <ChevronRight size={20} className="rotate-180" />
          </div>
          <div className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-slate-500 hover:border-brand-500 hover:text-brand-400 transition-all cursor-pointer">
            <ChevronRight size={20} />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {PROFILE.projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group relative"
          >
            {/* Project Card */}
            <div className="relative z-10 bg-slate-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-500 h-full flex flex-col">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                {/* Floating Category Tag */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-brand-600/20 backdrop-blur-xl rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-400 border border-brand-500/30">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="space-y-6 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <span key={j} className="text-[9px] font-bold text-slate-500 uppercase tracking-widest px-3 py-1 bg-slate-950/50 rounded-lg border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white group-hover:text-brand-400 transition-all"
                    >
                      Explorar Caso <ArrowRightLeft size={14} className="rotate-45" />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-400 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Shadow/Glow */}
            <div className="absolute -inset-2 bg-gradient-to-br from-brand-500/20 to-violet-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const TechStack = () => {
  const renderTechGroup = (title: string, techs: string[]) => (
    <div className="mb-12">
      <h3 className="text-sm font-bold mb-6 uppercase tracking-[0.2em] text-slate-500 text-center">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {techs.map((tech, i) => {
          const Icon = TECH_ICONS[tech] || Cpu;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass p-4 rounded-2xl flex flex-col items-center justify-center gap-3 group hover:bg-brand-500/5 hover:border-brand-500/30 transition-all cursor-default"
            >
              <div className="text-slate-400 group-hover:text-brand-400 transition-colors">
                <Icon size={24} />
              </div>
              <span className="text-sm font-medium text-slate-300">{tech}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="tech" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Tecnologías</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Herramientas y lenguajes organizados por especialidad.</p>
      </div>

      {renderTechGroup("Frontend Development", PROFILE.technologies.frontend)}
      {renderTechGroup("Backend & Database", PROFILE.technologies.backend)}
      {renderTechGroup("Tools & Others", PROFILE.technologies.tools)}

      <div className="mt-24">
        <h3 className="text-xl font-bold mb-8 text-center uppercase tracking-widest text-slate-500 text-xs">Aptitudes & Soft Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {PROFILE.aptitudes.map((apt, i) => (
            <span 
              key={i}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium hover:border-brand-500/50 transition-colors"
            >
              {apt}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-24 pt-24 border-t border-white/5">
        <h3 className="text-xl font-bold mb-12 text-center uppercase tracking-widest text-slate-500 text-xs">Educación</h3>
        <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
          {PROFILE.education.map((edu, i) => (
            <div key={i} className="glass p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                <p className="text-slate-400">{edu.institution}</p>
              </div>
              <div className="text-brand-400 font-medium">{edu.period}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto glass p-12 rounded-[2rem] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-violet-500" />
        
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Contáctame</h2>
        <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto">
          Actualmente estoy disponible para nuevos proyectos y oportunidades laborales. Puedes escribirme a {PROFILE.contact.email}.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.contact.email)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-brand-50 transition-all flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            {PROFILE.contact.email}
          </a>
          <a 
            href={PROFILE.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a 
            href={PROFILE.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>

        <div className="mt-12 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="text-center">
            <div className="text-sm text-slate-500 uppercase tracking-widest mb-1">Ubicación</div>
            <div className="text-white font-medium">{PROFILE.location}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-center">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} {PROFILE.fullName}. Diseñado con enfoque en excelencia.
      </p>
    </footer>
  );
};
