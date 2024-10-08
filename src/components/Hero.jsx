import React from "react"
import { IconContext } from "react-icons"
import { ImTwitter, ImGithub } from "react-icons/im"
import ProfileImage from "../images/profile-image.jpg"

function Hero() {
  return(
    <section id="home" className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <img src={ProfileImage} alt="" className="object-containn h-96 w-96 rounded-full" />
        <h2 className="text-4xl md:text-6xl font-bold">Amane</h2>
        <p className="mt-4 text-lg md:text-2xl">JOB:Engineer</p>
        <div className="flex justify-center items-center mt-4">
          <IconContext.Provider value={{ size:"3rem"}}>
            <div className="mr-5">
              <a><ImTwitter /></a>
            </div>
            <div>
              <a><ImGithub /></a>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </section>
  )
}

export default Hero