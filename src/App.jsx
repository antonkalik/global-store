import "./App.css";
import { Header } from "./components/Header/index.jsx";
import { Body } from "./components/Body/index.jsx";
import { Shares } from "./components/Shares/index.jsx";
import { Footer } from "./components/Footer/index.jsx";
import { Store } from "./store";
import { initialState } from "./store/initialState";

function App() {
  console.log("App updated");
  Store.init(initialState);

  return (
    <div>
      <Header />
      <Body />
      <Shares />
      <button
        onClick={() =>
          Store.setState((prevStore) => {
            const newShare = {
              symbol: "XRP",
              price: 1.27472,
            };
            const share = prevStore.details.shares.find(
              (share) => share.symbol === newShare.symbol
            );
            if (!share) {
              return {
                ...prevStore,
                details: {
                  ...prevStore.details,
                  shares: [...prevStore.details.shares, newShare],
                },
              };
            } else {
              return prevStore;
            }
          })
        }
      >
        Update Shares From App
      </button>
      <Footer />
    </div>
  );
}

export default App;
