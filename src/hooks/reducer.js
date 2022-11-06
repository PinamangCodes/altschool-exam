export const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + 5;
      case "decrement":
        return state - 5;
      case "reset":
        return 0;
      case "set":
        return action.payload;
      default:
        return state;
    }
  };