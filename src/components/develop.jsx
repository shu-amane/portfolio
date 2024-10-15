import React from "react"
import Projects from "./Projects"

const developList = [
  {title: "RPGポートフォリオ", description: "RPG風自己紹介", stack: "React", link:"https://rpg-portfolio.pages.dev/"}
]

function Develop() {
  return(
    <section id="develop" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Develop</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {developList.map((develop, index) => (
            <div key={index} className="border border-gray-700 p-6 rounded-lg hover:bg-gray-800 transition">
              <h3 className="text-xl font-semibold">{develop.title}</h3>
              <p className="mb-2">{develop.description}</p>
              <a target="_blank" href={develop.link} className="text-emerald-400">RPGポートフォリオ</a>
              <span className="block mt-4 text-blue-400">{develop.stack}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Develop