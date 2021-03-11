import { createSlice } from '@reduxjs/toolkit';
import { loadState } from '../util/localStorage';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authorized: loadState('authorized'),
        token: loadState('token'),
        expiresAt: null,
        userInfo: loadState('userInfo'),
    },
    reducers: {
        authAction(state, action) {
            state.authorized = action.payload.authorized;
            state.token = action.payload.token;
            // state.expiresAt = action.payload.expiresAt;
            state.userInfo = action.payload.userInfo;
        },
    },
});

export default authSlice.reducer;
export const { authAction } = authSlice.actions;
