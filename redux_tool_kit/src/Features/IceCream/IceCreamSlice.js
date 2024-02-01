import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numOfIcecream : 20
}

const IceCreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers : {
        iceordered : (state) => {
            state.numOfIcecream--;
        },
        icerestocked : (state, action) => {
            state.numOfIcecream += action.payload
        }
    }
})

export const { iceordered, icerestocked } = IceCreamSlice.actions;
export default IceCreamSlice.reducer;
