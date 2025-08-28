
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Contacto
          </h2>
          <p className="text-xl text-gray-600">
            Estamos aquí para responder tus preguntas y programar tu cita
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">Teléfono</h4>
                  <p className="text-gray-600">0424-326-4332</p>
                  <p className="text-sm text-gray-500">Llamadas y WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">Ubicación</h4>
                  <p className="text-gray-600">Terras Plaza, Piso 8 C/S 8G</p>
                  <p className="text-gray-600">Caracas, Venezuela</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">Horarios</h4>
                  <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sábados: 8:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-lg text-gray-900 mb-4">Síguenos</h4>
              <div className="flex space-x-4">

                <a href="https://www.instagram.com/drclaudiolarosa/" className="bg-pink-600 p-3 rounded-lg hover:bg-pink-700 transition-colors">
                  <Instagram className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Reserva tu Cita</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu número de teléfono"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-2">
                  Servicio de Interés
                </label>
                <select
                  id="servicio"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>Selecciona un servicio</option>
                  <option>Aclaramiento Dental Smile Perfect</option>
                  <option>Diseño de Sonrisa</option>
                  <option>Odontología Integral</option>
                  <option>Panorámicas</option>
                  <option>Extracciones</option>
                  <option>Ortodoncia</option>
                  <option>Consulta General</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Cuéntanos sobre tu caso o pregunta..."
                ></textarea>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="privacidad"
                  className="mr-2"
                />
                <label htmlFor="privacidad" className="text-sm text-gray-600">
                  Acepto la <a href="#" className="text-blue-600 underline">Política de Privacidad</a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Enviar Solicitud de Cita
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¡Te Esperamos!</h3>
            <p className="text-lg mb-6">
              Somos especialistas en el área de Odontología Estética. 
              Tu sonrisa perfecta está a solo una cita de distancia.
            </p>
            <a 
              href="tel:04243264332"
              className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors inline-block"
            >
              Llamar Ahora: 0424-326-4332
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;