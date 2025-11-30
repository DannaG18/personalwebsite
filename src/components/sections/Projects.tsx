import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Heart } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'portfolio', label: 'Portfolios' }
  ];

  const projects = [
    // {
    //   id: 1,
    //   title: "Gabriela Ortiz - Consultora de Imagen",
    //   category: "portfolio",
    //   description: "Desarrollo y branding de un portafolio de servicios de diseñadora de modas e influencer Colombiana",
    //   image: "/projects/gabriela-portfolio.png",
    //   technologies: ["TypeScript", "Git", "React", "Conexión con Mail", "Conexión con WhatsApp", "Branding de Marca",],
    //   role: "Desarrolladora Full-Stack",
    //   learnings: "Habilidades de liderazgo y enseñanza de mejores prácticas",
    //   results: "Presencia digital profesional y aumento de consultas de servicio",
    //   liveUrl: "https://gabriela-go.netlify.app/",
    //   githubUrl: "https://github.com/DannaG18/go_website",
    //   featured: true,
    // }, 
    {
      id: 2,
      title: "Portfolio Personal",
      category: "web",
      description: "Sitio web personal que muestra mis habilidades y proyectos de desarrollo",
      image: "/projects/personal-portfolio.png  ",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      role: "Desarrolladora Full Stack",
      learnings: "Diseño responsive y optimización de rendimiento",
      results: "Sitio web profesional que destaca mis habilidades técnicas",
      liveUrl: "https://dgportfolio-one.vercel.app",
      githubUrl: "https://github.com/DannaG18/dgportfolio",
      featured: true,
    },
    {
      id: 3,
      title: "Web Site Hamburguesas",
      category: "web",
      description: "Sitio web para mostrar productos de comida rápida, principalmente hamburguesas",
      image: "/projects/1.png",
      technologies: ["JavaScript", "HTML", "CSS", "Git"],
      role: "Líder Estudiantil de Tecnología",
      learnings: "Habilidades de liderazgo y enseñanza de mejores prácticas",
      results: "Página atractiva y responsiva que mejoró la imagen del negocio",
      liveUrl: "https://dannag18.github.io/Burger-Mission/",
      githubUrl: "https://github.com/DannaG18/Burger-Mission"
    },
    {
      id: 4,
      title: "Landing Pages - Proyectos Personales",
      category: "web",
      description: "Diversas landing pages desarrolladas durante mi formación como desarrolladora web",
      image: "/projects/3.png",
      technologies: ["HTML","CSS", "Responsive Design", "Git"],
      role: "Estudiante Desarrolladora",
      learnings: "Fundamentos sólidos en programación orientada a objetos y desarrollo web",
      results: "Base técnica sólida para proyectos empresariales",
      liveUrl: "https://dannag18.github.io/landingpagess/landingpages-main/index.html",
      githubUrl: "https://github.com/DannaG18/landingpagess"
    },
    // {
    //   id: 3,
    //   title: "Plataforma de Cursos Breakline",
    //   category: "web",
    //   description: "Desarrollo front-end de plataforma educativa con Angular, enfocada en experiencia de usuario fluida",
    //   image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    //   technologies: ["Angular", "TypeScript", "Git", "API Integration"],
    //   role: "Desarrolladora Front-end",
    //   learnings: "Integración de componentes con servicios backend y sistema de autenticación seguro",
    //   results: "Interfaz adaptable que mejoró la usabilidad y experiencia del usuario",
    //   liveUrl: "https://breakline-demo.com",
    //   githubUrl: "https://github.com/danna/breakline",
    //   featured: false
    // },
    {
      id: 4,
      title: "PrestService - Plataforma Full Stack",
      category: "web",
      description: "Plataforma de administración segura desarrollada con Java, Spring Boot, React y MySQL",
      image: "/projects/6.png",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "Firebase"],
      role: "Desarrolladora Full Stack",
      learnings: "Implementación de CRUD, autenticación JWT y principios SOLID",
      results: "Sistema robusto con componentes reutilizables y código limpio",
      liveUrl: "https://github.com/DannaG18/Service-Companies",
      githubUrl: "https://github.com/DannaG18/Service-Companies"
    },
    {
      id: 5,
      title: "Sistema de Ventas de Electricidad",
      category: "web",
      description: "Aplicación de escritorio Java con arquitectura hexagonal para seguimiento de ventas",
      image: "/projects/4.png",
      technologies: ["Java", "Swing", "Arquitectura Hexagonal", "MySQL"],
      role: "Desarrolladora Backend",
      learnings: "Diseño de interfaces intuitivas y gestión de roles de usuario",
      results: "Interfaz optimizada que minimizó errores operacionales",
      liveUrl: "https://github.com/DannaG18/Electrical-Sales-Management",
      githubUrl: "https://github.com/DannaG18/Electrical-Sales-Management"
    },
  ];

  const filteredProjects = activeCategory === 'todos'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const featuredProject = projects.find(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 bg-gradient-to-r from-blue-400 to-indigo-400 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-white mb-4">
            Casos de éxito empresarial
          </h2>
          <p className="text-xl text-gray-200 dark:text-gray-300 max-w-3xl mx-auto">
            Empresas reales que han transformado su presencia digital y multiplicado sus ventas.
            Conoce cómo puedo ayudar a tu negocio a lograr resultados similares.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-200 ${activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white dark:bg-navy-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-600'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured Project */}
        {featuredProject && activeCategory === 'todos' && (
          <div className="mb-16">
            <div className="transition duration-700 ease-out hover:scale-105 bg-white dark:bg-navy-900 rounded-2xl overflow-hidden shadow-2xl shadow-blue-200 hover:shadow-blue-300 dark:shadow-blue-950 dark:hover:shadow-blue-900 hover:shadow-2xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full">
                      Caso de éxito destacado
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {featuredProject.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Mi rol:</span>
                      <p className="text-gray-900 dark:text-white">{featuredProject.role}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Resultados obtenidos:</span>
                      <p className="text-gray-900 dark:text-white">{featuredProject.results}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver caso de éxito
                    </a>
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-navy-800 border-2 border-gray-300  dark:border-navy-600 text-gray-900 dark:text-white rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      Detalles técnicos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.filter(project => !project.featured).map((project) => (
            <div
              key={project.id}
              className="transition duration-300 ease-out hover:scale-105 dark:hover:shadow-blue-900 dark:shadow-blue-950 bg-white dark:bg-navy-900 rounded-2xl overflow-hidden shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-200 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 bg-white/90 text-gray-900 rounded-lg text-sm font-medium hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Ver
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 bg-white/90 text-gray-900 rounded-lg text-sm font-medium hover:bg-white transition-colors duration-200"
                    >
                      <Github className="w-3 h-3" />
                      Código
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Resultados:
                    </span>
                    <p className="text-sm text-gray-900 dark:text-white line-clamp-2">{project.results}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* <button className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm transition-colors duration-200 group">
                  Ver caso completo
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button> */}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="transition duration-300 ease-out hover:scale-105 inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-navy-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-navy-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200 font-medium"
          >
            <Heart className="w-5 h-5" />
            ¿Listo para transformar tu negocio?
          </a>
        </div>
      </div>
    </section>
  );
};