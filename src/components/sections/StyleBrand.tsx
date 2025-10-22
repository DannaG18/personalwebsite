import React from 'react';
import { Heart, Code, Sparkles, Coffee, Music, Camera } from 'lucide-react';

export const StyleBrand: React.FC = () => {
  const brandItems = [
    {
      type: 'quote',
      content: 'Cada reto es una oportunidad para aprender y crear',
      icon: <Code className="w-6 h-6" />,
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      type: 'image',
      content: 'Developer working on code',
      image: 'grid6.jpeg',
      // image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      type: 'quote',
      content: 'La creatividad del canto aplicada al código',
      icon: <Heart className="w-6 h-6" />,
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      type: 'image',
      content: 'Team collaboration in software development',
      image: 'grid9.jpeg',
      // gradient: 'from-blue-600 to-indigo-600'  
    },
    {
      type: 'quote',
      content: 'El deporte me enseñó constancia y trabajo en equipo',
      icon: <Sparkles className="w-6 h-6" />,
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      type: 'image',
      content: 'Modern web development workspace',
      image: 'me2.jpeg',
      gradient: 'from-blue-700 to-purple-700'
    },
    {
      type: 'quote',
      content: 'Resiliencia: la clave para no rendirse nunca',
      icon: <Music className="w-6 h-6" />,
      gradient: 'from-purple-700 to-indigo-700'
    },
    {
      type: 'image',
      content: 'Clean code and best practices',
      image: 'me-book.jpeg',
      // image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
      gradient: 'from-indigo-700 to-blue-700'
    },
    {
      type: 'quote',
      content: 'Código limpio, arquitectura sólida',
      icon: <Coffee className="w-6 h-6" />,
      gradient: 'from-blue-800 to-indigo-800'
    },
    {
      type: 'image',
      content: 'Learning and growth mindset',
      image: 'grid1.jpeg',
      gradient: 'from-indigo-800 to-purple-800'
    },
    {
      type: 'quote',
      content: 'Aprendizaje continuo, crecimiento constante',
      icon: <Camera className="w-6 h-6" />,
      gradient: 'from-purple-800 to-blue-800'
    },
    {
      type: 'image',
      content: 'Technology transforming lives',
      image: 'grid2.jpeg',
      gradient: 'from-blue-900 to-indigo-900'
    }
  ];

  return (
    <section id="style" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mi filosofía personal y profesional
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Donde la pasión por la tecnología se encuentra con la creatividad personal. 
            Mi enfoque combina habilidades técnicas con valores humanos para crear soluciones significativas.
          </p>
        </div>

        {/* Instagram-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {brandItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-square group cursor-pointer overflow-hidden rounded-2xl"
            >
              {item.type === 'image' ? (
                <div className="relative w-full h-full">
                  <img
                    src={item.image}
                    alt={item.content}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${item.gradient} p-6 flex flex-col items-center justify-center text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 text-center">
                    <div className="mb-4 opacity-80">
                      {item.icon}
                    </div>
                    <p className="text-sm md:text-base font-medium leading-tight">
                      {item.content}
                    </p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-white/10 rounded-full"></div>
                </div>
              )}
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <div className="text-white text-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <Heart className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Philosophy */}
        <div className="bg-white dark:bg-navy-900 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Mi enfoque como desarrolladora
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  No solo me interesa la programación, sino también comprender cómo la tecnología puede transformar 
                  la vida de las personas y los negocios. Cada línea de código que escribo tiene un propósito.
                </p>
                <p>
                  Mi resiliencia ha sido clave para convertirme en quien soy hoy: una persona que no se rinde 
                  fácilmente y que siempre se esfuerza por generar un impacto real a través de su trabajo.
                </p>
                <p>
                  Mi objetivo es seguir creciendo tanto profesional como personalmente, convertirme en la mejor 
                  versión de mí misma y demostrar que con propósito, determinación y pasión, cualquier meta es alcanzable.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-200 to-indigo-200 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Pasión + Tecnología
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    La combinación perfecta para crear soluciones innovadoras
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        {/* <div className="text-center mt-16">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            ¿Tienes un proyecto en mente?
          </h4>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Si buscas una desarrolladora comprometida que entienda tus necesidades técnicas 
            y te ayude a materializar tus ideas, conversemos sobre tu proyecto.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-lg hover:from-blue-800 hover:to-indigo-800 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
          >
            Hablemos de tu proyecto
            <span>→</span>
          </a>
        </div> */}
      </div>
    </section>
  );
};