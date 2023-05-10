import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chat-slice";
import themeSlice from "./theme-slice";

const store = configureStore({
    reducer: {
        chat : chatSlice.reducer , 
        theme : themeSlice.reducer ,
    }
});

export default store;