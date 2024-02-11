import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../store'

 interface SideMenuState{
    collapse: boolean
}

const initialState:SideMenuState={
    collapse:false
}

export const sideMenuSlice=createSlice({
    name:"sideMenu",
    initialState,
    reducers:{ 
        toggle:state => { state.collapse = !state.collapse},

}
})

export const {toggle}= sideMenuSlice.actions
// export const useSideMenuSelect=(state:RootState)=> state.sideMenu.collapse;
export default sideMenuSlice.reducer