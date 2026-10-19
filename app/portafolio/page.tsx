import Link from 'next/link'

export default function PortafolioPage() {
  const trabajos = [
    {
      titulo: 'Blanqueamiento dental',
      categoria: 'Estética',
      descripcion: 'Resultado después de 2 sesiones de blanqueamiento profesional.',
    },
    {
      titulo: 'Carillas de porcelana',
      categoria: 'Diseño de sonrisa',
      descripcion: 'Transformación completa con 10 carillas de porcelana.',
    },
    {
      titulo: 'Ortodoncia invisible',
      categoria: 'Ortodoncia',
      descripcion: 'Alineación dental completa en 12 meses.',
    },
    {
      titulo: 'Implante dental',
      categoria: 'Implantología',
      descripcion: 'Reemplazo de pieza dental con implante de titanio.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">🦷 Dra. Crisariana Gamez</Link>
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">← Volver</Link>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Portafolio</h1>
        <p className="text-gray-600 text-center mb-12">Algunos de nuestros trabajos realizados</p>

        <div className="grid md:grid-cols-2 gap-8">
          {trabajos.map((trabajo, i) => (
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
                <span className="text-sm text-blue-600 font-semibold">{trabajo.categoria}</span>
                <h3 className="text-xl font-bold mt-2">{trabajo.titulo}</h3>
                <p className="text-gray-600 mt-2">{trabajo.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/agendar" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg">
            Agendar una cita
          </Link>
        </div>
      </main>
    </div>
  )
}
