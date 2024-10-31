
/* The application will include the following  :
   1-   Testing using the {useRef} hook to  create  a [ Renders count application]   
   2-   Testing using the {useRef} hook to  create  a [setting focus into a input application]   
   3-   Testing using the {useRef} hook to  create  a [Timer application]   
 */

// A] Importings section  :   
import { useState, useRef } from 'react';
import './App.css';


function App() {
  // B] States Definitions section  :
  // 1- Define states to be used inside the input within the main App return :
  const [randomInput, setRandomInput] = useState('');

  // 2- Define a state of seconds variable to represent the actual timer seconds :
  const [seconds, setSeconds] = useState(0);
  // ----------------------------------------------------


  // C] Refs Variables definintions   :
  // 1- Define a variable of a useRef hook with initial value of [0]    :
  const renders = useRef(0);

  // 2- Define a referential variable of a useRef hook  assingnable when ever if  being called inside the {ref} attriubte :
  const inpuRef = useRef('');

  // 3- Define a referential variable of timer value  [to be used wihtin timer functions setters   ] :
  const timerId = useRef(0);
  // -------------------------------------------------------

  // D] Hanlding and main Tasks  Functions Defintions  : 
  // 1- Define a handling click function of [access the assigned ref input and set the focus on it] :    
  const handleClick = () => {
    // Access and set [focus()] property :
    inpuRef.current.focus();
  }

  // 2- [handling renders counting] :  Define a handling change  function of [ increase the referenced varialbe each page is being renderd ] :      
  const handleChange = (e) => {
    // a- setting the defined state by the click  :
    setRandomInput(e.target.value);

    // b- Increasing the [renders] varialbe by [1]   :
    renders.current++;
  }


  // 3- [startTimer]  handling  function    :   
  const startTimer = () => {
    // setting a {setInterval} to the current value of [timerId]     : 
    timerId.current = setInterval(() => {

      // a- increasing the [renders] variable :   
      renders.current++;

      // b- inceasing the [seconds] state by using the [prev] keyword  :
      setSeconds(prev => prev + 1);

    }, 1000)
  }


  // 4- [stop timer]   Define a handling  function of the  :   
  const stopTimer = () => {
    // clearing the timer by using the [clearInterval] method :  
    clearInterval(timerId.current);

    //  resetting  the current value of ref variable [timerId]  by [0] :
    timerId.current = 0;
  }


  // 5- [reset timer]  Define a handling function of the :   
  const resetTimer = () => {
    // a-  calling  the  [stoptimer] function  : 
    stopTimer();

    // b- Checking if there are value of the  [seconds] state :  
    if (seconds) {
      // 1- resetting the seconds state by [0] value :
      setSeconds(0);

      // 2- increasing the renders [as the resetTimer is render count] :
      renders.current++;
    }
  }

  return (
    <div className="App">

      <input
        ref={inpuRef}
        type='text'
        placeholder='insert value'
        value={randomInput}
        onChange={handleChange}
      />

      <button onClick={handleClick} >
        Focus
      </button>

      <section>
        <button onClick={startTimer} > Start Timer    </button>
        <button onClick={stopTimer} > Stop Timer      </button>
        <button onClick={resetTimer} > Reset Timer    </button>
      </section>


      <p>  Page rendering Count :  {renders.current}   </p>
      <p>  {randomInput}  </p>
      <p>  Seconds  :  {seconds}   </p>
    </div>
  );
}

export default App;
