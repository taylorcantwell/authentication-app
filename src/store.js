import { configureStore } from '@reduxjs/toolkit';
import imageUploadSlice from './slices/imageUploadSlice';
import authSlice from './slices/authSlice';

export default configureStore({
    reducer: {
        authorization: authSlice,
        imageUpload: imageUploadSlice,
    },
});
