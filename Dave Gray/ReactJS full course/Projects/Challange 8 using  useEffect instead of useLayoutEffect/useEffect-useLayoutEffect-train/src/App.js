
/* The application will include the following  :
   - using the [useLayoutEffect] instead of using the [useEffect] to allow the displaying as synchronous effect of useLayoutEffect inner codes       
*/

// A] Importings section  :   
import { useState, useLayoutEffect, useRef } from 'react';
import './App.css';

function App() {

  // B] Define  several states to be used into the script    :  
  // 1- Define the number stae to be used as the useLayoutEffect dependenccy : 
  const [number, setNumber] = useState(0);

  // 2- Define ref variable to be assgned inside a section element :   
  const sectionRef = useRef();

  // 3- Define the state of sectino style with initial  valiue of empty object :  
  const [sectionStyle, setSectionStyle] = useState({});
  // -------------------------------------

  // C]  Define a {useLayoutEffect} callback function of setting the style according to [number] as it's dependency :  
  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 500);

    // Define expensive  function to allow vision of the changing of useLayoutEffect  :    
    for (let i = 0; i <= 100000000; i++) {
      if (i === 100000000) setSectionStyle({ paddingTop: `${random}px` })
    }

  }, [number])
  //  ------------------------------------------------
  
  
  return (
    <main className="App" >
      <section style={sectionStyle} ref={sectionRef}  >
        <button onClick={() => setNumber(number + 1)} >  + </button>
      </section>

      <p>  {number}   </p>

      <br />
      <br />

    </main>
  );
}

export default App;

