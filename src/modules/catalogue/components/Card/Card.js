import React from 'react';
import { Link } from 'react-router-dom';
import CardWrapper, { 
    ThumbnailLink, 
    Footer 
} from './styles';

const Card = () => (
    <CardWrapper>
        <ThumbnailLink to="/err">Img</ThumbnailLink>
        <Footer>
            footer
        </Footer>
    </CardWrapper>
);

export default Card;