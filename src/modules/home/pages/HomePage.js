import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from 'modules/layout/MainLayout';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


const HomePage = () => (
	<MainLayout>
		<Title>Home page</Title>
		<Link to={`/category/123`}>List</Link>
	</MainLayout>
);

export default HomePage;