import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
	<div>
		<h1>Home page</h1>
		<Link to={`/category/123`}>List</Link>
	</div>
);

export default HomePage;