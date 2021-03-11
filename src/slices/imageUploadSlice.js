import { createSlice } from '@reduxjs/toolkit';

export const imageUploadSlice = createSlice({
    name: 'imageUpload',
    initialState: {
        uploading: false,
        uploadSuccessful: null,
        uploadFail: null,
        errorMessage: '',
        publicID: '',
        imageLoaded: null,
    },
    reducers: {
        uploading: (state, action) => {
            state.uploading = action.payload.uploading;
        },
        finishedUploading: (state, action) => {
            state.uploading = action.payload.uploading;
            state.uploadSuccessful = action.payload.uploadSuccessful;
            state.publicID = action.payload.publicID;
        },
        uploadError: (state, action) => {
            state.uploadFail = action.payload.uploadFail;
            state.errorMessage = action.payload.errorMessage;
        },
        imageLoaded: (state) => {
            state.imageLoaded = true;
        },
    },
});

export const {
    uploading,
    finishedUploading,
    uploadError,
    imageLoaded,
} = imageUploadSlice.actions;

export default imageUploadSlice.reducer;
