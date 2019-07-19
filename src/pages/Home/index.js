import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_detalhe2.jpg?resize=326:*"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADD TO CART</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_detalhe2.jpg?resize=326:*"
          alt="Tennis Shoes"
        />
        <strong>Beautiful shoes</strong>
        <span>U$29,90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADD TO CART</span>
        </button>
      </li>
    </ProductList>
  );
}
