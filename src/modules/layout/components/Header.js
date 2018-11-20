import React from 'react';
import styled from 'styled-components'
import Logo from 'modules/layout/components/Logo';
import MobileNavButtons from 'modules/layout/components/MobileNavButtons.js';


const HeaderWrapper = styled.header`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    text-align: center;
    padding: 8px;
    border-bottom: 1px solid #e5e5e5;
`;

// https://jsramblings.com/2018/02/04/styled-components-media-queries.html
const NavWrapper = styled.nav`
    background: red;

    @media (min-width: 7658px) {
        background: blue;
    }
`;


const Header = () => (
    <HeaderWrapper>
        <Logo />
        <NavWrapper>some nav stuff</NavWrapper>
        <MobileNavButtons />
    </HeaderWrapper>
);

export default Header;