import { useSelector, setState } from "../../store";

export const Body = () => {
  const name = useSelector((state) => state.name);
  const age = useSelector((state) => state.age);

  console.log("Body updated");

  return (
    <div className="body">
      <h1>Body</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button
        onClick={() =>
          setState((prevStore) => {
            return {
              ...prevStore,
              name: "Javier",
              age: 99,
            };
          })
        }
      >
        Update Name And Age from Body
      </button>
    </div>
  );
};
