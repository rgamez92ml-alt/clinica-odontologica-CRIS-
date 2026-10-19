import Link from 'next/link'

export default function SobreMiPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">🦷 Dra. Crisariana Gamez</Link>
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">← Volver</Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Sobre mí</h1>

        <div className="bg-blue-50 p-8 rounded-xl mb-8">
          <h2 className="text-2xl font-bold mb-4">Formación académica</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Odontóloga - Universidad [Nombre]</li>
            <li>• Especialización en Odontología Estética</li>
            <li>• Curso de Carillas Dentales - [Institución]</li>
            <li>• Certificación en Blanqueamiento Dental</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl mb-8">
          <h2 className="text-2xl font-bold mb-4">Experiencia</h2>
          <p className="text-gray-700 text-lg">
            Más de 10 años de experiencia en odontología estética y restauradora.
            He atendido a más de 500 pacientes, transformando sus sonrisas y mejorando su calidad de vida.
          </p>
        </div>

        <div className="bg-blue-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Filosofía de trabajo</h2>
          <p className="text-gray-700 text-lg">
            Mi compromiso es brindar atención personalizada, utilizando la última tecnología
            y materiales de la más alta calidad. Cada paciente es único y merece un tratamiento
            diseñado específicamente para sus necesidades.
          </p>
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
