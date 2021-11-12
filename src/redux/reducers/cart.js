const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const obj = {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id], action.payload],
        },
      };
      return obj;
    }
    default:
      return state;
  }
};

export default cart;
