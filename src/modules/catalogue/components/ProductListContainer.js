import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from 'modules/catalogue/components/ProductList';

class ProductListContainer extends Component {
    // temp data
    products = [{title: 'abc'}]

    render() {
        return (
            <ProductList products={this.products} />
        );
    }
}

export default ProductListContainer;