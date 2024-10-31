
// {App.js} => {Table.js } => {Row.js} => {Cell.js}     

/* a single piece of item's row as a cell of data , include :
   -  [cellData] prop : will be assinged inside the it's parent component [Row] -> as the stringify value of the object parmater [value]   
*/

import React from 'react'


const Cell = ({ cellData }) => {
  return (
    <td>
      {/* using only  the data of [cellData] not [key] due to we use it wihtin mapping (as a public prop , not a component prop )  and not need it here */}
      {cellData}
    </td>
  )
}

export default Cell;

