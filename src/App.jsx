import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Develop from "./components/develop"

function App() {
    return (
      <div className="bg-gray-900 text-white">
        <Header />
        <main>
          <Hero />
          <Projects />
          {/* <Develop /> */}
        </main>
      </div>
    )
}

export default App