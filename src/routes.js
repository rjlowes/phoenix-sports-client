import React from 'react';
import { Route, Switch } from 'react-router';

import HomePage from 'modules/home/pages/HomePage';
import ProductListPage from 'modules/catalogue/pages/ProductListPage';
import ProductDetailsPage from 'modules/catalogue/pages/ProductDetailsPage';

export default (
	<Switch>
		<Route path="/category/:id" component={ProductListPage} />
		<Route path="/product/:id" component={ProductDetailsPage} />
		<Route path="/" component={HomePage} />
 	</Switch>
)