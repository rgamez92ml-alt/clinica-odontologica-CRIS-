'use client'

import { useState } from 'react'

export default function AgendarPage() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    fecha: '',
    hora: '',
    tratamiento: '',
    notas: '',
  })
  const [mensaje, setMensaje] = useState('')
  const [cargando, setCargando] = useState(false)

  const tratamientos = [
    'Consulta general',
    'Blanqueamiento dental',
    'Ortodoncia',
    'Carillas dentales',
    'Implantes',
    'Limpieza dental',
    'Odontopediatría',
    'Otro',
  ]

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault()
    setCargando(true)
    setMensaje('')

    try {
      const res = await fetch('/api/citas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setMensaje('✅ Cita agendada. Te contactaremos pronto.')
        setForm({ nombre: '', telefono: '', email: '', fecha: '', hora: '', tratamiento: '', notas: '' })
      } else {
        setMensaje('❌ Error al agendar')
      }
    } catch {
      setMensaje('❌ Error de conexión')
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold mb-2 text-center">Agendar cita</h1>
          <p className="text-gray-600 text-center mb-8">Completa el formulario y te contactaremos</p>

          <form onSubmit={enviar} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Nombre completo *</label>
              <input
                type="text"
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Teléfono (WhatsApp) *</label>
              <input
                type="tel"
                required
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                placeholder="+58 412 345 6789"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Fecha *</label>
                <input
                  type="date"
                  required
                  value={form.fecha}
                  onChange={(e) => setForm({ ...form, fecha: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Hora *</label>
                <select
                  required
                  value={form.hora}
                  onChange={(e) => setForm({ ...form, hora: e.target.value })}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Selecciona...</option>
                  {['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'].map(h => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Tratamiento *</label>
              <select
                required
                value={form.tratamiento}
                onChange={(e) => setForm({ ...form, tratamiento: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecciona...</option>
                {tratamientos.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Notas</label>
              <textarea
                value={form.notas}
                onChange={(e) => setForm({ ...form, notas: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Describe tu caso..."
              />
            </div>

            <button
              type="submit"
              disabled={cargando}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 transition"
            >
              {cargando ? 'Agendando...' : 'Agendar cita'}
            </button>

            {mensaje && (
              <div className={`p-4 rounded-lg ${mensaje.includes('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {mensaje}
              </div>
            )}
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">¿Prefieres WhatsApp directo?</p>
            <a
              href="https://wa.me/584123456789?text=Hola,%20quiero%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition"
            >
              💬 Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
