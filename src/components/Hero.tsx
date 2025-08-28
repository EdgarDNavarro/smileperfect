import { Star, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforma Tu
              <span className="text-blue-600 block">Sonrisa</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Odontología de alta estética con tecnología de última generación. 
              Descubre el tratamiento revolucionario <span className="font-semibold text-blue-600">Smile Perfect </span> 
              del Dr. Claudio La Rosa Leone.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-green-600">
                <Star className="h-5 w-5 mr-2 fill-current" />
                <span className="text-sm font-medium">Procedimiento Mínimamente Invasivo</span>
              </div>
              <div className="flex items-center text-green-600">
                <Award className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">100% Biocompatible</span>
              </div>
              <div className="flex items-center text-green-600">
                <Users className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Pioneros Nacionales</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href='https://wa.link/5zksm8' target="_blank" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                Reservar Cita
              </a>
              <a href="https://www.instagram.com/drclaudiolarosa/" target="_blank" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Ver Casos
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <img 
                src="src/img/CasodeAclaramientoDental.webp" 
                alt="Sonrisa perfecta después del tratamiento"
                className="w-full object-cover rounded-lg mb-6"
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">¡Atrévete a Sonreír!</h3>
                <p className="text-gray-600 text-sm">Resultados que cambian vidas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;