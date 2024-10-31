
// {App.js} => {Table.js } => {Row.js} => {Cell.js}     

/* a Single [Row] element of the item data inside the table  , include :
  - This component will return the recieved single data entry {item} and stringify it into key and value for each single dsata item as a  imported component [ Cell ]
  - {item} prop :  will be used inside the parent component [Table] 
  - {Cell} imported child element  :  will be used inside here   
  - {return} => include a html [tr] element with  mapping through the object of entries of sent prop [item] with arguments [key, value] -> to return a imported child component {Cell} with assingning the values of the both [key, value] as follwoing : 
    -- key : the mapping key value 
    -- cellData : the stringified values of returned [value] of object entries of (item) prop to be assineed inside the direct parent component [Row]           
  */


import React from 'react' ;
import Cell from './Cell' ; 

const Row = ({item}) => {
  return (
    <tr>
      {
        // Mapping through the [item] imported prop  => as an object , by destructuring it as a key and value :
        Object.entries(item).map( ([key, value]) =>    {
          return (
            // we will use direct json stringify due to the data not include more inner objects  -> [key : is a public prop of mappinng , but the cellData: is a component prop ]  : 
            <Cell key={key}  cellData = {JSON.stringify(value)}   /> 
          ) 
        }
      )}
    </tr>
  )
}

export default Row ; 


