import { configureStore } from '@reduxjs/toolkit';
import profileSlice from './slices/profileSlice';

export default configureStore({
    reducer: {
        profile: profileSlice,
    },
});
