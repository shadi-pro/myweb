/* Content component , including  :
  Importing components :  
    1- {Lesson56} =>  including default props [ Not assigned props]    
    2- {Lesson78} => 
      -- including default assigned props       
      -- including defined array of objects prop [ items  ]      
      -- including defined  (2) functions props [ handleClick + handleDelete]      


    3- {Lesson9}  including =>   :
      --default props [ overriding Assigning one prop & and Not assigned the other ] 
      -- prop to be assinged by defined variable extention       

    4-  {ColorChangerApp} including   => 
      -- inner children components [Square , Input ]

*/

import React, { useState, useEffect } from "react";

// Importing the  lessons components :
import Lesson7 from "./Lesson7";
import Lesson56 from "./Lesson56";
import Lesson9 from "./Lesson9";
import ColorChangerApp from "./ColorChangerApp";

// importing the  defined function of api request hndling  :
    import apiRequest from "./apiRequest";

const Content = () => {
  //  Define a varible of the [API url] to deal with it using [fetch()]  :
  const API_URL = "http://localhost:3500/items";

  // a- Define state of the main list items to be used as main [datasource] OR an empty array {when teh localstorage array is being deleted by the user or for the firt visitor   }  as a dynamic data from the localStorage (instead of using static array ) :
  const [items, setItems] = useState([]);
  // JSON.parse(localStorage.getItem("shoppinglist")) ||

  // b- Define a new state variable of the fetched error :
  const [fetchError, setFetchError] = useState(null);

  // c- Define a new state variable of isLoading message  :
  const [isLoading, setIsLoading] = useState(true);

  // d- Define a state variable for  search fuctionality  :
  const [search, setSearch] = useState("");
  // -------------------------------------------

  // e-  Define a state variable to be used for storing the new item as paramter inside each functions [  [handleClick] & [handleDelete]   -] :
  const [newItem, setNewItem] = useState("");
  // ------------------------------------------------------------------

  // b- Define useEffect function to be used in executing codes for the first loading only [] + adding the fetching function inside    ->   :
  useEffect(() => {
    // Define a fuction of [fetching/reading]  for data from given api => [to be used only for the first load ]   :
    const fetchItems = async () => {
      try {
        // 1- Define a variable of awaited fetching from the assinged given [ API_URL] :
        const response = await fetch(API_URL);

        // 2- Checking if there are an error of fetching response [error of not getting data] -> before the reciving data inside the [listItems]  => this code will be executed not the [catch error] :
        if (!response.ok) throw Error("Did not receive expected data ");

        // Define a variable of the responsed data after converting into  a json format           :
        const listItems = await response.json();

        // Setting the obtained json data into the defiend state variable [usgin the setter function ]    :
        setItems(listItems);

        // Handling the custom error message using the defined error state [setFetchError()] to set 'null' value instead of the Current  obtained :
        setFetchError(null);
      } catch (err) {
        //  Printing the error message  [this error will not be displayed unless there is  NO data response from api and then  there is  an error to catched  :
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    // Call the defined previous function of [fetchItems()] directly =>  to be called inside the {useEffect} hook => calling the async [fetchItmes] insde the {setTimer()}  to simulate the slow  loading api and show the loading message :
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 3000);
  }, []);
  //  ---------------------------------------

  // b- [Switching Clicking of item list ] =>  Define Handling click function to handle the clicked input [more dynamically] :
  const handleClick =  async (id) => {
    
    // 1- Define a variable  (of the  mapped items) from the given array after modifying the checked state :
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    
    // Adding the new value of the  [list items] into the defined  state of [items] after being updated (change checked property after checking an input ) :
    setItems(listItems);
    
    //  Define the new single of item inside a new variable [to be used inside the object of the updateOptions 'as one of the array element' of the  items'  -> body ] :
    const myItem = items.filter((item) => item.id === id);
    
    //  Define an object of  options  of hanlding {updating/patching} crud opertation [changing  one of item property ] the list item using  :
    const updateOptions = {
      method: "PATCH",
      heaedrs: {
        "Content-Type": "application/json",
      },
      
      // Assign the updated value of a certain item's property as one of array with a specific property  [myItem[0].checked -> represent the checked prpety value of the first and only firlered item of item array ] :
      body: JSON.stringify({ checked : myItem[0].checked }),
    };

    // Define a variable of updating item property [=> to be used as the first parameter 'as a litter string value' of the called apiRequest imported function]  : 
    const reqUrl =  `${API_URL}/${id}` ;

    // Define a variable of [Posting curd operation] calling the imported apiRequest function with  only Define a variable of updating item property [not all listitems] +  object of {updateOptions}       :
    const result = await apiRequest( reqUrl , updateOptions) ;

    // Checking if there is a value of variable of [posting crud operation] is already existed   =>  and assign it as the valiue of the {fetchError} state : 
     if(result) setFetchError(result);

  };
  // ------------------------------------------------------------

  // c- [Deletion function of the items inside items list ] => Define the function of deleting the item from the list   :
  const handleDelete =  async  (id) => {
    // 1- Creating a new array of item - of non selected items - to be stored as new array of items (withou the selected item to be abandon from the new array ) :
    const listItems = items.filter((item) => item.id !== id);

    // Adding the new value of the [list items] into the defined state of [items] after being updated ( remove an input form the list  ) :
    setItems(listItems);

  // Define a variable of getting the item to be deleted : 
    const reqUrl = `${API_URL}/${id}`  ;

  // Define the  object of  deletion CRUD operation  : 
    const deleteOptions  = {
      method  : 'DELETE'
    } 

  // Define a result variable of [deletion curd opertaion]  :
    const result =  await apiRequest(reqUrl  , deleteOptions) ;

  // Checking if there is a value of variable of deletion operation crud is already existed   =>  and assign it as the valiue of the {fetchError} state     :
    if(result) setFetchError(result) ;

  };
  // ----------------------------------------------------------------

  // Define a function of adding the new item id to modified items list object accroding to it :
  const addItem = async (item) => {
    
    // Getting the new item id with increament (or by  (1) if the list is  emtpy ) [according to index , after checking of the existance of the main items] :
    // const id = items.length ? items[items.length - 1].id + 1 : 1;
    const id  = items.length ? items[items.length - 1].id + 1  : 1;
     
    // const id = items.length ? toString(parseInt(items[items.length - 1].id) + 1) : 1;

    // Define a variable of the new single  item , to set it's as  parameters value of body's stringify parmater of the object  postOptions ]   :
    const myNewItem = { id  , checked: false, item };

    // Define a temprory array of Adding the previous defind new item element [myNewItem] , to the current array (with spreaing  opperator) state of [itemslist] :
    const listItems = [...items, myNewItem];

    setItems(listItems);

    // Define a object of main parameters requried for handling [posting/updating] crud operation -> [ Sending data to the api datahase    ] :
    const postOptions = {
      method: "POST",
      heaedrs: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };

    // Define a varaible result that using both [api url] &  [postOptions] defiend paramters :
    const result = await apiRequest(API_URL, postOptions);

    // Checking if the result is returned by a data form the asssinged api url , and then assign its value inside the fetchError setter  function -> whcih will display inside the JSX element :
    if (result) setFetchError(result);
  };
  //    ---------------------------------------

  //  e- [Handling Function of Submiting the {newItem : which the paramter that had been used inside the indentical function and stored by new array of the itemslist of either {handleClick} || {handleDelete}      }      ] :
  const handleSubmit = (e) => {
    //  stop the default procedureas of the handling form of [reloading] to provide the next steps   :
    e.preventDefault();

    // return the default procedure incase of existed new item value :
    if (!newItem) return;

    // Calling the defined function of [addItem()] with using its parameter by {(newItem) : which the value of the new item array - after handling click or delete }  :
    addItem(newItem);

    // setting empty value of the new item after procesing the previous steps :
    setNewItem("");
  };
  //   -------------------------------------------

  return (
    <main className="App-header" style={{ margin: "10px" }}>
      <h1> Content Component </h1>

      <Lesson56 />

      {fetchError ? (
        <p style={{ color: "red" }}> {`Lesson789: Error: ${fetchError}`} </p>
      ) : isLoading ? (
        <p style={{ color: "green", fontSize: "30px" }}> Loading data... </p>
      ) : (
        <Lesson7
          title="Listing and keys"
          subTitle="Listing and keys"
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          newItem={newItem}
          setItems={setItems}
          setNewItem={setNewItem}
          handleClick={handleClick}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
          search={search}
          setSearch={setSearch}
        />
      )}

      <Lesson9
        title="Lesson9"
        subTitle=" Props and Props drilling"
        count={items.length}
      />

      <ColorChangerApp />
    </main>
  );
};

export default Content;
