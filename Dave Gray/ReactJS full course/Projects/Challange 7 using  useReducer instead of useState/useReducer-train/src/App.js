
/* The application will include the following  :
   - using the [useReducer] instead of using the [useState] to define and manage several states  
*/

// A] Importings section  :   
import { useReducer } from 'react';
import './App.css';


/*  B]  Define a reducer function to be used insdie the main useReducer  :  
  -- state  => represnt the public state       
  -- action => represnt the public acition to be used as it's type as switched values 
  -- case   =>
    --- switched value : represent the action name to be used to call this action whtin the dispatch                
    --- returned  value : represent the action process with using seprerator operator of state  , and may include several kinds : 
      1- process on the same previous value of the state -> must using the 'state.' keyword to call this state name 
      2- process on the toggling previous value of the state -> must using the '!state.' keyword to call this state name 
      3- process  assign a value into state -> must using the 'action.payload' keyword to call this state name
  */


/* C]  Define the  main {reducer} to be used isnide the main function of  {useReducer}  , with next propreties  => 
   1-  will use serperator operator of the state [...state] as desturcturing before the required state for best practise 
   2-  will use the state.stateName => incase of using the previous value of this state witin the reutrn of this action           

*/
const reducer = (state, action) => {
  switch (action.type) {

    case 'increment':
      return { ...state, count: state.count + 1 }

    case 'decrement':
      return { ...state, count: state.count - 1 }

    case 'tgColor':
      return { ...state, color: !state.color }

    case 'newUserInput':
      return { ...state, userInput: action.payload }

    default:
      throw new Error();
  }
}

function App() {
  /* D]  Define  [useReducer]   as following :
      -- state =>  represent any state               
      -- dispatch   =>  represent any action will be sent by the reducer , and being used to call the defined  action 
      -- useReducer  =>  the imported hook                
      -- reducer  =>  represent the defined upper function of handling all states actions                    
      --  {}   => object of initial values of all states   
  */
  const [state, dispatch] = useReducer(reducer, { count: 0, userInput: '', color: false });

 
  // E]  using and pasing through  defined states and it's actions        :  
  return (
    <div className="App" style={{ color: state.color ? 'green' : 'red' }}   >
      <input
        type='text'
        placeholder='insert value'
        value={state.userInput}
        onChange={(e) => dispatch({ type: 'newUserInput', payload: e.target.value })}
      />

      <section>
        <button onClick={(() => dispatch({ type: 'increment' }))} >  + </button>
        <button onClick={(() => dispatch({ type: 'decrement' }))} > -  </button>
        <button onClick={(() => dispatch({ type: 'tgColor' }))} > Color </button>
      </section>
      <br />

      <p>  {state.count}   </p>
      <br />
      <br />

      <p>  {state.userInput}  </p>

    </div>
  );
}

export default App;
