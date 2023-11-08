import { createStore } from 'redux';

const initialState = {
  favoriteProducts: [],
};

const favoriteProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE_PRODUCT':
      if (!state.favoriteProducts.some((product) => product.id === action.product.id)) {
        return {
          ...state,
          favoriteProducts: [...state.favoriteProducts, action.product],
        };
      }
      return state;
    case 'DELETE_FAVORITE_PRODUCT':
      return {
        ...state,
        favoriteProducts: state.favoriteProducts.filter((product) => product.id !== action.product.id),
      };
    default:
      return state;
  }
};

const store = createStore(favoriteProductsReducer);

export default store;
