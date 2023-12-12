import { useSyncExternalStore } from "./useSyncExternalStore";
import { initialState } from "./initialState";

export function createStore() {
  let listeners = new Set();
  let state = initialState;

  return {
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
      );
    },
  };
}

export const { setState, useSelector } = createStore();
