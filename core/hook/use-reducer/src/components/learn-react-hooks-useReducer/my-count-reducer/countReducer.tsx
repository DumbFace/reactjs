interface state {
  count: number;
}

interface action {
  type: "increment" | "decrement";
  payload: number;
}

export const countReducer = (state: state, action: action) => {
  const { type, payload } = action;
  switch (type) {
    case "increment":
      return {
        ...state,
        count: state.count + payload,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
};
