import React from 'react';
import { Heart, Code, Linkedin, Github, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navegacion: [
      { name: 'Inicio', href: '#home' },
      { name: 'Sobre mí', href: '#about' },
      { name: 'Proyectos', href: '#projects' },
      { name: 'Servicios', href: '#services' }
    ],
    recursos: [
      { name: 'Blog', href: '#blog' },
      { name: 'Contacto', href: '#contact' },
      { name: 'CV Descargar', href: 'https://dgportfolio-one.vercel.app' },
      { name: 'Portfolio', href: 'https://dgportfolio-one.vercel.app/' }
    ]
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/danna-alvarez-9794611a5/'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/DannaG18'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://instagram.com/dannag_alvarezr'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:dg.alvarezr@gmail.com'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
                Danna Alvarez 
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Desarrolladora de software especializada en crear soluciones web robustas para PyMEs. 
                Transformo ideas en aplicaciones que impulsan el crecimiento de tu negocio.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-blue-400" />
              <span>y</span>
              <Code className="w-4 h-4 text-indigo-400" />
              <span>por DG</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navegación</h4>
            <ul className="space-y-3">
              {footerLinks.navegacion.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Danna Alvarez todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              {/* <a href="#" className="hover:text-white transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Términos de Servicio
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      </div>
    </footer>
  );
};