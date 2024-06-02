// import rootreducer from "./reducer/index";
// import { createStore ,applyMiddleware} from "redux";
// //import { createStore ,applyMiddleware} from "redux";
// import {thunk}   from 'redux-thunk';


// import {composeWithDevTools} from "@redux-devtools-extension"

// const store=createStore(rootreducer,applyMiddleware(thunk))

//const store=createStore(rootreducer,composeWithDevTools(applyMiddleware(thunk))

// ,applyMiddleware(thunk)
// ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


// export default store;


import {configureStore} from "@reduxjs/toolkit"
 import cartReducer from "./slice/cartReducer"
 import registerReducer from "./slice/registerReducer";
 import loginReducer from "./slice/loginReducer";
 import  pizzaReducer  from "./slice/pizza";
 import showCart from "./slice/showCart";

 import cartslice from './slice/cart'

const store= configureStore({
    reducer:{
        addcart:cartReducer,
        register:registerReducer,
        login:loginReducer,
        pizza:pizzaReducer,
        show:showCart,
        cart:cartslice
       
    }
})
export default store;