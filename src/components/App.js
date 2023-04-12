import React from "react";
import { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [appClassSelection, setAppClassSelection] = useState(false);
  const appClass = appClassSelection ? "App dark" : "App light";
  const buttonText = appClassSelection ? "Light Mode" : "Dark Mode";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => setAppClassSelection(!appClassSelection)}>
          {buttonText}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
