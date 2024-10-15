import React from "react"

function Header() {
  return (
    <header className="w-full p-4 bg-gray-800 text-white fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#develop" className="hover:text-blue-400">Develop</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header