import React from 'react';

import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>QTY</th>
            <th>SUB-TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/04/D24-1738-304/D24-1738-304_detalhe2.jpg?resize=326:*"
                alt="Tennis Shoes"
              />
            </td>
            <td>
              <strong>beautiful shoes </strong>
              <span>U$29,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>U$59,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete ize={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finish Order</button>
        <Total>
          <span>TOTAL</span>
          <strong>U$29,90</strong>
        </Total>
      </footer>
    </Container>
  );
}
