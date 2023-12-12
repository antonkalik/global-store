import { useState } from "react";

export function useSyncExternalStore(subscribe, getSnapshot) {
  let currentState = getSnapshot();
  const [state, setState] = useState(currentState);

  const handleChange = () => {
    const nextState = getSnapshot();

    if (nextState !== currentState) {
      currentState = nextState;
      setState(nextState);
    }
  };

  subscribe(handleChange);

  return state;
}
