import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpointMin, breakpointMax } from 'lib/breakpoints';

const HeaderWrapper = styled.header`
    align-items: center;
    display: flex;
    text-align: center;
    padding: 8px;
    border-bottom: 1px solid #e5e5e5;

    ${breakpointMax('md')`
        justify-content: flex-end;
        padding: 1.2rem 2.8rem;
    `}

    ${breakpointMin('md')`
        justify-content: space-between;
        position: relative;
    `}
`;

const LogoLink = styled(Link)`
    align-self: center;
    // margin-right: auto;
    width: 48px;

    ${breakpointMax('md')`
        margin-right: auto;
    `}
`;

const LogoWrapper = styled.img`
    height: auto;
    width: 100%;
`;

// https://jsramblings.com/2018/02/04/styled-components-media-queries.html
const Nav = styled.nav`
    ${breakpointMax('lg')`
        position: absolute;
        top: -100px;
    `}
    ${breakpointMin('md')`

    `}
`;

const Actions = styled.div`
    ${breakpointMin('lg')`
        display: none;
    `}
`;

const Search = styled.div`
    ${breakpointMax('lg')`
        display: none;
    `}
`;

HeaderWrapper.LogoLink = LogoLink;
HeaderWrapper.LogoWrapper = LogoWrapper;
HeaderWrapper.Nav = Nav;
HeaderWrapper.Actions = Actions;
HeaderWrapper.Search = Search;

export default HeaderWrapper;

// export { LogoLink, LogoWrapper, Nav, Actions };

