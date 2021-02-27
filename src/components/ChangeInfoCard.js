import React from 'react';
import styled from 'styled-components';
import { isEditing } from '../slices/profileSlice';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useDispatch } from 'react-redux';

//! maybe put header outside to App so it doesn't have to rerender

const BackButton = styled.button`
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.035em;
    color: #2d9cdb;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    outline: none;
    cursor: pointer;
    margin-left: auto;

    &:hover,
    &:focus {
        filter: brightness(0.9);
    }

    @media only screen and (min-width: 1000px) {
        position: absolute;
        top: -5%;
    }
`;

export const SecondaryTitle = styled.h2`
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -0.035em;
`;

export const Title = styled(SecondaryTitle)`
    text-align: center;
    @media only screen and (min-width: 1000px) {
        font-size: 24px;
        text-align: left;
    }
`;

export const Subtitle = styled.p`
    text-align: center;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.035em;
    margin-bottom: 40px;
    color: #828282;
    @media only screen and (min-width: 1000px) {
        font-size: 13px;
        text-align: left;
    }
`;

export const Container = styled.div`
    position: relative;
    /* background: #fafafb; */
    border-radius: 12px;
    padding: 20px;

    @media only screen and (min-width: 1000px) {
        max-width: 1440px;
        margin: 0 auto;
    }
`;

export const ContentContainer = styled.form`
    @media only screen and (min-width: 1000px) {
        position: relative;
        border: 1px solid #e0e0e0;
        box-sizing: border-box;
        border-radius: 12px;
        max-width: 845.91px;
        margin: 0 auto;
        padding: 40px;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

const PhotoSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 32px;
`;

const Photo = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('https://source.unsplash.com/random');
    background-size: cover;
    border-radius: 8px;
    width: 72px;
    height: 72px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover,
    &:focus {
        filter: brightness(1.2);
    }
`;

const PhotoText = styled.p`
    text-transform: uppercase;
    font-weight: 500;
    font-size: 13px;
    letter-spacing: -0.035em;
    color: #828282;
    cursor: pointer;
`;

const Label = styled.p`
    font-weight: 500;
    font-size: 13px;
    letter-spacing: -0.035em;
    color: #4f4f4f;
    margin-bottom: 3px;
`;

const Input = styled.input`
    background-color: transparent;
    width: 100%;
    border: 1px solid #828282;
    border-radius: 12px;
    margin-bottom: 24px;
    height: 52px;
    padding: 20px;
    outline: none;
    &::placeholder {
        font-weight: 500;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: -0.035em;
        color: #bdbdbd;
    }

    @media only screen and (min-width: 1000px) {
        width: 50%;
    }
`;

const BioInput = styled(Input)`
    height: 91.58px;
    resize: none;
`;

const Savebutton = styled.button`
    padding: 7px 25px;
    background: #2f80ed;
    border-radius: 8px;
    width: 100%;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;

    &:hover,
    &:focus {
        filter: brightness(0.9);
    }

    @media only screen and (min-width: 1000px) {
        width: auto;
        display: block;
    }
`;

const Footer = styled.div`
    display: flexbox;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;

    @media only screen and (min-width: 1000px) {
        position: absolute;
        bottom: -7%;
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

const ChangeInfoCard = () => {
    const dispatch = useDispatch();
    const backButtonClickHandle = () => {
        dispatch(isEditing());
    };
    return (
        <Container>
            <ContentContainer>
                <Title>Change Info</Title>
                <Subtitle>Changes will be reflected on every service</Subtitle>
                <PhotoSection>
                    <Photo>
                        <PhotoCameraIcon style={{ color: 'white' }} />
                    </Photo>
                    <PhotoText>Change Photo</PhotoText>
                    <BackButton onClick={backButtonClickHandle}>
                        <ArrowBackIosIcon style={{ fontSize: '18px' }} /> Back
                    </BackButton>
                </PhotoSection>
                <Label for="name">Name</Label>
                <Input id="name" placeholder="Name" value=""></Input>
                <Label for="bio">Bio</Label>
                <BioInput id="bio" placeholder="Bio" as="textarea" value="" />
                <Label for="phone">Phone</Label>
                <Input
                    id="phone"
                    placeholder="Enter your phone..."
                    value=""
                ></Input>
                <Label for="email">Email</Label>
                <Input id="email" placeholder="Email" value=""></Input>
                <Label for="password">Password</Label>
                <Input id="password" placeholder="Password" value=""></Input>
                <Savebutton>Save</Savebutton>
                <Footer>
                    <FooterText>
                        created by <span>Taylor Cantwell</span>
                    </FooterText>
                    <FooterText>devChallenges.io</FooterText>
                </Footer>
            </ContentContainer>
        </Container>
    );
};

export default ChangeInfoCard;
