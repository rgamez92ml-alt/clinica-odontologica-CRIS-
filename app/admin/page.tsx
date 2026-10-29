'use client'

import { useState, useEffect } from 'react'

export default function AdminPage() {
  const [autenticado, setAutenticado] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [citas, setCitas] = useState<any[]>([])
  const [cargando, setCargando] = useState(true)
  const [actualizando, setActualizando] = useState<number | null>(null)

  useEffect(() => {
    if (autenticado) {
      cargarCitas()
    }
  }, [autenticado])

  const cargarCitas = () => {
    fetch('/api/citas')
      .then(res => res.json())
      .then(data => {
        setCitas(data)
        setCargando(false)
      })
      .catch(err => {
        console.error(err)
        setCargando(false)
      })
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'clinica2024') {
      setAutenticado(true)
      setError('')
    } else {
      setError('Contraseña incorrecta')
    }
  }

  const cambiarEstado = async (id: number, nuevoEstado: string) => {
    setActualizando(id)
    try {
      const res = await fetch('/api/citas/actualizar', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: nuevoEstado }),
      })
      
      if (res.ok) {
        setCitas(citas.map(c => 
          c.id === id ? { ...c, status: nuevoEstado } : c
        ))
      } else {
        alert('Error al actualizar el estado')
      }
    } catch (err) {
      console.error(err)
      alert('Error al actualizar')
    } finally {
      setActualizando(null)
    }
  }

  if (!autenticado) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-lg w-96 shadow-2xl">
          <h1 className="text-2xl font-bold mb-6 text-center text-white">🦷 Admin Clínica</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full bg-gray-700 text-white border border-gray-600 rounded px-4 py-3 mb-4 focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
            Entrar
          </button>
          {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Panel de Citas - Dra. Crisariana Gamez</h1>
          <button
            onClick={() => setAutenticado(false)}
            className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Salir
          </button>
        </div>

        {cargando ? (
          <div className="text-center py-12">
            <p className="text-gray-400">Cargando citas...</p>
          </div>
        ) : citas.length === 0 ? (
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <p className="text-gray-400 text-xl">No hay citas aún</p>
          </div>
        ) : (
          <div className="space-y-4">
            {citas.map((cita: any) => (
              <div key={cita.id} className="bg-gray-800 p-6 rounded-lg">
                <div className="grid md:grid-cols-3 gap-4">
                  <div><span className="text-gray-400">Nombre:</span> <strong>{cita.nombre}</strong></div>
                  <div><span className="text-gray-400">Teléfono:</span> {cita.telefono}</div>
                  <div><span className="text-gray-400">Email:</span> {cita.email || '—'}</div>
                  <div><span className="text-gray-400">Fecha:</span> {new Date(cita.fecha).toLocaleDateString()}</div>
                  <div><span className="text-gray-400">Hora:</span> {cita.hora}</div>
                  <div><span className="text-gray-400">Tratamiento:</span> {cita.tratamiento}</div>
                  <div className="md:col-span-2"><span className="text-gray-400">Notas:</span> {cita.notas || '—'}</div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">Estado:</span>
                    <select
                      value={cita.status}
                      onChange={(e) => cambiarEstado(cita.id, e.target.value)}
                      disabled={actualizando === cita.id}
                      className={`px-3 py-1 rounded-lg text-sm font-bold cursor-pointer disabled:opacity-50 ${
                        cita.status === 'PENDIENTE' 
                          ? 'bg-yellow-900 text-yellow-300 border border-yellow-700' 
                          : cita.status === 'ASISTIO'
                          ? 'bg-green-900 text-green-300 border border-green-700'
                          : 'bg-red-900 text-red-300 border border-red-700'
                      }`}
                    >
                      <option value="PENDIENTE"> PENDIENTE</option>
                      <option value="ASISTIO">✅ ASISTIÓ</option>
                      <option value="NO_ASISTIO"> NO ASISTIÓ</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}