import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import createPostService from "./createPostService";

const initialState = {
    posts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}
 //create new goal
export const createPost = createAsyncThunk('posts/create', async (postData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await createPostService.createPost(postData,
             token
             )
    } catch (error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
})

export const createPostSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    reset: (state) => initialState   
    
    },
    extraReducers: (builder) => {
        builder
        .addCase(createPost.pending, (state) => {
            state.isLoading = true
        } )
        .addCase(createPost.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess =  true
            state.posts.push(action.payload)
        })
        .addCase(createPost.rejected, (state, action) => {
            state.isLoading = false
            state.isError =  true
            state.message = (action.payload)
        })
    }
})

export const {reset} = createPostSlice.actions
export default createPostSlice.reducer