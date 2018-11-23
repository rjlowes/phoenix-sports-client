import styled from 'styled-components';

// List1, List2, List3
const List = styled.ul`

`;

// Item1, Item2, Item3
const Item = styled.li`
    color: ${props => props.theme.colours.primaryBody};
`;

List.Item = Item;

export default List;