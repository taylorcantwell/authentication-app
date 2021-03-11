import React from 'react';
import { css, keyframes } from 'styled-components';
import styled from 'styled-components';

const loaderAnimation = keyframes`
0% { transform: rotate(0deg) }
100% { transform: rotate(360deg) }
`;

const LoaderIcon = styled.div`
    border: 3px solid white;
    border-top: 3px solid #828282;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: ${loaderAnimation} 2s linear infinite;
    position: absolute;
    top: 25%;
    left: 3%;
`;

const Loader = () => {
    return <LoaderIcon />;
};

export default Loader;
