import "tailwindcss/tailwind.css"

import React from "react"
import {config} from "config/sitemap"

const About = () => {
  return (
<>    
      <h1 className="my-4 font-mono text-4xl font-medium text-center">poladuco.com</h1>
      <h2 className="font-mono italic text-center text-md text-frontSecondary">{config.description}</h2>
      <main className="mx-4 my-8 font-mono">
        <p>
          I am an Italian software developper living in Paris. I love learning new technologies,
          trying different languages and crafting software that reduces friction for both users and
          developers.
        </p>
        <br />
        <p>
          I am a co-organizer at Ladies of Code Paris and QueerJS, wishing to have more and more
          folks from underrepresented groups joining and staying in tech.
        </p>
        <br />
        <p>
          I use this blog to play with web technologies and to share what I learn in the process.
        </p>
      </main>
    </>
  )
}

export default About