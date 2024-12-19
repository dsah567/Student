import { createSlice } from "@reduxjs/toolkit";

let initial= async (url)=>{
    let res = await fetch(url);
    let data = await res.json();
    return data;
}


const initialState ={
    data :await initial("http://localhost:8000/students").then(res=>res).catch(err => err)
}

const studentSlice = createSlice({
    name: 'studentData',
    initialState,
    reducers:{
        addStudent : (state, action)=>{

        },
        deleteStudent : (state, action)=>{

        },
    }
});

export const {addStudent,deleteStudent} = studentSlice.actions;
export default studentSlice.reducer;