import React from "react";

export const ShareItem = React.memo(({ symbol, price, id, onUpdate }) => {
  console.log(`ShareItem ${id} updated`);

  return (
    <li key={price + symbol}>
      <p>
        {symbol} : {price}
      </p>
      <button
        type="button"
        onClick={() => {
          onUpdate(symbol);
        }}
      >
        Increase
      </button>
    </li>
  );
});
