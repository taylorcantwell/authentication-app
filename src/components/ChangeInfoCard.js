import { ErrorMessage } from '@hookform/error-message';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import formValidationOptions from '../util/formValidationOptions';
import OnDrop from './OnDrop';

const BackButton = styled(Link)`
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
    const [error, updateErrorMessage] = useState(null);
    const { register, handleSubmit, errors } = useForm();
    const onSubmitSuccess = async (data) => {
        console.log(data);
        // const response = await axios({
        //     method: 'post',
        //     url: 'http://localhost:4000/auth/update',
        //     data: { data },
        // });
    };

    return (
        <>
            <Container>
                <ContentContainer onSubmit={handleSubmit(onSubmitSuccess)}>
                    <Title>Change Info</Title>
                    <Subtitle>
                        Changes will be reflected on every service
                    </Subtitle>
                    <OnDrop />
                    <BackButton to="/profile">
                        <ArrowBackIosIcon style={{ fontSize: '18px' }} /> Back
                    </BackButton>
                    <ErrorMessage
                        style={{ color: 'red', fontSize: '14px' }}
                        errors={errors}
                        name="name"
                        as="p"
                    />
                    <Label for="name">Name</Label>
                    <Input
                        id="name"
                        placeholder="Name"
                        name="name"
                        type="text"
                        ref={register(formValidationOptions.name)}
                        onChange={() => updateErrorMessage(null)}
                    ></Input>
                    <ErrorMessage
                        style={{ color: 'red', fontSize: '14px' }}
                        errors={errors}
                        name="bio"
                        as="p"
                    />
                    <Label for="bio">Bio</Label>
                    <BioInput
                        id="bio"
                        placeholder="Bio"
                        name="bio"
                        as="textarea"
                        type="textarea"
                        ref={register(formValidationOptions.bio)}
                        onChange={() => updateErrorMessage(null)}
                    />
                    <ErrorMessage
                        style={{ color: 'red', fontSize: '14px' }}
                        errors={errors}
                        name="phone"
                        as="p"
                    />
                    <Label for="phone">Phone</Label>
                    <Input
                        id="phone"
                        placeholder="Enter your phone..."
                        name="phone"
                        type="text"
                        ref={register(formValidationOptions.phone)}
                        onChange={() => updateErrorMessage(null)}
                    ></Input>
                    <ErrorMessage
                        style={{ color: 'red', fontSize: '14px' }}
                        errors={errors}
                        name="emailUpdate"
                        as="p"
                    />
                    <Label for="emailUpdate">Email</Label>
                    <Input
                        id="emailUpdate"
                        placeholder="Email"
                        name="emailUpdate"
                        type="text"
                        ref={register(formValidationOptions.emailUpdate)}
                        onChange={() => updateErrorMessage(null)}
                    ></Input>
                    <ErrorMessage
                        style={{ color: 'red', fontSize: '14px' }}
                        errors={errors}
                        name="passwordUpdate"
                        as="p"
                    />
                    <Label for="passwordUpdate">Password</Label>
                    <Input
                        id="passwordUpdate"
                        placeholder="Password"
                        name="passwordUpdate"
                        type="text"
                        ref={register(formValidationOptions.passwordUpdate)}
                        onChange={() => updateErrorMessage(null)}
                    ></Input>
                    <Savebutton type="submit">Save</Savebutton>
                    <Footer>
                        <FooterText>
                            created by <span>Taylor Cantwell</span>
                        </FooterText>
                        <FooterText>devChallenges.io</FooterText>
                    </Footer>
                </ContentContainer>
            </Container>
        </>
    );
};

export default ChangeInfoCard;
