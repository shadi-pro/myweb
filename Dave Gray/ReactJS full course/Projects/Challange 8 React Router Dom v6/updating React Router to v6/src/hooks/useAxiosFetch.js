
// The custom hook function of the [useAxiosFetch] ,   responsible for the next procedures :
/*    
    1-  Handling fetching data from api using [axios] library - instead of using  the default method    - , wiht (3) main states resulted  :
      -- [data , setData]              => state of returning data from the  given api       
      -- [fetchError , setFetchError ] => state of returning error  from the  given api   
      -- [isLoading   , setIsLoading ] => state of while loading  data from the given api   
*/

// a] main required importings  :
import { useState, useEffect } from 'react';
import axios from 'axios';


// b] main function of custom hook with recieving parameter  of  (dataUrl) , wiht using this paramter as the inner useEffect dependency   : 
const useAxiosFetch = (dataUrl) => {

  //  b/1] Define the main api varaibles statues [3 main probable states]  :  
  //  (a) state of returned data as an empty array :
  const [data, setData] = useState([]);

  // (b) state of catched error : 
  const [fetchError, setFetchError] = useState(null);

  // (c) state of is loading state :
  const [isLoading, setIsLoading] = useState(false);


  // b/2]  Define the main useEffect function :
  useEffect(() => {
    // b/2/1] Define a checking variable [based on the true ]  => as sign of the rendering (entering the useEffect) :      
    const isMounted = true;

    // b/2/2] Define a variable of API token source after cancellation current value -> to be used later for get the token value from the assigned api   :
    const source = axios.CancelToken.source();

    //  b/2/3] Define the inner function of handling [fetching data] from the api , asccording to the gotten parameter of the main custom hook function : 
    const fetchData = async (url) => {

      //  Assign the {isLoading} state [as one of fetching status]  by the [true] value (to activate this status  as loading data )   :    
      setIsLoading(true);

      try {
        // (a) Define a response of fetched data from given api url as a reiceved parameter from the main custom hook function : 
        const response = await axios.get(url, {
          cancelToken: source.token
        });

        //  (b) assign the value of the [data] state  with condional state of [isMounted] is 'true' :  
        if (isMounted) {
          setData(response.data);
          setFetchError(null);  // due we here are already got the data from the api [ fetch data status ] 
        } 

      } catch (err) {

        // using the condition check to getting steps of the catching error :  
        if (isMounted) {
          // (a) Assign value of the [fetchError] state  in case of  catching error : 
          setFetchError(err.message);

          // (b) Setting the value of  [data] state  by empty array  : 
          setData([]);   //  due we here are in the [catching error status]  
        }

      } finally {
        //  [after fetching] Resetting the [inLoading] by  the 'false' again(whether any of the statues acheived ) - witin (2  seconds for testing ) - with condintal rendering of the  [inMounted]  :
        // isMounted && isLoading(false);  // in case of direct action 
        isMounted &&
          setTimeout(() => {
            setIsLoading(false);
          }, 1500);
      }

    }

    //  b/2/3] calling the upper defined function {fetchData} of fetching data  with assgining the main recieved parameter of the main custom hook {dataUrl} to  pass it through :   
    fetchData(dataUrl);


    //  b/2/4] define cancelling the token api using a clean up function :   
    const cleanUp = () => {
      // 1- ReSetting the check variable by 'false'    :
      isMounted = false; 

      // 2- Cancelling the variable [source] token : 
      source.cancel();
    }

    // {useEffect return} Returning the upper defined clean up fuction {cleanUp} inside  the useEffect call back function as it's main return  :
    return cleanUp;

  }, [dataUrl])

  //  {custom hook return} Main return of custom hook function as {object  of all defined states } : 
  return { data, fetchError, isLoading }
}


// c] Export the main custom hook function :
export default useAxiosFetch;





