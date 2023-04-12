import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [liClass, setLiClass] = useState(true);
  const liClassName = liClass ? "" : "in-cart";
  const [inCart, setInCart] = useState(true);
  const cartStatus = inCart ? "Add to Cart" : "Remove From Cart";

  function handleClick() {
    setLiClass(!liClass);
    setInCart(!inCart);
  }

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">
        {cartStatus}
      </button>
    </li>
  );
}

export default Item;
