import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';
import { ProductList } from './styles';
import { formatPrice } from '../../util/format';

class Home extends Component {
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

  handleAddProduct = id => {
    // const { dispatch } = this.props;
    // method from redux is available on props using  mapDispatchToProps
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button
              type="button"
              onClick={() => this.handleAddProduct(product.id)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
                {amount[product.id] || 0}
              </div>
              <span>ADD TO CART</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
