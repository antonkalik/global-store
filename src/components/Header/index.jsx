import { setState }  from "../../store";

export const Header = () => {
  console.log("Header updated");

  return (
    <div>
      <p>Header</p>
      <button
        onClick={() =>
            setState((prevStore) => {
            return {
              ...prevStore,
              name: "Michael",
              age: 99,
            };
          })
        }
      >
        Update Name And Age from Header
      </button>
    </div>
  );
};
