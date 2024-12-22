import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <Link href="#" className="bg-white rounded-lg text-[#7A1C31] p-3 shadow-md">Organizar sesiones de seguimiento</Link>
        <Link href="#" className="bg-white rounded-lg text-[#7A1C31] p-3 shadow-md">Registrar calificaciones y avances</Link>
        <Link href="#" className="bg-white rounded-lg text-[#7A1C31] p-3 shadow-md">Reportar calificaciones finales</Link>
        <Link href="/actividades" className="bg-white rounded-lg text-[#7A1C31] p-3 shadow-md">volver</Link>
    </div>
  )
}

export default page