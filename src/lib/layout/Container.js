import React from 'react';
import styled from 'styled-components';

const DivWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1400px;
`;

const Container = ({ children }) => (
    <DivWrapper>
        {children}
    </DivWrapper>
);

export default Container;