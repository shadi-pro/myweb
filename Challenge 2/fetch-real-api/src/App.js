
/* The main home page of the application , that will include the following components :
  1-  [Form] => include 3 buttons of each categorry of the given api url        
  2-  [Table] => include the main detailed data of gotten items state  [mapped item component] to be used as data container     
*/
 
import { useState, useEffect } from 'react';


// Importing main parent components  : 
import Form from './Form.js';
import Table from './Table.js';

import './App.css';

function App() {

  // Define a variable of  api url to be used to call the desired api url provider   :   
  const URL_API = 'https://jsonplaceholder.typicode.com/';


  // Define a state to set the request type value :     
  const [reqType, setReqType] = useState('users');


  // Define a [data container] state of the array of items to be used as container of obtained data from the api url : 
  const [items, setItems] = useState([]);


  // Define the useEffect hook to deal with data from the given api url  + and assign the [reqType] state as a useEffect hook main dependency :
  useEffect(() => {
    
    /* Define the function responsible for : 
      1- Connect with defined Api url using fetch() method with given api [main fixed url + sub dynamic ]  
      2- Calling data from the given connected Api url  
      3- Assign the obtained data inside the defiend [data container] state
      4- Catching Error incase of not responding conoection and display the error text 
    */
    
    const fetchItems = async () => {
      try {

        // Define a varialbe of the connecting with given api url [main api url  + sub api url] :
        const response = await fetch(`${URL_API}${reqType}`);

        // Define a varialbe of getting data from the given api url :
        const data = await response.json();

        // Testing displaying data form the given api   :
        console.log(data);
        
        // Setting the items state by obtained data from the  given api url :  
        setItems(data);

      } catch (err) {
        console.log(err);
      } 
    }

    // Executing the defined function above {fetchItems()} to be able to work inside the useEffect hook  :
    fetchItems();

  }, [reqType])

  
  return (
    <div className="App">

      <Form
        reqType={reqType}
        setReqType={setReqType}
      />

      <Table  items={items}   /> 

    </div>
  );
}

export default App;
