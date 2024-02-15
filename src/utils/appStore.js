import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { configure } from "@testing-library/react";

const appStore = configureStore(
    {
        reducer:{
            user: userReducer,
        }
    }
)

export default appStore;