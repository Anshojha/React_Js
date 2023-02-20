export const initialState = {
  basket: [],
};

// Selector to add the price
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        console.log("This is if ", action);
        newBasket.splice(index, 1);
      } else {
        console.log("This is else ", action);
        console.warn(
          `can't remove product (id : ${action.id}) as it is not found in the bakset`
        );
      }
      return {
        ...state,
        bakset: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
