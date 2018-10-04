import React, { Component } from 'react';

class ProductDetailsPage extends Component {

	render() {
		const { id } = this.props.match.params;
		console.log('cat id', id);

		return (
			<h1>PDP</h1>
		)
	}
}

export default ProductDetailsPage;