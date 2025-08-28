
import { CheckCircle, Zap, Shield, Sparkles } from 'lucide-react';

const SmilePerfect = () => {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Procedimiento Mínimamente Invasivo",
      description: "Sin causar ningún desgaste en tus dientes naturales"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "100% Biocompatible",
      description: "Fórmula desarrollada especialmente para uso odontológico seguro"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Sin Patologías",
      description: "No causa sensibilidad crónica ni efectos secundarios"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Resultados Superiores",
      description: "Pioneros en aclaramiento sobre restauraciones de resina y cerámica"
    }
  ];

  return (
    <section id="smile-perfect" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            ¿Qué es <span className="text-yellow-400">Smile Perfect</span>?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Nuestra tecnología exclusiva desarrollada durante 12 años de investigación. 
            Un gel blanqueador a base de peróxido de hidrógeno al 35% con fórmula única 
            que garantiza resultados excepcionales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Tecnología de Última Generación</h3>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              Hemos perfeccionado nuestra fórmula cambiando distintas proporciones y 
              agregando nuevas partículas para mejorar el rendimiento y absorción 
              del producto en las estructuras dentarias.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-yellow-400 flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                    <p className="opacity-90 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <img 
              src="public/img/Consultorio.webp" 
              alt="Tratamiento Smile Perfect en progreso"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <div className="text-center">
              <h4 className="text-xl font-bold mb-4">Avance Científico</h4>
              <p className="opacity-90 mb-6">
                Actualmente trabajamos en el estudio científico para avalar 
                oficialmente este tratamiento revolucionario.
              </p>
              <div className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold text-lg">
                ¡Únicos en Venezuela!
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg">
            Conocer Más Sobre el Tratamiento
          </button>
        </div>
      </div>
    </section>
  );
};

export default SmilePerfect;