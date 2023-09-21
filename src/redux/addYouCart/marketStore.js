import { createSlice } from "@reduxjs/toolkit";

const initialState = [
   
  ]; 

const shoppingCart = createSlice({
  name: 'shopping',
  initialState, 
  reducers: {
    addItem(state, action) {
      const newItem = {
        id: state.length > 0 ? Math.max(...state.map(item => item.id)) + 1 : 1,
        name: action.payload.name,
        price: action.payload.price,
        img: action.payload.image,
        idProduct: action.payload.id,
       
      };
      return [...state, newItem];
      
    },
  
    removeItem(state, action) {
      const itemId = action.payload; // Lấy id sản phẩm cần xóa từ payload
      return state.filter(item => item.id !== itemId);
    },
   
    
  },
});

export const { addItem, editItem, removeItem } = shoppingCart.actions;
export default shoppingCart.reducer;
