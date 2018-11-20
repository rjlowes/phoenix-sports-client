import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import Text from './Text';

const Card = styled.div`
    margin: 5px 5px 10px;
    padding: 5px;
    position: relative;
`;

Card.Image = Image;
Card.Text = Text;

export default Card;
