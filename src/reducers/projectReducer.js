const initialState = {
    cartCount: 0,
  };
  
  const projectReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartCount: state.cartCount + 1,
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartCount: state.cartCount - 1,
        };
      default:
        return state;
    }
  };
  
  export default projectReducer;
  