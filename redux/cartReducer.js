import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    price: 0,
    fav: []
  },
  reducers: {
    addToCart: (state, action) => {
      if(state.items.length>0){
        let tempItems = []
        tempItems = state.items.filter(item => item.id === action.payload.id);
        if(tempItems.length===0){
            state.items.push(action.payload)
            state.price += action.payload.price
        }
      }
      else{
        state.items.push(action.payload)
        state.price += action.payload.price
      }
      // console.log(state.items, 'cart items');
    },
    removeFromCart: (state, action) => {
        const itemIdToRemove = action.payload.id
        state.price -= action.payload.price
        state.items = state.items.filter(item => item.id !== itemIdToRemove);
      },
    addSameItemToCart: (state, action) => {
        state.price += action.payload.price
    },
    removeSameItemFromCart: (state, action) => {
        state.price -= action.payload.price
    },

    addToFav: (state, action) => {
        if(state.fav.length>0){
          let tempFav = []
          tempFav = state.fav.filter(item => item.id === action.payload.id);
          if(tempFav.length===0){
              state.fav.push(action.payload)
              
          }
        }
        else{
          state.fav.push(action.payload)
          
        }
        
      },
      
      removeFromFav: (state, action) => {
          const itemIdToRemove = action.payload.id
        
          state.fav = state.fav.filter(item => item.id !== itemIdToRemove);
        },

  },
});

export const { addToCart, removeFromCart, addSameItemToCart, removeSameItemFromCart, addToFav, removeFromFav } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export default cartSlice.reducer;