import React, { Component } from 'react';

class ProductListPage extends Component {

	render() {
		const { id } = this.props.match.params;
		console.log('cat id', id);

		return (
			<h1>PLP</h1>
		)
	}
}

export default ProductListPage;