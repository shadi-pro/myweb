//

import React from "react";

// Importing the icons [ FaTrashAlt ] to be used isndede the script   :
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item , handleClick, handleDelete}) => {
  return (
    <li className="item" id={item.id}>
      <input
        checked={item.checked}
        type="checkbox"
        onChange={() => handleClick(item.id)}
      />
      <label
        style={
          item.checked
            ? { color: "blue", textDecoration: "line-through" }
            : null
        }
        onDoubleClick={() => handleClick(item.id)}
      >
        {item.item}
      </label>

      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;
