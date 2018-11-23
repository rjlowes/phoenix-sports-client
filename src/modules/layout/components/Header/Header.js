import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, LogoLink, LogoWrapper, Nav, Actions, Search } from './styles';
import ActionList from 'modules/layout/components/ActionList/ActionList';
import LogoImage from 'images/nike.png';
import NavListContainer from 'modules/layout/components/Nav/NavListContainer';

// import './styles.scss';

const Header = (props) => (
    <HeaderWrapper>
        <LogoLink to="">
            <LogoWrapper src={LogoImage} />
        </LogoLink>
        <Nav>
            {console.log(props)}
            Nav list<NavListContainer />
        </Nav>
        <Search>
            Search
        </Search>
        <Actions>
            <ActionList />
        </Actions>
    </HeaderWrapper>

    // <header className="global-header">
    //     <Link to="" className="global-header__logo-link">
    //         {/* TODO create <Logo /> */}
    //         <img src={LogoImage} className="global-header__logo" />
    //     </Link>
    //     <nav className="global-header__nav">

    //     </nav>
    //     <div className="global-header__search">
    //         search
    //     </div>
    //     <div className="global-header__actions">
    //         <ActionList />
    //     </div>
    // </header>
);

export default Header;