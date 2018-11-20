import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardWrapper = styled.article`
    border: 1px solid red;
    padding: 6px;
`;

const ThumbnailLink = styled(Link)`
    color: green;
`;


const Footer = styled.div`
    background: grey;
    padding: 6px;
`;


export default CardWrapper;

export { ThumbnailLink, Footer }