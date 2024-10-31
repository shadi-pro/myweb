/* The Single Item to be used as mapping through the selected category from the api url :
    this represent the single item data container to json stringified data recieved from the  prop  [item] that will be assinged within the List parent component
    
*/


import React from 'react'

const ListItem = ({item }) => {
  return (
    <li>
       {JSON.stringify(item)}
    </li>
  )
}

export default ListItem ;