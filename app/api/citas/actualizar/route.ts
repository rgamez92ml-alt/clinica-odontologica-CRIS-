import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, status } = body

    const citaActualizada = await prisma.cita.update({
      where: { id: Number(id) },
      data: { status },
    })

    return NextResponse.json(citaActualizada)
  } catch (error) {
    console.error('Error al actualizar cita:', error)
    return NextResponse.json({ error: 'Error al actualizar' }, { status: 500 })
  }
}