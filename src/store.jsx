import { configureStore } from "@reduxjs/toolkit";
import inputslice from "./inputslice";

const store=configureStore({
    reducer:{
        str:inputslice
    }
})
export default store