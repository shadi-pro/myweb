// AddItem for adding new item to the [ListItems] by using a Form    :  

import React from 'react'
import {FaPlus} from 'react-icons/fa'
import {useRef} from 'react'
 
const AddItem = ( {newItem , setNewItem , handleSubmit }  ) => {
  
  // using the imported hook of the useRef to defined the variable of the input element => and then will be assigned insdee teh ref attribute of the input element + onClick button [to make the focus return to the input after being clicked and adding a new element ]      :   
  const inputRef = useRef(); 
 
 
  return (
    <form  className='addForm' onSubmit={handleSubmit}  >
       <label 
        htmlFor='Add Item' 
       > 
          Add Item
       </label>
    
       <input  
          id='Add Item'
          type='text'
          placeholder='Add Item'
          ref={inputRef}
          autoFocus
          required 
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
       />

        <button 
          type='submit' 
          aria-label='Add Item'   
          onClick={()=> inputRef.current.focus() }   
        >
          <FaPlus   />
        </button>

    </form>
  )
}

export default AddItem