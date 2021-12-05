import { NavLink, useParams } from 'react-router-dom';
import Comments from '../../components/Comments';
import Description from '../../components/Description';
import Price from '../../components/Price';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Products } from '../../types/product';
import { BASE_URL } from '../../util/requests';

import './styles.css';

type UrlParams = {
  productId: string;
};

const ProductD = () => {
  const { productId } = useParams<UrlParams>();

  const [prod, setProd] = useState<Products>();

  useEffect(() => {
    axios.get(`${BASE_URL}/products/${productId}`)
    .then((response) => {
      setProd(response.data);
    });
  }, [productId]);

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
            <img src={prod?.imgUrl} alt={prod?.name} />
          </div>
          <div className="name-and-price-container">
            <h1>{prod?.name}</h1>
            <div className="price-product-container">
              {prod && <Price price={prod?.price} />}
            </div>
          </div>
          <div className="description-container">
            <h2>Descrição</h2>
          </div>

          <div className="description-page">
            {prod && <Description description={prod?.description} />}
          </div>

          <div className="comments-text">
            <h2>Comentários</h2>
          </div>

          <div className="comment-page">
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductD;
