import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='text-xl text-center p-10'>
        <h2 className='text-3xl font-bold mb-10'>Iniciar sesión</h2>
        <form className='grid grid-cols-1 justify-center w-1/2 mx-auto gap-3 mb-5'>
            <input type="text" placeholder="Usuario" className='p-2 block m-2 rounded-lg border-2 '/>
            <input type="password" placeholder="Contraseña" className='p-2 block m-2 rounded-lg border-2 '/>
            <button type="submit" className="bg-white rounded-lg text-[#7A1C31] p-3 shadow-md w-fit mx-auto">ENTRAR</button>
        </form>
        <p><Link href="#">¿Olvidaste tu contraseña?</Link></p>
        <p><Link href="#">¿No tienes cuenta? REGISTRARSE</Link></p>
        <p className='mt-10'><Link href="/" className="bg-white rounded-lg text-[#7A1C31] p-3 shadow-md">Volver</Link></p>
        <p className='mt-10'><Link href="/actividades" className="bg-white rounded-lg text-[#7A1C31] p-3 shadow-md">Actividades</Link></p>
    </div>
  )
}

export default page