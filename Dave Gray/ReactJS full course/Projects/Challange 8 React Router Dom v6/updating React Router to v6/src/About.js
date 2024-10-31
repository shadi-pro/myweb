
// [orientation map ] :   {App} <- {About}   

// the [About] component -> [no props] :


import React from 'react' ;

const About = () => {
  return (
    <main  className= 'About' >
      <h2> About </h2>
      <p  style={{ marginTop: '1rem' }} > This is a Blog Testing react app </p>
    </main>
  )
}

export default About;