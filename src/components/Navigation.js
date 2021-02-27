import React from 'react';
import styled, { css } from 'styled-components';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupIcon from '@material-ui/icons/Group';

const Container = styled.div`
    position: absolute;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 12px;
    right: 7%;
    top: 10%;
    width: 188px;
    height: 174px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    @media only screen and (min-width: 1000px) {
    }
`;

const Section = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    flex-basis: 25%;
    cursor: pointer;
    border-radius: 8px;

    ${(props) =>
        props.active &&
        css`
            background: #f2f2f2;
        `}
`;

const Divider = styled.div`
    border: 1px solid #e0e0e0;
`;

const Text = styled.p`
    margin-left: 10px;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: -0.035em;
    color: #4f4f4f;
`;

const Navigation = () => {
    return (
        <Container>
            <Section active>
                <AccountCircleIcon />
                <Text>My Profile</Text>
            </Section>
            <Section>
                <GroupIcon />
                <Text>Group Chat</Text>
            </Section>
            <Divider />
            <Section style={{ color: '#EB5757' }}>
                <ExitToAppIcon />
                <Text style={{ color: '#EB5757' }}>Logout</Text>
            </Section>
        </Container>
    );
};

export default Navigation;
