import { createSlice } from '@reduxjs/toolkit';
const searchSlice = createSlice({
    name: 'search',
    initialState: {
        
    },
    reducers: {
        setSearch(state, action) {
            Object.assign(state, action.payload);
        }
    }
})

export const{setSearch} = searchSlice.actions;
export default searchSlice.reducer;