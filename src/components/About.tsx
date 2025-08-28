import { GraduationCap, Award, Heart, Microscope } from 'lucide-react';

const About = () => {
  return (
    <section id="doctor" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="src/img/claudio.webp" 
              alt="Dr. Claudio La Rosa en su consulta"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          <div>
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Dr. Claudio La Rosa Leone
              </h2>
              <p className="text-xl text-blue-600 font-semibold mb-6">
                Especialista en Odontología de Alta Estética
              </p>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Con más de 12 años de experiencia desarrollando tratamientos innovadores, 
              el Dr. La Rosa es reconocido como pionero en Venezuela en el área de 
              odontología estética y aclaramiento dental avanzado.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <GraduationCap className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                <div className="font-bold text-2xl text-gray-900">12+</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Award className="h-8 w-8 mx-auto text-green-600 mb-2" />
                <div className="font-bold text-2xl text-gray-900">1250+</div>
                <div className="text-sm text-gray-600">Casos Exitosos</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <Heart className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Pasión por la Excelencia</h4>
                  <p className="text-gray-600 text-sm">Dedicado a transformar sonrisas con los más altos estándares de calidad.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Microscope className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Innovación Constante</h4>
                  <p className="text-gray-600 text-sm">Desarrollador del revolucionario tratamiento Smile Perfect, único en el país.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;