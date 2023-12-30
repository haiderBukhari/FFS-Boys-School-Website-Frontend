import {configureStore} from "@reduxjs/toolkit"
import useDataReducer from "../Interface/userDataSlice"

const store = configureStore({
    reducer: {
        userData: useDataReducer
    }
})

export default store;