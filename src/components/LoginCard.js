import { ErrorMessage } from '@hookform/error-message';
import LockIcon from '@material-ui/icons/Lock';
import MailIcon from '@material-ui/icons/Mail';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Devchallenges } from '../images/devchallenges.svg';
import { ReactComponent as FacebookIcon } from '../images/Facebook.svg';
import { ReactComponent as GithubIcon } from '../images/Github.svg';
import { ReactComponent as GoogleIcon } from '../images/Google.svg';
import { ReactComponent as TwitterIcon } from '../images/Twitter.svg';
import { authAction } from '../slices/authSlice';
import formValidationOptions from '../util/formValidationOptions';
import { saveState } from '../util/localStorage';
import Loader from './Loader';
import LoginToast, { loginToastHandle } from './toasts/LoginToast';

const Container = styled.div`
    position: relative;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    border-radius: 24px;
    width: 375px;
    min-height: 676px;
    padding: 17px 19px;

    @media only screen and (min-width: 1000px) {
        width: 473.83px;
        height: 634.3px;
        padding: 48px 58px;
    }
`;

const Logo = styled(Devchallenges)`
    margin-bottom: 27px;
`;

const Title = styled.h2`
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #333333;
    margin-bottom: 14.5px;
`;

const Paragraph = styled.p`
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 34px;
`;

const FormContainer = styled.form``;

const InputContainer = styled.div`
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    margin-bottom: 14.5px;
`;

//!Necessary so that when user clicks on the icons it redirects the focus to the inputs.
//!Probably easier to use positioning next time.

const InputIconContainer = styled.label`
    flex: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const EmailInput = styled.input`
    flex: 85%;
    border: none;
    height: 100%;
    outline: none;
    margin-right: 5px;
`;

const PasswordInput = styled(EmailInput)``;

const SubmitButton = styled.button`
    background: #2f80ed;
    border-radius: 8px;
    width: 100%;
    height: 38px;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
    border: none;
    margin-bottom: 31px;
    margin-top: 8px;
    position: relative;
`;

const Info = styled.p`
    font-size: 14px;
    color: #828282;
    text-align: center;
    margin-bottom: 22px;
`;

const SocalIconContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0 3rem;
    margin-bottom: 27px;
`;

const LoginLink = styled.a`
    cursor: pointer;
    color: #0000ee;
`;

const CustomErrorMessage = styled.p`
    color: red;
    text-align: center;
    font-size: 14px;
`;

const Footer = styled.div`
    display: flexbox;
    justify-content: space-between;
    width: 90%;
    bottom: 2%;
    position: absolute;

    @media only screen and (min-width: 1000px) {
        bottom: -5%;
        left: 0;
        width: 100%;
    }
`;

const FooterText = styled.p`
    font-size: 14px;
    color: #828282;

    span {
        font-weight: 600;
        text-decoration: underline;
    }
`;

const LoginCard = () => {
    const dispatch = useDispatch();
    const [loginLoading, setLoginLoading] = useState(null);
    const { register, handleSubmit, errors } = useForm();
    const [error, updateErrorMessage] = useState(null);
    const [isLoggingIn, updateLogin] = useState(null);
    const [redirectOnLogin, setRedirectOnLogin] = useState(false);

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

    const onSubmitSuccess = async (data) => {
        try {
            setLoginLoading(true);
            const response = await axios({
                method: 'post',
                url: 'http://localhost:4000/auth/register',
                data: data,
            });

            if (response.data.error === 'User already exists') {
                updateErrorMessage('User already exists');
            }

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
            setTimeout(() => {
                setRedirectOnLogin(true);
            }, 1500);
            setTimeout(() => {
                dispatch(authAction(authInfo));
            }, 1500);
        } catch (error) {
            setLoginLoading(false);
        }
    };

    return (
        <>
            {redirectOnLogin && <Redirect to="/profile" />}
            <Container>
                <LoginToast />
                <Logo />
                <Title>Join thousands of learners from around the world </Title>
                <Paragraph>
                    Master web development by making real-life projects. There
                    are multiple paths for you to choose
                </Paragraph>
                <FormContainer onSubmit={handleSubmit(onSubmitSuccess)}>
                    <ErrorMessage
                        style={{ color: 'red', fontSize: '14px' }}
                        errors={errors}
                        name="email"
                        as="p"
                    />
                    <InputContainer>
                        <InputIconContainer for="email">
                            <MailIcon style={{ color: '#828282' }} />
                        </InputIconContainer>
                        <EmailInput
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="email"
                            ref={register(formValidationOptions.email)}
                            onChange={() => updateErrorMessage(null)}
                        ></EmailInput>
                    </InputContainer>

                    <ErrorMessage
                        errors={errors}
                        name="password"
                        style={{ color: 'red', fontSize: '14px' }}
                        as="p"
                    />
                    <InputContainer>
                        <InputIconContainer for="password">
                            <LockIcon style={{ color: '#828282' }} />
                        </InputIconContainer>
                        <PasswordInput
                            placeholder="Password"
                            id="password"
                            name="password"
                            type="text"
                            ref={register(formValidationOptions.password)}
                            onChange={() => updateErrorMessage(null)}
                        ></PasswordInput>
                    </InputContainer>
                    {error && (
                        <CustomErrorMessage>
                            User already exists!
                        </CustomErrorMessage>
                    )}
                    <SubmitButton type="submit" onClick={loginToastHandle}>
                        {loginLoading && <Loader loginLoading={loginLoading} />}
                        {isLoggingIn ? 'Login' : 'Start coding now'}
                    </SubmitButton>
                </FormContainer>
                <Info>or continue with these social profile</Info>
                <SocalIconContainer>
                    <a onClick={googleAuthClickHandle}>
                        <GoogleIcon />
                    </a>
                    <FacebookIcon />
                    <TwitterIcon />
                    <GithubIcon />
                </SocalIconContainer>
                <Info>
                    {isLoggingIn ? '' : 'Already a member?'}
                    <LoginLink onClick={() => updateLogin(!isLoggingIn)}>
                        {isLoggingIn ? 'Register' : ' Login'}
                    </LoginLink>
                </Info>
                <Footer>
                    <FooterText>
                        created by <span>Taylor Cantwell</span>
                    </FooterText>
                    <FooterText>devChallenges.io</FooterText>
                </Footer>
            </Container>
        </>
    );
};

export default LoginCard;

export { Footer, FooterText };

