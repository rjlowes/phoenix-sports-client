import React from 'react';
import List from './styles';
import { PrimaryLink } from 'lib/Typography';

const NavList = () => (
    <List>
        <List.Item>
            <PrimaryLink to="/">test</PrimaryLink>
        </List.Item>
    </List>
);

export default NavList;