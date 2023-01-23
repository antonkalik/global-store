import { useSyncExternalStore } from "react";
import { initialState } from "./initialState.js";

function createStore() {
  let state = initialState;
  let listeners = new Set();
  let isInitialized = false;

  return {
    init: (initState) => {
      if (!isInitialized) {
        state = initState;
      }
    },
    setState(callback) {
      state = callback(state);
      listeners.forEach((listener) => listener(state));
    },
    useSelector(selector) {
      return useSyncExternalStore(
        (listener) => {
          listeners.add(listener);
          return () => listeners.delete(listener);
        },
        () => selector(state),
        () => selector(state)
      );
    },
  };
}

const store = createStore();

export default store;
export const { setState, useSelector } = store;
