import { combineReducers, configureStore } from "@reduxjs/toolkit"
import DataReducer from "./slices/dataUser";
export default configureStore({
    reducer: combineReducers({
        data: DataReducer
    })
})