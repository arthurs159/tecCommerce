import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Product from '../../components/Product';
import { SpringPage } from '../../types/vendor/spring';
import { Products } from '../../types/product';
import { AxiosParams } from '../../types/vendor/axios';
import { BASE_URL } from '../../util/requests';

import './styles.css';
import axios from 'axios';
import ImageGrid from './CardLoader';

const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Products>>();
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/products`,
      params: {
        page: 0,
        size: 12,
      },
    };

    setisLoading(true);
    axios(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setisLoading(false);
      });
  }, []);

  return (
    <>
      <div className="main-container-catalog">
        <div>
          <h1>Aproveite a semana da Black Friday!!</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {( isLoading ? <h2>Buscando produtos... <ImageGrid /></h2>  : (
            page?.content.map((product) => (
            <div className="col-sm-6" key={product.id}>
              <NavLink to={`/catalog/ ${product.id}`}>
                <Product product={product} />
              </NavLink>
            </div>
          ))))}
        </div>
      </div>
    </>
  );
};

export default Catalog;
