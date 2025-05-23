import React, {useState} from "react";

function Item({ name, category }) {

  const [value, setUp] = useState(false)

  const ifInCard = value ? "in-cart" : ""

  
  function ifAddedToCard () {
    return setUp(ifInCard => !ifInCard)
  }

  function textButton () {
    function i () {
    return value ? "Remove From Cart" : "Add to Cart"
    }
    return i ()
  }


  return (
    <li className={ifInCard}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"
      
      onClick={ifAddedToCard}
      
    >{textButton ()}</button>
    </li>
  );
}

export default Item;
