import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { ProductList } from './styles';
import { formatPrice } from '../../util/format';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    /**
     *
     * Format price only one time in didMount and not in the render, because in the render method, the function format price would be called every time the render be invoked
     *
     * Avoid call functions under the render method
     * */
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#fff" /> 3
              </div>
              <span>ADD TO CART</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
