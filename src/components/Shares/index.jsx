import "./Shares.css";
import { ShareItem } from "./components/ShareItem";
import { setState, useSelector } from "../../store";

export const Shares = () => {
  const { shares } = useSelector((state) => state.details);

  console.log("All Shares updated");

  const onUpdate = (symbol) => {
    setState((prevStore) => {
      return {
        ...prevStore,
        details: {
          ...prevStore.details,
          shares: prevStore.details.shares.map((share) => {
            if (share.symbol === symbol) {
              return {
                ...share,
                price: share.price + 1,
              };
            } else {
              return share;
            }
          }),
        },
      };
    });
  };

  return (
    <div className="shares">
      <h1>Shares</h1>
      <ul>
        {shares.map(({ symbol, price }, index) => {
          return (
            <ShareItem
              key={symbol + index}
              onUpdate={onUpdate}
              symbol={symbol}
              price={price}
              id={index + 1}
            />
          );
        })}
      </ul>
    </div>
  );
};
