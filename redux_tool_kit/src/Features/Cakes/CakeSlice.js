import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numOfCake : 10
}

const CakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers : {
        ordered : (state) => {
            state.numOfCake--;
        },
        restocked : (state, action) => {
            state.numOfCake += action.payload
        }
    }
})

export const { ordered, restocked } = CakeSlice.actions;
export default CakeSlice.reducer;
