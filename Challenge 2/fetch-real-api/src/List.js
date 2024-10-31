/* The list component  be used inside the App , will include   :
  -- displaying a list of mapped item component {ListItem} which will be imoprted 

*/

import ListItem from './ListItem';

 const List = ({ items }) => {

  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  )
}


export default List;

