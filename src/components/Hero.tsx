import React from 'react';
import { ChevronDown, Code, Heart, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-400 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-indigo-400 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-purple-700 dark:text-purple-400">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">Desarrollo Web para PyMEs</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hago crecer tu
                <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent"> PyME </span>
                con sitios web que venden
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Soy Danna, desarrolladora especializada en crear sitios web que convierten visitantes en clientes. 
                Ayudo a emprendedores como tú a multiplicar sus ventas online.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-lg hover:from-blue-800 hover:to-indigo-800 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
              >
                Ver proyectos exitosos
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white dark:bg-navy-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-navy-600 rounded-lg hover:border-blue-700 dark:hover:border-blue-400 transition-all duration-200 font-medium"
              >
                Cotización gratuita
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-navy-700">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Proyectos completados</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Proyectos entregados</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">24h</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Tiempo de respuesta</div>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full opacity-60 blur-sm"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-40 blur-sm"></div>
              
              {/* Main photo container */}
              <div className="relative w-full h-full bg-gradient-to-br from-blue-200 to-indigo-200 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder for actual photo */}
                <div className="w-full h-full bg-gradient-to-br from-blue-300 to-indigo-300 dark:from-blue-800 to-indigo-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Code className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Danna Álvarez
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-8 -right-8 bg-white dark:bg-navy-800 rounded-lg p-3 shadow-lg animate-float">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <div className="absolute bottom-8 -left-8 bg-white dark:bg-navy-800 rounded-lg p-3 shadow-lg animate-float animation-delay-2000">
                <Code className="w-6 h-6 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200">
          <span className="text-sm mb-2">Conoce mi historia</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};