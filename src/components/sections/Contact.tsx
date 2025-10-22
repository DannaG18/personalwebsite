import React, { useState, FormEvent, ChangeEvent } from "react";
import {
  Mail,
  MapPin,
  Send,
  MessageCircle,
  Linkedin,
  Github,
  Instagram,
  ChevronDown
} from "lucide-react";
import { ContactFormData } from "../../types";
import { Listbox } from "@headlessui/react";
import { sampleCards } from "../common/FloatingCardsCarousel/data/sampleCards";

export const Contact: React.FC = () => {
  const FORM_ENDPOINT = "https://formspree.io/f/mrblgvzn";

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    service: "",
    budget: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [selectedService, setSelectedService] = useState<
    { id: string; title: string } | null
  >(null);

  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          service: "",
          budget: "",
          subject: "",
          message: "",
        });
        setSelectedService(null);
        setSelectedBudget(null);
      } else {
        setStatus("error");
        console.error("Formspree Error:", result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/danna-alvarez-9794611a5/",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/DannaG18",
      color: "hover:text-gray-600",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://instagram.com/dannag_alvarezr",
      color: "hover:text-pink-600",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "dg.alvarezr@gmail.com",
      link: "mailto:dg.alvarezr@gmail.com",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+57 318 201 0789",
      link: "https://wa.me/573182010789",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      value: "Cúcuta, Norte de Santander, Colombia",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Impulsa tu negocio hoy mismo
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ¿Listo para llevar tu empresa al siguiente nivel? Solicita una
            consulta gratuita y descubre cómo puedo ayudarte a atraer más
            clientes y aumentar tus ventas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="bg-gradient-to-br from-blue-300 to-indigo-300 dark:bg-navy-900 rounded-2xl p-8 shadow-xl shadow-indigo-200 dark:shadow-navy-900/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Solicita tu consulta gratuita
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Nombre y empresa
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Juan Rojas - Mi Empresa S.A."
                    className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-navy-800 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="contacto@gmail.com"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-navy-800 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Selectores */}
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Servicio */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    ¿Qué necesita tu negocio?
                  </label>
                  <Listbox
                    value={selectedService}
                    onChange={(value) => {
                      setSelectedService(value);
                      setFormData({
                        ...formData,
                        service: value ? value.title : "",
                      });
                    }}
                  >
                    <div className="relative">
                      <Listbox.Button className="flex justify-between w-full px-4 py-3 border border-gray-300 rounded-lg bg-white dark:bg-navy-800 text-gray-900 dark:text-white">
                        {selectedService
                          ? selectedService.title
                          : "Selecciona un servicio"}
                          <ChevronDown/>
                      </Listbox.Button>

                      <Listbox.Options className="absolute mt-1 w-full rounded-md bg-white shadow-lg border border-gray-200 z-10">
                        {sampleCards.map((service) => (
                          <Listbox.Option
                            key={service.id}
                            value={service}
                            className={({ active, selected }) =>
                              `cursor-pointer px-4 py-2 ${
                                active
                                  ? "bg-[#5049E4] text-white"
                                  : selected
                                  ? "bg-[#0E0C63] text-white"
                                  : "text-gray-800"
                              }`
                            }
                          >
                            {service.title}
                          </Listbox.Option>
                        ))}
                        <Listbox.Option
                          key="otro-service"
                          value={{ id: "otro", title: "Otro" }}
                          className={({ active, selected }) =>
                            `cursor-pointer px-4 py-2 ${
                              active
                                ? "bg-[#4239CB] text-white"
                                : selected
                                ? "bg-[#0E0C63] text-white"
                                : "text-gray-800"
                            }`
                          }
                        >
                          Otro
                        </Listbox.Option>
                      </Listbox.Options>
                    </div>
                  </Listbox>
                </div>

                {/* Presupuesto */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    ¿Qué presupuesto tienes?
                  </label>
                  <Listbox
                    value={selectedBudget}
                    onChange={(value) => {
                      setSelectedBudget(value);
                      setFormData({
                        ...formData,
                        budget: value || "",
                      });
                    }}
                  >
                    <div className="relative">
                      <Listbox.Button className=" flex justify-between w-full px-4 py-3 border border-gray-300 rounded-lg bg-white dark:bg-navy-800 text-gray-900 dark:text-white">
                        {selectedBudget || "Selecciona un rango"}
                        <ChevronDown/>
                      </Listbox.Button>

                      <Listbox.Options className="absolute mt-1 w-full rounded-md bg-white shadow-lg border border-gray-200 z-10">
                        {sampleCards.map((service) => (
                          <Listbox.Option
                            key={service.id}
                            value={service.priceRange}
                            className={({ active, selected }) =>
                              `cursor-pointer px-4 py-2 ${
                                active
                                  ? "bg-[#5049E4] text-white"
                                  : selected
                                  ? "bg-[#0E0C63] text-white"
                                  : "text-gray-800"
                              }`
                            }
                          >
                            {service.priceRange}
                          </Listbox.Option>
                        ))}
                        <Listbox.Option
                          key="otro-budget"
                          value="Otro"
                          className={({ active, selected }) =>
                            `cursor-pointer px-4 py-2 ${
                              active
                                ? "bg-[#4239CB] text-white"
                                : selected
                                ? "bg-[#0E0C63] text-white"
                                : "text-gray-800"
                            }`
                          }
                        >
                          Otro
                        </Listbox.Option>
                      </Listbox.Options>
                    </div>
                  </Listbox>
                </div>
              </div>

              {/* Otros campos */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Objetivo principal
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Ej: Aumentar ventas online"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white dark:bg-navy-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Cuéntame sobre tu negocio
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Describe tu empresa y tus objetivos..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white dark:bg-navy-800 text-gray-900 dark:text-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
              >
                <Send className="w-5 h-5" />
                Solicitar consulta gratuita
              </button>
            </form>
          </div>

          {/* Columna derecha */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-navy-900 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contacto directo
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-600 dark:text-gray-300">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-navy-900 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Conecta conmigo
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-100 dark:bg-navy-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} hover:scale-110 hover:shadow-lg`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                ¿Tienes una pregunta urgente?
              </h3>
              <p className="text-blue-100 mb-6">
                Para consultas urgentes o cotizaciones rápidas, escríbeme por
                WhatsApp.
              </p>
              <a
                href="https://wa.me/573182010789?text=Hola Danna, necesito ayuda con desarrollo web para mi negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 rounded-lg hover:bg-gray-100 font-medium"
              >
                <MessageCircle className="w-5 h-5" />
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
          <p className="text-blue-800 dark:text-blue-300">
            <strong>Garantía de respuesta:</strong> Te respondo en menos de 24
            horas con una propuesta inicial. Para consultas urgentes, WhatsApp
            es la vía más rápida.
          </p>
        </div>
      </div>
    </section>
  );
};
