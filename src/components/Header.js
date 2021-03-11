import React, { useState } from 'react';
import Navigation from './Navigation';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import styled from 'styled-components';
import { ReactComponent as Devchallenges } from '../images/devchallenges.svg';

const Name = styled.p`
    display: none;
    @media only screen and (min-width: 1000px) {
        display: block;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: -0.035em;
        color: #333333;
        margin-right: 19px;
        margin-left: 11px;
    }
`;

const Logo = styled(Devchallenges)`
    cursor: pointer;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    padding: 20px;
    @media only screen and (min-width: 1000px) {
        max-width: 1440px;
        margin: 0 auto;
    }
`;

const AvatarAndDropdownContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 8px;
`;

const Dropdown = styled.div`
    display: none;
    @media only screen and (min-width: 1000px) {
        display: block;
    }
`;

const Header = () => {
    const [isNavigationOpen, toggleNavigation] = useState(false);
    return (
        <>
            {isNavigationOpen && <Navigation />}
            <Container>
                <Logo />
                <AvatarAndDropdownContainer
                    onClick={() => {
                        toggleNavigation(!isNavigationOpen);
                    }}
                >
                    <Avatar src={'https://source.unsplash.com/random'} />
                    <Name>{false || 'Not specified'}</Name>
                    <Dropdown>
                        {isNavigationOpen ? (
                            <ArrowDropDownIcon />
                        ) : (
                            <ArrowDropUpIcon />
                        )}
                    </Dropdown>
                </AvatarAndDropdownContainer>
            </Container>
        </>
    );
};

export default Header;
