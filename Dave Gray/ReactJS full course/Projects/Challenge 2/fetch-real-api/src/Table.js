
// {App.js} => {Table.js } => {Row.js} => {Cell.js}     

/* Table reusable component  [of in-depth data formated displayer ]  :
- The direct parent component for  this component is  -> [App.js] : 
- This component  will recie the main data conetainer {itmes} from it's parent [App.js]   
- [props] -> {items} is the main data container to be assigned inside the main app by useEffect hook react by using fetch()
  - [return] -> a {table} JSX  element -> {tbody} JSX element - > include a mapping of {items} prop of {Row} reusable component imported      
*/


import React from 'react' ;
import Row from './Row.js' ;


const Table = ({ items }) => {
  return (
    <div className='table-container' >
      <table>
        <tbody>
          {items.map((item) =>
            <Row key={item.id} item={item} />
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table ;  
