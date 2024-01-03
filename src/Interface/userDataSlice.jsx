import { createSlice } from "@reduxjs/toolkit";

const storedData = JSON.parse(localStorage.getItem("userData"));

const initialState = storedData || {
    id: null,
    title: "",
    name: "",
    email: "",
    contactNumber: "",
    assignedClasses: [],
    isPasswordChanged: false,
    isUserInfoChanged: false
};

const userDataSlice = createSlice({
    name: "UserData",
    initialState,
    reducers: {
        addUserData: (state, action) => {
            localStorage.setItem("userData", JSON.stringify(action.payload));
            return {
                id: action.payload.id,
                title: action.payload.title,
                name: action.payload.name,
                email: action.payload.email,
                contactNumber: action.payload.contactNumber,
                assignedClasses: action.payload.assignedClasses,
                isPasswordChanged: action.payload.isPasswordChanged,
                isUserInfoChanged: action.payload.isUserInfoChanged
            };
        },
        removeUserData: (state, action) => {
            localStorage.removeItem('userData');
            return {
                id: null,
                title: "",
                name: "",
                email: "",
                contactNumber: "",
                assignedClasses: [],
                isPasswordChanged: false,
                isUserInfoChanged: false
            }
        }
    }
});

export default userDataSlice.reducer;
export const { addUserData, removeUserData } = userDataSlice.actions;
