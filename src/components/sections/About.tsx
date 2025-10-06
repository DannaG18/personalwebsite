import React from 'react';
import { Code2, Heart, Lightbulb, Target, Award, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Pasión por Resolver Problemas",
      description: "Cada desafío es una oportunidad para aprender y crear soluciones que realmente funcionen"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Curiosidad Constante",
      description: "Me encanta aprender cosas nuevas y mantenerme actualizada con las últimas tecnologías"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Resiliencia y Determinación",
      description: "No me rindo fácilmente y siempre me esfuerzo por generar un impacto real"
    }
  ];

  const education = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Técnico Laboral en Programación de Software",
      institution: "Campuslands",
      year: "2024",
      description: "Formación en desarrollo con Java, Spring Boot y React"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Certificaciones Tecnológicas",
      institution: "IBM, Microsoft, Cisco, Udemy",
      year: "2025",
      description: "Certificaciones en fundamentos de IA, Ciber Security, desarrollo web y más"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre mí
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hola, soy Danna y me encanta aprender cosas nuevas. Me considero una persona muy curiosa
            y siempre que veo un problema, busco una solución.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-blue-700 dark:text-blue-400">
              <Code2 className="w-6 h-6" />
              <span className="font-medium">Mi historia como desarrolladora</span>
            </div>

            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Cada reto que enfrento es una nueva oportunidad para aprender, contribuir y construir algo significativo.
                Esta mentalidad me ha llevado a convertirme en desarrolladora de software y una apasionada de la tecnología.
              </p>
              <p>
                Me centré en lenguajes orientados a objetos y fuertemente tipados porque me desafían y me permiten
                crear aplicaciones robustas y bien estructuradas. Esto ha mejorado mi forma de pensar como desarrolladora,
                ayudándome a escribir código más limpio y a seguir las mejores prácticas.
              </p>
              <p>
                También encuentro fuertes conexiones entre lo que hago y quién soy. Cantar ha despertado en mí una creatividad
                que aplico incluso al resolver problemas técnicos, y el deporte me ha enseñado a ser dinámica, constante
                y a trabajar en equipo.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
              >
                Trabajemos juntos
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative w-full  h-full bg-gradient-to-br from-blue-200 to-indigo-200 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative overflow-hidden">
              <img
                src="aboutme.jpeg"
                alt="Danna Alvarez"
                className="w-full h-[500px] object-cover" />
            </div>
          </div>
          {/* <div className="relative">
            <div className="bg-gradient-to-br from-blue-200 to-indigo-200 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-8 h-96">
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Pasión por la tecnología
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Creo firmemente que la tecnología puede transformar la vida de las personas y los negocios
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Lo que me define
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-navy-800 hover:bg-gradient-to-br hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg mx-auto mb-4 flex items-center justify-center text-white">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Formación y certificaciones
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-navy-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {edu.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {edu.title}
                  </h4>
                  <div className="text-blue-700 dark:text-blue-400 font-medium mb-1">
                    {edu.institution} • {edu.year}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};