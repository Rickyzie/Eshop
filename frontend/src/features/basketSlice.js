import { createSlice ,configureStore  } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
  name: 'baseket',
  initialState: {
    cartItems:[]
  },
  reducers: {
    onAdd :(state,action) => {
      console.log("onAdd")
      const exist = state.cartItems.find((x) => x.id === action.payload.id);
      if (exist) {
        state.cartItems=state.cartItems.map((x) =>
            x.id === action.payload.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        
      } else {
        state.cartItems=[...state.cartItems, { ...action.payload, qty: 1 }];
      }
    },
    onRemove :(state,action) => {
      const exist = state.cartItems.find((x) => x.id === action.payload.id);
      if(exist.qty===1){
        state.cartItems=state.cartItems.filter((x)=>x.id!==exist.id)
      }else{
        state.cartItems=state.cartItems.map((x) =>
        x.id === action.payload.id ? { ...exist, qty: exist.qty - 1 } : x)
      }
      state.cartItems=state.cartItems.map((x) =>
            x.id === action.payload.id ? { ...exist, qty: exist.qty - 1 } : x
      )
    }
  },
})
const store = configureStore({
  reducer: basketSlice.reducer
});
// Action creators are generated for each case reducer function
export const { onAdd,onRemove } = basketSlice.actions
export const selectBasket = (state) => state.cartItems
export default store;