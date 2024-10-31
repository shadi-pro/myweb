// The [customWindowSize] custom hook , responsible for the next procedures :
  /*    
    1- full responive to the window size changing by dipslaying  the current resolution width icon
    2- handling the resize windoe event upon the defined functions and return the [windowSize] afeter being hanlded     
  */ 
 

  // a] main importings for the custom hook : 
  import {useEffect , useState } from  'react' ; 


  // b] main custom hook fuction definition ;
  const useWindowSize = () => {
  
    // b/1]  Define a state with value of the  window coordination object properties , with   assign the  initial value with object of undfgiend values of  both of the window's [widht & height] :
    const [ windowSize , setWindowSize ] = useState({
        width: undefined ,
        height : undefined 
    })
  
    // b/2]  Define the main useEfffect function that cnotiantinig  the  main settings of the custom hook  : 
    useEffect(() => {
      
      // b/2/1] Define the inner fuction of handling window size changing  :
      const handleResize = () => {  
        //  Setting the [windowSize] state by the current coordination of the window :    
        setWindowSize({
          width : window.innerWidth ,
          height : window.innerHeight  
        })      
      }
    
    // b/2/2] Executing the {sizeHandle} witinni the useEffect hook  :
    handleResize() ;
    
    // b/2/3] Adding a 'resize' in [addEventListener] of window object   to be executed inside the [window DOM] ,  with assigning the defind {sizeHandle} as its parmeter - to be executed while event running  - :
      window.addEventListener('resize' , handleResize )

     
    // b/2/4] {main useEffect callback function return } => a callback function of the : Removing a 'resize' in from  window object to be removed from cach memerory of [window DOM] ,  with assigning the defind {sizeHandle} as its parmeter - to be  not assigned by the old value by the next render   - :
      return () =>  window.removeEventListener('resize' , handleResize )
  
  },  []  )   

  // b/3] main return of the custom hook function => [returning the main size value after being handled and set using the previous steps  ]   :    
  return windowSize ;

} 

export default  useWindowSize ;
 
