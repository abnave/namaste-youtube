import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState:{
        isSidebarOpen : true,
        isMenuOpen : true,
    },
    reducers : {
        toggleMenu : (state) =>{
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu : (state)=>{
            state.isMenuOpen = false;
        },
        closeSideBar : (state) =>{
            state.isSidebarOpen = false;
        }
    }
})
export const {toggleMenu, closeMenu, closeSideBar} = appSlice.actions;
export default appSlice.reducer;