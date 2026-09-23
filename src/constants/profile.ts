const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const PROFILE = {
  name: "Juan David Duarte",
  fullName: "Juan David Duarte Sánchez",
  title: "Full-Stack & AI Developer",
  location: "Zipaquirá, Cundinamarca, Colombia",
  status: "Disponible para proyectos remotos (Full-Stack & AI)",
  about: `Soy Full-Stack & AI Developer con más de 4 años de experiencia diseñando y construyendo aplicaciones web y móviles completas: frontend con React, Next.js y React Native, backend con Django y Node.js, y bases de datos PostgreSQL y MongoDB.

Me especializo en llevar agentes de IA y sistemas RAG a producción, integrando APIs como Gemini, OpenAI y Claude, así como modelos locales con Ollama para clientes con requisitos de privacidad.

Mi metodología combina arquitectura modular, código limpio y decisiones documentadas (ADR). Prefiero resolver problemas reales de punta a punta, desde el esquema de base de datos hasta la interfaz final.

Lidero el desarrollo web y móvil de una plataforma legal con IA en Mi Colombia Legal S.A.S, y en paralelo entrego proyectos full-stack para clientes en Workana: e-commerce, apps móviles, automatizaciones y plataformas de administración.

Actualmente busco proyectos donde la inteligencia artificial se integre a productos reales, en entornos remotos o híbridos.`,
  experience: [
    {
      company: "Mi Colombia Legal S.A.S",
      role: "Full-Stack & AI Developer",
      period: "Enero 2025 – Actualidad",
      type: "Híbrido",
      description: [
        "Frontend web y móvil (React, React Native, Next.js) de una plataforma legal con IA generativa",
        "Agentes autónomos y flujos RAG para generar documentos, analizar casos y dar seguimiento",
        "Arquitectura modular, consumo de APIs REST y estado global centralizado",
        "Enfoque en UX/UI, rendimiento y escalabilidad"
      ]
    },
    {
      company: "Freelance (Workana)",
      role: "Software & AI Solutions Developer",
      period: "2024 – Actualidad",
      type: "Remoto",
      description: [
        "E-commerce y apps móviles multiplataforma para clientes en Workana",
        "LLMs locales privados con Ollama para clientes enterprise sin exposición de datos",
        "Microservicios Django REST + PostgreSQL/MongoDB y plataformas de administración residencial"
      ]
    }
  ],
  education: [
    {
      institution: "Udemy Alumni",
      period: "2019 – 2025",
      degree: "Formación en desarrollo de software y diseño"
    }
  ],
  technologies: {
    frontend: [
      "React", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "Redux",
      "Expo", "Zustand", "HTML5 / CSS3", "Flutter"
    ],
    backend: [
      "Python", "Django", "DRF", "Node.js", "PostgreSQL", "MongoDB", "Redis"
    ],
    ai: [
      "Gemini API", "OpenAI", "Claude", "Ollama", "LangChain", "RAG"
    ],
    tools: [
      "Docker", "Git / GitHub", "Firebase", "Linux", "CI/CD"
    ]
  },
  aptitudes: [
    "Desarrollo Full-Stack", "Integración de IA", "Diseño UX/UI", "Desarrollo Mobile",
    "APIs REST", "Arquitectura escalable", "Aplicaciones multiplataforma", "Trabajo remoto"
  ],
  profileImage: assetPath("images/inicio-hero.jpg"),
  aboutImages: [
    assetPath("images/sobre-mi-1.jpg"),
    assetPath("images/sobre-mi-2.jpg"),
    assetPath("images/sobre-mi-3.jpg")
  ],
  projects: [
    {
      title: "Aesthetix SaaS",
      category: "SaaS + IA",
      description: "Gestión de centros estéticos: reservas, especialistas, inventario y análisis de piel con Gemini AI. App de tres capas con demo en vivo.",
      tech: ["React", "Django", "Gemini AI", "SQLite / Postgres"],
      image: assetPath("images/aesthetix-saas.jpg"),
      link: "https://aesthetix-saas.vercel.app"
    },
    {
      title: "Residential",
      category: "Plataforma Full-Stack",
      description: "Administración de propiedad horizontal: apartamentos, propietarios, vehículos, parqueaderos y documentos, con modo demo y Docker.",
      tech: ["Next.js", "Django", "PostgreSQL", "Google OAuth"],
      image: assetPath("images/residential.jpg"),
      link: "https://public-propiedad-horizontal.vercel.app"
    },
    {
      title: "Nexus Ops",
      category: "Plataforma de IA",
      description: "Plataforma multi-tenant de operaciones con IA: RBAC, auditoría, workflows y RAG. Monorepo con CI y decisiones documentadas (ADR).",
      tech: ["Next.js", "Django", "Redis", "pgvector"],
      image: assetPath("images/nexus-ops.jpg"),
      link: "https://github.com/JuanDavid-sys/nexus-ops"
    },
    {
      title: "MotitosJuan Gear",
      category: "E-commerce",
      description: "Tienda de equipamiento para moto: catálogo, carrito, checkout y panel admin con KPIs, 100% en el navegador.",
      tech: ["HTML", "CSS", "JavaScript", "localStorage"],
      image: assetPath("images/motitosjuan.jpg"),
      link: "https://motitos-juan.vercel.app"
    },
    {
      title: "ATELIER",
      category: "Design System",
      description: "Design system premium de moda: 23 templates de e-commerce con tokens de diseño y componentes en HTML/CSS puro.",
      tech: ["HTML", "CSS", "Design Tokens"],
      image: assetPath("images/atelier.jpg"),
      link: "https://premium-fashion-design-system.vercel.app"
    }
  ],
  contact: {
    email: "juandis981@gmail.com",
    linkedin: "https://www.linkedin.com/in/juandavidduartesanchez/",
    github: "https://github.com/JuanDavid-sys",
    whatsapp: "https://wa.me/573212915001"
  }
};