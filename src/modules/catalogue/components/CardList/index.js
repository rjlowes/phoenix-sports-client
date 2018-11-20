import styled from 'styled-components';
import Item from './Item';

const CardList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

CardList.Item = Item;

export default CardList;