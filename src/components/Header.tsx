import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-end">
            <div className="text-2xl font-bold text-white">
              SMILE PERFECT
            </div>
            <div className="ml-6 text-sm text-white hidden sm:block">
              Dr. Claudio La Rosa
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-white hover:text-gray-200 transition-colors">Inicio</a>
            <a href="#doctor" className="text-white hover:text-gray-200 transition-colors">Dr. La Rosa</a>
            <a href="#smile-perfect" className="text-white hover:text-gray-200 transition-colors">Smile Perfect</a>
            <a href="#casos" className="text-white hover:text-gray-200 transition-colors">Casos</a>
            <a href="#servicios" className="text-white hover:text-gray-200 transition-colors">Servicios</a>
            <a href="#contacto" className="text-white hover:text-gray-200 transition-colors">Contacto</a>
          </nav>


          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 py-2">Inicio</a>
              <a href="#doctor" className="text-gray-700 hover:text-blue-600 py-2">Dr. La Rosa</a>
              <a href="#smile-perfect" className="text-gray-700 hover:text-blue-600 py-2">Smile Perfect</a>
              <a href="#casos" className="text-gray-700 hover:text-blue-600 py-2">Casos</a>
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 py-2">Servicios</a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 py-2">Contacto</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;