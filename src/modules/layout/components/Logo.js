import React from 'react';
import LogoImage from 'images/nike.png';
import styled from 'styled-components';

const ImgWrapper = styled.img`
    align-self: center;
    margin-right: auto;
    width: 100px;
`

const Logo = () => (
    <ImgWrapper src={LogoImage} />
);

export default Logo;