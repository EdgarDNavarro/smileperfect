import { Heart, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">SMILE PERFECT</h3>
            <p className="text-gray-400 mb-4">
              Dr. Claudio La Rosa Leone - Especialista en Odontología de Alta Estética
            </p>
            <p className="text-gray-400">
              Transformando sonrisas con tecnología de última generación y 
              más de 12 años de experiencia en Venezuela.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span>0424-326-4332</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-1" />
                <div>
                  <p>Terras Plaza, Piso 8 C/S 8G</p>
                  <p>Caracas, Venezuela</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>• Aclaramiento Dental Smile Perfect</li>
              <li>• Diseño de Sonrisa</li>
              <li>• Odontología Integral</li>
              <li>• Panorámicas</li>
              <li>• Extracciones</li>
              <li>• Ortodoncia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            © 2025 Smile Perfect - Dr. Claudio La Rosa Leone. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 flex items-center justify-center">
            Hecho con <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" /> para transformar sonrisas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;