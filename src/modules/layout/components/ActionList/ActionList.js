import React from 'react';
import IconList from './styles';
import { ShoppingCartIcon, MenuIcon, SearchIcon } from 'lib/icons/Icons';

const ActionList = () => (
    <IconList>
        <IconList.Item>
            <SearchIcon />
        </IconList.Item>
        <IconList.Item>
            <ShoppingCartIcon />
        </IconList.Item>
        <IconList.Item>
            <MenuIcon />
        </IconList.Item>
    </IconList>
);

export default ActionList;