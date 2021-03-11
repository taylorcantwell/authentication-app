import { authAction } from '../slices/authSlice';
import { saveState } from '../util/localStorage';
import axios from 'axios';

const googleAuthClickHandle = async () => {
    try {
        const res = await axios({
            method: 'get',
            url: '  http://localhost:4000/auth/google',
        });
    } catch (err) {
        console.log(err);
    }
};

const formSubmit = async (data) => {
    try {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:4000/auth/register',
            data: data,
        });

        // if (response.data.error === 'User already exists') {
        //     updateErrorMessage('User already exists');
        // }

        //! dispatch auth action to grab auth state and token, and save to local storage

        const authInfo = {
            userInfo: response.data.data.user,
            token: response.data.token,
            authorized: response.data.authorized,
        };

        saveState('token', authInfo.token);
        saveState('userInfo', authInfo.userInfo);
        saveState('authorized', authInfo.authorized);

        //!redirect user to profile page
        // setTimeout(() => {
        //     setRedirectOnLogin(true);
        // }, 1500);
        // setTimeout(() => {
        //     dispatch(authAction(authInfo));
        // }, 1500);
    } catch (error) {
        console.log('catch triggered');
    }
};

export { formSubmit };
