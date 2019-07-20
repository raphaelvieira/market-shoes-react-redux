import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { connect } from 'react-redux';
import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

/** destrutering Redux state */
function Header({ carSize }) {
  console.log(carSize);
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Marketshoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>My cart</strong>
          <span>{carSize} items</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
/** get redux  state */
export default connect(state => ({
  carSize: state.cart.length,
}))(Header);
