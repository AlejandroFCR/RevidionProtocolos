import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='text-xl text-center p-10'>
        <h2 className='text-3xl font-bold mb-10'>Protocolos y Trabajos Terminales</h2>
        <form className='grid grid-cols-1 justify-center w-1/2 mx-auto gap-3 mb-5'>
            <div className='flex justify-center gap-5'>
                <button type="submit" className="bg-white rounded-lg text-[#7A1C31] p-3 shadow-md w-fit">Registro de equipo</button>
                <button type="submit" className="bg-white rounded-lg text-[#7A1C31] p-3 shadow-md w-fit">Estado del protocolo</button>
            </div>
            <input type="textarea"className='p-2 block m-2 rounded-lg border-2 h-32'/>
        </form>
        <p className='mt-10'><Link href="/" className="bg-white rounded-lg text-[#7A1C31] p-3 shadow-md">Volver</Link></p>
    </div>
  )
}

export default page