import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./Types";

const incrementCounter = () => ({
  type: INCREMENT_COUNTER,
});

const decrementCounter = () => ({
  type: DECREMENT_COUNTER,
});

export default {
  incrementCounter,
  decrementCounter,
};
