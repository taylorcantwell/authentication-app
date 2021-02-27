import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: 'editing',
    initialState: {
        editing: false,
    },
    reducers: {
        isEditing(state, action) {
            state.editing = !state.editing;
        },
    },
});

export default profileSlice.reducer;
export const { isEditing } = profileSlice.actions;
