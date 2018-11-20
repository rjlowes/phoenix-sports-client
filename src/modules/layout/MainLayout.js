import React from 'react';
import Header from 'modules/layout/components/Header/Header';
// import styled from 'styled-components';
// import Container from 'lib/layout/Container';
import ResetStyle from 'components/Reset';


const MainLayout = ({ children }) => (
    <div>
        <ResetStyle />
        <Header />
        <main>
            {children}
        </main>
        <footer>Footer</footer>
    </div>
);

export default MainLayout;