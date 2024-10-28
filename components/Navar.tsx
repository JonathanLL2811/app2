import React from 'react'

export default function Navar() {
  return (
   
<nav className="bg-gray-800">
    <div className="hidden sm:ml-6 sm:block">

<div className="flex space-x-4">
            <a href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Inicio</a>
            <a href="/contacto" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contacto</a>
            <a href="/abaut" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">abaut</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Otros</a>
</div>
</div>
</nav>
  )
}
