import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            🦷 Dra. Crisariana Gamez
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition">Servicios</a>
            <a href="#sobre-mi" className="text-gray-700 hover:text-blue-600 transition">Sobre mí</a>
            <a href="#portafolio" className="text-gray-700 hover:text-blue-600 transition">Portafolio</a>
            <Link href="/agendar" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Agendar cita
            </Link>
          </div>
          <a
            href="https://wa.me/584140122733"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 flex items-center gap-2 transition"
          >
            <span>📱</span>
            <span className="hidden md:inline">WhatsApp</span>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="inicio" className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Sonrisas que transforman vidas
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Odontología estética y restauradora con más de 20 años de experiencia.
            Tu sonrisa en las mejores manos.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/agendar"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Agendar cita
            </Link>
            <a
              href="https://wa.me/584140122733?text=Hola,%20quiero%20información%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition shadow-lg"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '✨', titulo: 'Blanqueamiento', desc: 'Dientes más blancos en una sola sesión' },
              { icon: '🦷', titulo: 'Ortodoncia', desc: 'Alineación dental con brackets o invisibles' },
              { icon: '💎', titulo: 'Carillas', desc: 'Diseño de sonrisa personalizado' },
              { icon: '🔧', titulo: 'Implantes', desc: 'Reemplazo de piezas dentales' },
              { icon: '👶', titulo: 'Odontopediatría', desc: 'Atención especializada para niños' },
              { icon: '🚨', titulo: 'Emergencias', desc: 'Atención urgente disponible' },
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100">
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-2">{s.titulo}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="bg-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Sobre mí</h2>
          <p className="text-xl text-gray-700 mb-4">
            Egresada de la Universidad Central con especialización en Prostodoncia.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Más de 500 sonrisas transformadas y pacientes satisfechos.
            Mi compromiso es brindar atención personalizada y de calidad.
          </p>
          <Link href="/sobre-mi" className="text-blue-600 font-semibold hover:underline text-lg">
            Conoce más sobre mi trayectoria →
          </Link>
        </div>
      </section>

      {/* Portafolio preview */}
      <section id="portafolio" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Trabajos realizados</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden border">
                <div className="grid grid-cols-2">
                  <div className="bg-gray-200 h-64 flex items-center justify-center">
                    <span className="text-gray-500">Antes</span>
                  </div>
                  <div className="bg-gray-200 h-64 flex items-center justify-center">
                    <span className="text-gray-500">Después</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg">Caso #{i}</h3>
                  <p className="text-gray-600">Blanqueamiento dental</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portafolio" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg">
              Ver portafolio completo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4"> Dra. Crisariana Gamez</h3>
            <p className="text-gray-400">Odontología estética y restauradora</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <p className="text-gray-400 mb-2">📍 Dirección del consultorio</p>
            <p className="text-gray-400 mb-2">📞 +58 414 012 27 33</p>
            <p className="text-gray-400">✉️ dracrisarianagamez@gmail.com</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Horario</h4>
            <p className="text-gray-400">Lun - Vie: 8:00 AM - 6:00 PM</p>
            <p className="text-gray-400">Sáb: 8:00 AM - 2:00 PM</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          © 2024 Dra. Crisariana Gamez. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}