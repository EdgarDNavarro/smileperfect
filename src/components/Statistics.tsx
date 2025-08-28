
import { Users, Star, Award, Clock } from 'lucide-react';

const Statistics = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "1250+",
      title: "Casos Exitosos",
      description: "Pacientes satisfechos con resultados documentados"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "12+",
      title: "Años de Experiencia",
      description: "Desarrollando y perfeccionando técnicas innovadoras"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "100%",
      title: "Satisfacción",
      description: "Resultados que superan las expectativas"
    },
    {
      icon: <Star className="h-8 w-8" />,
      number: "1°",
      title: "Pioneros Nacionales",
      description: "Únicos en Venezuela con esta tecnología"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Números que Hablan</h2>
          <p className="text-xl opacity-90">
            Más de una década transformando sonrisas con resultados excepcionales
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors">
                <div className="text-yellow-400 mb-6 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold mb-3">{stat.title}</h3>
                <p className="text-sm opacity-90">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              "El Momento Perfecto para Empezar a Brillar"
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Ven y consiente tu sonrisa con la tecnología de vanguardia y el cuidado que te mereces. 
              Reserva tu cita hoy y comienza el camino hacia una sonrisa de estrella.
            </p>
            <a href='https://wa.link/5zksm8' target="_blank" className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors inline-block">
              ¡Reservar Ahora!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;