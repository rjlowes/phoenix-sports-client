import React, { Component } from 'react';
import MainLayout from 'modules/layout/MainLayout';
import ProductListContainer from 'modules/catalogue/components/ProductListContainer';


class ProductListPage extends Component {

	render() {
		const { id } = this.props.match.params;
		console.log('cat id', id);

		return (
			<MainLayout>
				<div>
					<h1>PLP</h1>
					<ProductListContainer />
				</div>
			</MainLayout>
		)
	}
}

export default ProductListPage;