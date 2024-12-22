import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <Link href="/" className="bg-white rounded-lg text-[#7A1C31] p-3 shadow-md">Entrega de Protocolos</Link>
        <Link href="/protocolos/recepcion" className="bg-white rounded-lg text-[#7A1C31] p-3 shadow-md">Recepción de Protocolos</Link>
        <Link href="/protocolos/status" className="bg-white rounded-lg text-[#7A1C31] p-3 shadow-md">Actualizar Estado de Protocolos</Link>
        <Link href="/protocolos/sinodales" className="bg-white rounded-lg text-[#7A1C31] p-3 shadow-md">Busqueda de Sinodales Disponibles</Link>
    </div>
  )
}

export default page