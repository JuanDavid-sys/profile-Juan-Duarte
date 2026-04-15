const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const PROFILE = {
  name: "Juan Duarte",
  fullName: "Juan David Duarte Sanches",
  title: "Frontend & Mobile Developer | AI Fluency",
  location: "Bogotá, Distrito Capital, Colombia",
  status: "Disponible para empleo (Frontend Developer / JavaScript Developer)",
  about: `Como desarrollador frontend y mobile con 2 años de experiencia, me especializo en crear aplicaciones web y móviles modernas y funcionales utilizando tecnologías como React, React Native, JavaScript, TypeScript, Redux, Expo y HTML/CSS.

Tengo conocimientos sólidos en desarrollo multiplataforma y me apasiona combinar una interfaz atractiva con código limpio y bien estructurado.

Soy autodidacta, colaborativo y enfocado en resolver problemas. Me gusta investigar profundamente hasta encontrar soluciones óptimas.

He trabajado en proyectos reales como en Mi Colombia Legal S.A.S, desarrollando aplicaciones web y móviles funcionales.

Actualmente, estoy interesado en proyectos relacionados con inteligencia artificial, buscando crecer profesionalmente en entornos remotos o híbridos.`,
  experience: [
    {
      company: "Mi Colombia Legal S.A.S",
      role: "Desarrollador Frontend",
      period: "Enero 2025 – Actualidad",
      type: "Híbrido",
      description: [
        "Desarrollo de frontend para aplicación legal con IA generativa",
        "Implementación de interfaces web y mobile con React y React Native",
        "Creación de componentes reutilizables",
        "Integración de agentes inteligentes para análisis legal",
        "Generación automatizada de documentos",
        "Enfoque en UX/UI, rendimiento y escalabilidad"
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
      "React", "React Native", "JavaScript", "TypeScript", "Redux", "Expo", 
      "Next.js", "Zustand", "HTML5 / CSS3", "Axios"
    ],
    backend: [
      "Python", "Django", "MySQL", "WebSockets"
    ],
    tools: [
      "Git / GitHub"
    ]
  },
  aptitudes: [
    "Desarrollo Frontend", "Diseño UX/UI", "Desarrollo Mobile", "APIs", 
    "Scrum", "Clean Code", "Arquitectura escalable", "Aplicaciones multiplataforma"
  ],
  profileImage: assetPath("images/inicio-hero.jpg"),
  aboutImages: [
    assetPath("images/sobre-mi-1.jpg"),
    assetPath("images/sobre-mi-2.jpg"),
    assetPath("images/sobre-mi-3.jpg")
  ],
  projects: [
    {
      title: "Residencial Pro",
      category: "Management System",
      description: "Sistema de administración para conjuntos residenciales que facilita la comunicación entre residentes y administración, gestión de pagos y reserva de zonas comunes.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      image: assetPath("images/residencial-pro.jpg"),
      link: "https://public-propiedad-horizontal-r32uv4b9z-juandis981-3477s-projects.vercel.app/"
    },
    {
      title: "Industrial Inventory Manager",
      category: "Industrial Software",
      description: "Herramienta robusta para el control de inventarios industriales a gran escala, con seguimiento de stock en tiempo real y análisis predictivo de demanda.",
      tech: ["React Native", "Django", "Python", "WebSockets"],
      image: "https://picsum.photos/seed/industrial/800/600",
      link: "#"
    },
    {
      title: "Glow Aesthetic Center",
      category: "Web Application",
      description: "Plataforma integral para la gestión de citas, servicios y clientes de un centro de estética. Incluye pasarela de pagos y recordatorios automáticos.",
      tech: ["React", "Tailwind CSS", "Node.js", "Firebase"],
      image: "https://picsum.photos/seed/aesthetic/800/600",
      link: "#"
    }
  ],
  contact: {
    email: "juandis981@gmail.com",
    linkedin: "https://www.linkedin.com/in/juandavidduartesanchez/",
    github: "https://github.com/JuanDavid-sys",
    whatsapp: "https://wa.me/573000000000"
  }
};
