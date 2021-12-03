import { NavLink } from 'react-router-dom';
import Comments from '../../components/Comments';
import Description from '../../components/Description';
import Price from '../../components/Price';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Product } from '../../types/product';
import { BASE_URL } from '../../util/requests';

import './styles.css';

const ProductD = () => {
  const [prod, setProd] = useState<Product>();

  useEffect(() => {
    axios.get(BASE_URL + '/products/1')
      .then((response) => {
      setProd(response.data);
    });
  }, []);

  return (
    <div className="main-box-container">
      <div className="box-container-card">
        <div className="back-button">
          <NavLink to="/catalog">
            <div className="container-text">
              <h1>VOLTAR</h1>
            </div>
          </NavLink>
        </div>

        <div className="row">
          <div className="container-img">
            <img
              src="https://raw.githubusercontent.com/arthurs159/tecCommerce/master/FrontWeb/src/assets/images/notebook.png"
              alt="laptop1"
            />
          </div>
          <div className="name-and-price-container">
            <h1>{prod?.name}</h1>
            <div className="price-product-container">
              { prod && <Price price={prod?.price} />}
            </div>
          </div>
          <div className="description-container">
            <h2>Descrição</h2>
          </div>

          <div className="description-page">
            <Description />
          </div>

          <div className="comments-text">
            <h2>Comentários</h2>
          </div>

          <div className="comment-page">
            <Comments />
            <Comments />
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductD;
