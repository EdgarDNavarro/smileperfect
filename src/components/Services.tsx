import { Smile, Zap, Shield, Heart, Sparkles, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smile className="h-8 w-8" />,
      title: "Aclaramiento Dental Smile Perfect",
      description: "Nuestro tratamiento exclusivo con gel blanqueador de peróxido de hidrógeno al 35%",
      features: ["Mínimamente invasivo", "Sin desgaste dental", "100% biocompatible"]
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Diseño de Sonrisa",
      description: "Personalización completa de tu sonrisa adaptada a tu rostro y belleza única",
      features: ["Análisis facial", "Corrección de imperfecciones", "Simetría y armonía"]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Odontología Integral",
      description: "Cuidado dental completo con enfoque en la estética y salud bucal",
      features: ["Tratamiento personalizado", "Tecnología avanzada", "Seguimiento continuo"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Panorámicas",
      description: "Radiografías panorámicas digitales para un diagnóstico preciso y completo",
      features: ["Alta definición", "Menor radiación", "Visión integral de la boca"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Extracciones",
      description: "Procedimientos seguros y cuidadosos para la extracción de piezas dentales",
      features: ["Técnicas mínimamente invasivas", "Recuperación rápida", "Atención indolora"]
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Ortodoncia",
      description: "Tratamientos modernos para alinear y mejorar la posición de los dientes",
      features: ["Brackets estéticos y metálicos", "Alineadores invisibles", "Corrección funcional y estética"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Especialistas en odontología estética con métodos innovadores 
            y tecnología de última generación para transformar tu sonrisa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-colors group">
              <div className="text-blue-600 group-hover:text-blue-700 mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="h-2 w-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">
            ¡Conquista el Mundo con una Sonrisa Espectacular!
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            ¿Quieres una sonrisa brillante, radiante y perfecta? El diseño de sonrisa 
            y aclaramiento dental es la solución. Logra ese look deslumbrante que 
            siempre has soñado con nuestro tratamiento especializado.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
              <h4 className="font-semibold text-lg mb-2">Blanco Natural</h4>
              <p className="text-blue-100">Aclaramiento dental para un blanco natural y saludable</p>
            </div>
            <div className="text-center">
              <Smile className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
              <h4 className="font-semibold text-lg mb-2">Diseño Personalizado</h4>
              <p className="text-blue-100">Sonrisa que se adapta a tu rostro y resalta tu belleza</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
              <h4 className="font-semibold text-lg mb-2">Corrección Perfecta</h4>
              <p className="text-blue-100">Imperfecciones corregidas para simetría y armonía</p>
            </div>
          </div>

          <a href='https://wa.link/5zksm8' target="_blank" className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg inline-block">
            Comienza Tu Transformación Hoy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;