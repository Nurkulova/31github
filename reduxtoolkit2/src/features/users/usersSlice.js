import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'First Name'},
    { id: '1', name: 'Second Name'},
    { id: '2', name: 'Third Name'},
]


const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer