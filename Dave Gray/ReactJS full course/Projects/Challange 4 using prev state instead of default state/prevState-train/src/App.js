
/* The application  about {counter app}  , and will include the following  :
  -  Testing using the {prevState} || {prev}  hook instead of using the default state  
  -  Benfit of  using the {prevState} || {prev}   to allow several resetting in one patch of code 
*/

import { useState } from 'react';

import './App.css';

function App() {
  // A] Define different types of states to be  reset by both of using state method  &  {prevState} || {prev} method   :

  // 1- Define a single variable state : 
  const [count, setCount] = useState(0);

  // 2- Define a array variable state : 
  const [arrValues, setArrValues] = useState([]);

  // 3- Define a object variable state : 
  const [objValues, setObjValues] = useState({ first: "shadi", second: "sayed" });

  // B] Define several function of Re-setting values of the different types of defined states  using by using both of  [state method]  &  [{prevState} || {prev}] method   :
  // 1- resetting the single variable state  :
  // Re-setting state by using the default method of state :
  const setCounterAddDef = () => {
    setCount(count + 1)
  }
  // Re-setting state by using the [prev state] method of state :
  const setCounterAddPrev = () => {
    setCount(prev => prev + 1)
  }

  // Re-setting state by using the default method of state :
  const setCounterSubDef = () => {
    setCount(count - 1)
  }
  // Re-setting state by using the [prev state] method of state :
  const setCounterSubPrev = () => {
    setCount(prev => prev - 1)
  }
  // --------------------------------------------

  // 2- resetting the array variable state :
  // Re-setting array state by using the default method :
  const setArrDef = (newVal) => {
    setArrValues([...arrValues, newVal])
  }

  // Re-setting array state by using the  [prev state] method of state :
  const setArrPrev = (newVal) => {
    setArrValues(prev => ([...prev, newVal]))
  }
  // ---------------------------------------------

  // 3- resetting the object variable state  :
  //  Re-setting object state by using the default method :
  const setObjDef = () => {
    setObjValues({ ...objValues, last: 'mohammed' });
  }

  //  Re-setting object state by using the [prev state] method :
  const setObjPrev = () => {
    setObjValues(prev => ({ ...prev, last: 'mohammed' }));
  }

  return (
    <div className="App">
      <section>
        <h1> Single state value : {count}   </h1>
        <h1> Array state value : {arrValues}   </h1>
        <h1> Object state value : {objValues}   </h1>

        <div className='row' >
          <button onClick={setCounterAddDef}> + by using default method </button>
          <button onClick={setCounterSubDef}> - by using default method </button>
          <button onClick={setCounterAddPrev}> + by using prev state method </button>
          <button onClick={setCounterSubPrev}> - by using prev state method </button>
          <button onClick={ prevState => 0 }> reset </button>
        </div>

        <div className='row' >
          <button onClick={setArrDef([1,2,3])}> Display new value of array using default method </button>
          <button onClick={setArrPrev([1,2,3])}> Display new value of array using prev state method </button>

        </div>

        <div className='row' >
          <button onClick={setObjDef}> Display new value of object using default method </button>
          <button onClick={setObjPrev}> Display new value of object using Prev state method </button>

        </div>


      </section>




    </div>
  );
}

export default App;
