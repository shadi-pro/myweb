
/* The application about using   {useMemo} hook  in application that including  expensive function   , and will include the following  :
  -  This app will be by default act as slow app performance due to depending on  the default states [that will re-render the whole by eahc change in its value ]   
  -  Testing using the {useMemo}  & {useCallback}  hooks in enhancing the app performance and responding   
*/

import { useState, useEffect, useCallback, useMemo } from 'react';
import './App.css';


function App() {

  // A] Define several expensive functions     : 
  // 1- Define an expensive function -> will be stored using the {useCallback} hook [to store the whole function] , with using empty dependencies  :
  const fib = useCallback((n) => {
    return (
      n <= 1 ? n : fib(n - 1) + fib(n - 2)
    )
  }, []
  )

  // 2- Define a Normal expensive functional variable that returning a single array value with inner big looping   : 
  const getArray = () => {
    for (let i = 0; i < 1000000000; i++) {
    }
    return ['Shadi', 'Sayed ']
  }
  // ------------------------------------------------

  // B] Define several states to be called and used inside the main return : 
  // 1-  Define state to be called inside the component :    
  const [userNumber, setUserNumber] = useState('');

  // 2-  Define state  to be called inside the component         :    
  const [randomInput, setRandomInput] = useState('');

  // 3-  Define state of functional variable that using the  defined fib() function using the  {useMemo} to memorize the value [ with using [userNumber] & [fib] as its dependecies  ] :    
  const fibNumber = useMemo( () => fib(userNumber), [userNumber, fib]);

  // 4- Storing the Defined value of [Expensive array : getArray] functional variable by using the {useMemo} to memorize the value [ with using empty [] dependecies  ] :    
  const  myArray = useMemo( () => getArray() , []);
  // --------------------------------------------------------
  
  // C] Define [useEffect] hooks that clling and using the defined [expensive array varilbe] as it's dependencies   :
  // 1- Define a [useEffect] hook that using the defined useMemo expensive  array varilbe : 
  useEffect(() => {
    console.log('new array  ');
  }, [myArray])


  // 2- Define [useEffect] hook that using the defined useMemo expensive variable    : 
  useEffect(() => {
    console.log('new number ');
  }, [fibNumber])


  return (
    <main className="App">
      <label  > Fibonacci Function :    </label>
      <input
        type='number'
        placeholder='insert value '
        value={userNumber}
        onChange={(e) => setUserNumber(e.target.value)}
      />
      <p> {fibNumber || '---'}  </p>

      <br />

      <label> Random Input :   {randomInput}  </label>
      <input
        type='text'
        placeholder='insert random value '
        value={randomInput}
        onChange={(e) => setRandomInput(e.target.value)}
      />
      <p> {randomInput} </p>

    </main>
  );
}

export default App;
