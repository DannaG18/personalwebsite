import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

export const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "Por qué elegir Java Spring Boot para tu PyME",
      excerpt: "Descubre las ventajas de usar Java Spring Boot para desarrollar aplicaciones empresariales robustas y escalables.",
      content: "Java Spring Boot ofrece un framework robusto que permite crear aplicaciones empresariales...",
      date: "2025-01-15",
      readTime: "6 min",
      category: "Desarrollo Backend",
      tags: ["Java", "Spring Boot", "Empresas"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      featured: true
    },
    {
      id: 2,
      title: "React vs Angular: ¿Cuál elegir para tu proyecto?",
      excerpt: "Comparación técnica entre React y Angular para ayudarte a tomar la mejor decisión.",
      content: "Ambos frameworks tienen sus ventajas. Te explico cuándo usar cada uno...",
      date: "2025-01-10",
      readTime: "5 min",
      category: "Desarrollo Frontend",
      tags: ["React", "Angular", "Frontend"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
      featured: false
    },
    {
      id: 3,
      title: "Mi experiencia liderando equipos de desarrollo",
      excerpt: "Reflexiones sobre el liderazgo estudiantil y la mentoría en tecnología.",
      content: "Liderar un grupo de desarrolladores júnior me enseñó la importancia de...",
      date: "2025-01-05",
      readTime: "4 min",
      category: "Liderazgo",
      tags: ["Liderazgo", "Mentoría", "Equipos"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      featured: false
    },
    {
      id: 4,
      title: "Arquitectura hexagonal en aplicaciones Java",
      excerpt: "Cómo implementar una arquitectura limpia y mantenible en tus proyectos empresariales.",
      content: "La arquitectura hexagonal permite crear aplicaciones más testeable y mantenibles...",
      date: "2024-12-28",
      readTime: "7 min",
      category: "Arquitectura",
      tags: ["Java", "Arquitectura", "Clean Code"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      featured: false
    },
    {
      id: 5,
      title: "Inteligencia Artificial en el desarrollo web",
      excerpt: "Cómo la IA está transformando el desarrollo de software y qué significa para las PyMEs.",
      content: "La inteligencia artificial no es solo para grandes empresas...",
      date: "2024-12-20",
      readTime: "5 min",
      category: "Inteligencia Artificial",
      tags: ["IA", "Desarrollo", "Futuro"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      featured: false
    }
  ];

  const categories = [
    { name: "Todos", count: posts.length },
    { name: "Desarrollo Backend", count: posts.filter(p => p.category === "Desarrollo Backend").length },
    { name: "Desarrollo Frontend", count: posts.filter(p => p.category === "Desarrollo Frontend").length },
    { name: "Liderazgo", count: posts.filter(p => p.category === "Liderazgo").length },
    { name: "Arquitectura", count: posts.filter(p => p.category === "Arquitectura").length }
  ];

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Reflexiones técnicas y personales
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comparto mi experiencia en desarrollo de software, liderazgo técnico y las lecciones 
            aprendidas en mi camino como desarrolladora.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
             className="px-4 py-2 rounded-full bg-gray-100 dark:bg-navy-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
           <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full">
                      Artículo destacado
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm rounded-full"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors duration-200 group">
                   Leer estrategia completa
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {regularPosts.slice(0, 6).map((post) => (
            <article
              key={post.id}
              className="bg-gray-50 dark:bg-navy-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm transition-colors duration-200 group">
                  Leer estrategia
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Mantente actualizado en tecnología
          </h3>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Recibe contenido exclusivo sobre desarrollo de software, nuevas tecnologías y tendencias 
            que pueden beneficiar a tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-6 py-3 bg-white text-blue-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
              Suscribirme
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};