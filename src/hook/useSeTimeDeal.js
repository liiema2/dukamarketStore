
import { useSelector } from "react-redux";
const useSetTimeDeal=()=>{
 const shop=useSelector((state)=>state.shopping);

 const handleAddItem=(item)=>{
  
 }
 const handleRemoveItem=(item)=>{

 }
 return{shop};
}

export default useSetTimeDeal;