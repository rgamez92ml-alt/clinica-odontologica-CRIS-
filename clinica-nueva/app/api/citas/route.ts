import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, telefono, email, fecha, hora, tratamiento, notas } = body

    const cita = await prisma.cita.create({
      data: {
        nombre,
        telefono,
        email,
        fecha: new Date(fecha),
        hora,
        tratamiento,
        notas,
        status: 'PENDIENTE',
      },
    })

    return NextResponse.json(cita, { status: 201 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Error al crear cita' }, { status: 500 })
  }
}

export async function GET() {
  const citas = await prisma.cita.findMany({
    orderBy: { fecha: 'desc' },
  })
  return NextResponse.json(citas)
}
