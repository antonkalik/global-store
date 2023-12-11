import { useState, useEffect } from "react";

export const useSyncExternalStore = (
  subscribe,
  selector,
  getSnapshot = selector
) => {
  const [state, setState] = useState(getSnapshot());

  useEffect(() => {
    function handleStateChange() {
      setState(getSnapshot());
    }

    subscribe(handleStateChange);

    return () => {
      subscribe(() => {});
    };
  }, [subscribe, getSnapshot]);

  return selector(state);
};
