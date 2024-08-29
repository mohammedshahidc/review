import {createSlice} from '@reduxjs/toolkit'

const initialState={
    value:''
}

const inputslice=createSlice({
    name:'str',
    initialState:initialState,
    reducers:{
        addname:(state,action)=>{
            state.value=action.payload
        }
    }
})
export const {addname}=inputslice.actions
export default inputslice.reducer