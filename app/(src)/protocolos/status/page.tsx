import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <Link href="#" className="bg-white rounded-lg text-[#7A1C31] p-3 shadow-md">Visualizar protocolos asignados</Link>
        <Link href="#" className="bg-white rounded-lg text-[#7A1C31] p-3 shadow-md">Aceptar solicitudes de protocolos</Link>
        <Link href="#" className="bg-white rounded-lg text-[#7A1C31] p-3 shadow-md">Actualizar progresos</Link>
        <Link href="/actividades" className="bg-white rounded-lg text-[#7A1C31] p-3 shadow-md">Volver</Link>
    </div>
  )
}

export default page