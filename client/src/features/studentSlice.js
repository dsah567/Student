import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const fetchStudents = createAsyncThunk(
  "studentData/fetchStudents",
  async (url, { rejectWithValue }) => {
    try {
      const response = await fetch(url, {
                                        method: 'GET',
                                        credentials: 'include',
                                        headers: {
                                        'Content-Type': 'application/json',
                                        },
                                    });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const studentSlice = createSlice({
  name: "studentData",
  initialState: {
    data: [],
    status: "idle", 
    error: null,
  },
  reducers: {
    addStudent: (state, action) => {
      state.data.push(action.payload);
    },
    addStud: (state, action) => {
        // Add a new student with an automatically generated ID
        const newStudent = { id: nanoid(), ...action.payload };
        state.data.push(newStudent);
      },
    deleteStudent: (state, action) => {
      state.data = state.data.filter(student => student.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { addStudent,addStud, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;