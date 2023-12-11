import { Store, useSelector } from "../../store";

export const Shares = () => {
  const { shares } = useSelector((state) => state.details);

  console.log("Shares updated");

  return (
    <div className="shares">
      <h1>Shares</h1>
      <ul>
        {shares.map(({ symbol, price }) => {
          return (
            <li key={price + symbol}>
              {symbol} : {price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
