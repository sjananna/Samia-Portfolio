import React from 'react'
import '../../pages/style.css';
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Sales Professional",
          "Administrative Assistant",
          "Full Stack Developer",
          "Product Expert",
        ],
        autoStart: true,
        loop: true, 
        deleteSpeed: 50,
      }}
    />
  )
}

export default Text