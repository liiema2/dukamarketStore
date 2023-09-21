
import { useDispatch,useSelector } from "react-redux";
import { addItem,removeItem } from "../redux/addYouCart/marketStore";
import { useState } from 'react';


const useCrud=()=>{


 const shop=useSelector((state)=>state.shopping);
  const dispatch =useDispatch()
  
 const handleAddItem=(item)=>{
    dispatch(addItem(item));
   
 }
 const handleRemoveItem=(id)=>{
   dispatch(removeItem (id));
   
  
 

 };
 
 return{shop,handleAddItem,handleRemoveItem};
}

export default useCrud;

