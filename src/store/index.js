import { useSyncExternalStore } from "./useSyncExternalStore";

export class Store {
  static listeners = new Set();
  static isInitialized = false;
  static state = null;

  static init(initState) {
    console.log("initState Store", initState);
    if (!Store.isInitialized) {
      Store.state = initState;
      Store.isInitialized = true;
    }
  }

  static setState(callback) {
    Store.state = callback(Store.state);
    Store.listeners.forEach((listener) => listener(Store.state));
  }
}

export const useSelector = (selector) => {
  return useSyncExternalStore(
    (listener) => {
      Store.listeners.add(listener);
      return () => Store.listeners.delete(listener);
    },
    () => selector(Store.state),
    () => selector(Store.state)
  );
};
