import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
});


const postSlice = createSlice({
  name: "post",
  initialState: {
    isLoading: false,
    data: null,
    isError: false
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending , (state, action) => {
        state.isLoading = true;
      });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPosts.rejected , (state, action) => {
        state.isError = true;
        console.log("error !", action.payload);
      });
    
  },
});

export default postSlice.reducer;
