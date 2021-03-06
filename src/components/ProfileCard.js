import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

export const SecondaryTitle = styled.h2`
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -0.035em;
`;

export const Title = styled(SecondaryTitle)`
    text-align: center;
    @media only screen and (min-width: 1000px) {
        font-size: 36px;
    }
`;

export const Subtitle = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.035em;
    text-align: center;
    margin-bottom: 40px;
    @media only screen and (min-width: 1000px) {
        font-size: 18px;
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

export const InfoContainer = styled.div`
    @media only screen and (min-width: 1000px) {
        border: 1px solid #e0e0e0;
        box-sizing: border-box;
        border-radius: 12px;
        max-width: 845.91px;
        margin: 0 auto;
        padding-top: 28px;
        position: relative;

        div:nth-child(6) {
            border: none;
        }
    }
`;

const ProfileSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    @media only screen and (min-width: 1000px) {
        padding: 0 48px;
    }
`;

const ProfileSectionCol1 = styled.div``;

const Info = styled.p`
    font-size: 13px;
    line-height: 18px;
    letter-spacing: -0.035em;
    color: #828282;
    margin-right: 20%;
    @media only screen and (min-width: 1000px) {
        margin-right: 0%;
    }
`;

const EditButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95.34px;
    height: 38px;
    border: 1px solid #828282;
    border-radius: 12px;
    font-size: 16px;
    letter-spacing: -0.035em;
    color: #828282;
    background-color: transparent;
    text-decoration: none;
    cursor: pointer;
`;

const Section = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    border-bottom: 1px solid #e0e0e0;
    @media only screen and (min-width: 1000px) {
        padding: 0 48px;
    }
`;
const SectionPhoto = styled(Section)`
    @media only screen and (min-width: 1000px) {
        border-top: 1px solid #e0e0e0;
    }
`;

const Option = styled.p`
    font-size: 13px;
    color: #bdbdbd;
    text-transform: uppercase;
`;

/// !have to add a container around the image to control size and position easier
const PhotoContainer = styled.div`
    @media only screen and (min-width: 1000px) {
        /* flex-basis: 66%; */
    }
`;

const OptionEntryPhoto = styled.div`
    background: url('https://source.unsplash.com/random');
    background-size: cover;
    border-radius: 8px;
    width: 72px;
    height: 72px;
`;

const OptionEntry = styled.p`
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.035em;
    color: #333333;
    text-overflow: ellipsis;
    @media only screen and (min-width: 1000px) {
        /* flex-basis: 66%; */
        font-size: 18px;
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

const ProfileCard = () => {
    // const [redirectOnEdit, setRedirectOnEdit] = useState(false);
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.authorization);

    return (
        <>
            <Container>
                <Title>Personal info</Title>
                <Subtitle>Basic info, like your name and photo</Subtitle>
                <InfoContainer>
                    <ProfileSection>
                        <ProfileSectionCol1>
                            <SecondaryTitle>Profile</SecondaryTitle>
                            <Info>
                                Some info may be visible to other people
                            </Info>
                        </ProfileSectionCol1>
                        <EditButton to="profile-edit">Edit</EditButton>
                    </ProfileSection>
                    <SectionPhoto>
                        <Option>Photo</Option>
                        <PhotoContainer>
                            <OptionEntryPhoto />
                        </PhotoContainer>
                    </SectionPhoto>
                    <Section>
                        <Option>Name</Option>
                        <OptionEntry>
                            {authState.userInfo.name || 'Not specified'}
                        </OptionEntry>
                    </Section>
                    <Section>
                        <Option>Bio</Option>
                        <OptionEntry>
                            {authState.userInfo.bio || 'Not specified'}
                        </OptionEntry>
                    </Section>
                    <Section>
                        <Option>Email</Option>
                        <OptionEntry>{authState.userInfo.email}</OptionEntry>
                    </Section>
                    <Section>
                        <Option>Password</Option>
                        <OptionEntry>{authState.userInfo.password}</OptionEntry>
                    </Section>
                    <Footer>
                        <FooterText>
                            created by <span>Taylor Cantwell</span>
                        </FooterText>
                        <FooterText>devChallenges.io</FooterText>
                    </Footer>
                </InfoContainer>
            </Container>
        </>
    );
};

export default ProfileCard;
