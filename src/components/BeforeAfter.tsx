
const BeforeAfter = () => {
  const cases = [
    {
      id: 1,
      img: 'public/img/arahan.webp',
      url: "https://www.instagram.com/p/DAaF38Pu4JX/?utm_source=ig_web_copy_link&igsh=OGFnYjJvbGd1cjV5"
    },
    {
      id: 2,
      img: 'public/img/mariana.webp',
      url: "https://www.instagram.com/p/DCFfzVFSXWi/?utm_source=ig_web_copy_link&igsh=MTQ4ZjltNGRla2kzaA=="
    },
    {
      id: 3,
      img: 'public/img/mariam.webp',
      url: "https://www.instagram.com/p/DEsknUFShcO/?utm_source=ig_web_copy_link&igsh=MWNjNGgydTlzdHA0cQ=="
    }
  ];

  return (
    <section id="casos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Casos de Éxito
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 1250 casos documentados demuestran la efectividad de nuestra 
            técnica Smile Perfect en diferentes tipos de tratamientos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {cases.map((case_item) => (
            <div key={case_item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-4">
              <a 
                href={case_item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-transform"
              >
                <img 
                  src={case_item.img} 
                  alt={`Caso de éxito ${case_item.id}`}
                  className="w-full object-cover rounded-lg"  
                />
              </a>

            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-blue-600 text-white px-8 py-6 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold mb-2">¡Hermoso Resultado!</h3>
            <p className="text-blue-100 mb-10">Cada caso es único y personalizado según las necesidades del paciente</p>
            <a href="https://www.instagram.com/drclaudiolarosa/" target="_blank"  className="bg-white hover:cursor-pointer text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Ver Más Casos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;