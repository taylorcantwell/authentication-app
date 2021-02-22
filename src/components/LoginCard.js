import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Devchallenges } from '../images/devchallenges.svg';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import { ReactComponent as FacebookIcon } from '../images/Facebook.svg';
import { ReactComponent as GoogleIcon } from '../images/Google.svg';
import { ReactComponent as GithubIcon } from '../images/Github.svg';
import { ReactComponent as TwitterIcon } from '../images/Facebook.svg';

const Container = styled.div`
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    border-radius: 24px;
    width: 473.83px;
    height: 634.3px;
    padding: 48px 58px;
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
    margin-bottom: 22px;
`;

const LoginLink = styled.a`
    cursor: pointer;
    color: #0000ee;
`;

const Footer = styled.div`
    display: flexbox;
    justify-content: space-between;
    width: 473.83px;
    padding: 12px 0;
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
    return (
        <>
            <Container>
                <Logo />
                <Title>Join thousands of learners from around the world </Title>
                <Paragraph>
                    Master web development by making real-life projects. There
                    are multiple paths for you to choose
                </Paragraph>
                <InputContainer>
                    <InputIconContainer for="email">
                        <MailIcon style={{ color: '#828282' }} />
                    </InputIconContainer>
                    <EmailInput
                        id="email"
                        placeholder="Email"
                        type="text"
                    ></EmailInput>
                </InputContainer>
                <InputContainer>
                    <InputIconContainer for="password">
                        <LockIcon style={{ color: '#828282' }} />
                    </InputIconContainer>
                    <PasswordInput
                        placeholder="Password"
                        id="password"
                        type="text"
                    ></PasswordInput>
                </InputContainer>

                <SubmitButton>Start coding now </SubmitButton>
                <Info>or continue with these social profile</Info>
                <SocalIconContainer>
                    <GoogleIcon />
                    <FacebookIcon />
                    <TwitterIcon />
                    <GithubIcon />
                </SocalIconContainer>
                <Info>
                    Already a member? <LoginLink>Login</LoginLink>
                </Info>
            </Container>

            <Footer>
                <FooterText>
                    created by <span>Taylor Cantwell</span>
                </FooterText>
                <FooterText>devChallenges.io</FooterText>
            </Footer>
        </>
    );
};

export default LoginCard;
