import axios from "axios";

const getallpizza = () =>async (disp)=>{
    disp({type:"getpizza"})
try {
    const res=await axios.get("http://localhost:4000/pizzas")
    disp({type:"pizzasuccess",payload:res.data})
     

} catch (error) {
    disp({type:"pizzafail",payload:error})
    
}


}

const increment = () => {
    return {
        type: "increment"
    }
}

const decrement = () => {

    return {
        type: "increment"
    }

}



export { increment, decrement, getallpizza }