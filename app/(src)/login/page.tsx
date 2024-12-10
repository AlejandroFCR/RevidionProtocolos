import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h2>LOGIN</h2>
        <form>
            <input type="text" placeholder="Usuario"/>
            <input type="password" placeholder="Contraseña"/>
            <button type="submit" className="button">ENTRAR</button>
        </form>
        <p><Link href="#">¿Olvidaste tu contraseña?</Link></p>
        <p><Link href="#">¿No tienes cuenta? REGISTRARSE</Link></p>
        <Link href="/" className="button">Volver</Link>
    </div>
  )
}

export default page