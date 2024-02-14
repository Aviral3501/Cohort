import {createSlice ,configureStore} from "@reduxjs/toolkit";

//for authentication
const authSlice = createSlice({
    name:"auth",
    initialState:{userr:"",isLoggedIn:false},
    reducers:{
        login(state){
            state.isLoggedIn=true;
        },
        logout(state){
            state.isLoggedIn=false;
        }
    },
});

export const authActions = authSlice.actions;

export const store = configureStore({
    reducer:authSlice.reducer,
})