import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../Features/Cakes/CakeSlice';
import iceCreamReducer from '../Features/IceCream/IceCreamSlice'

const store = configureStore({
    reducer :{
        cake: cakeReducer,
        iceCream : iceCreamReducer
    }
})

export default store;
