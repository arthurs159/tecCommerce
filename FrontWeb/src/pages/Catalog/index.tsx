import { NavLink } from 'react-router-dom';
import Product from '../../components/Product';
import './styles.css';

const Catalog = () => {
  return (
    <>
      <div className="main-container-catalog">
        <div>
          <h1>Aproveite a semana da Black Friday!!</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <NavLink to="/catalog/1">
            <Product />
            </NavLink>
          </div>
          <div className="col-sm-6">
          <NavLink to="/catalog/1">
            <Product />
            </NavLink>
          </div>
          <div className="col-sm-6">
          <NavLink to="/catalog/1">
            <Product />
            </NavLink>
          </div>
          <div className="col-sm-6">
          <NavLink to="/catalog/1">
            <Product />
            </NavLink>
          </div>
          <div className="col-sm-6">
          <NavLink to="/catalog/1">
            <Product />
            </NavLink>
          </div>
          <div className="col-sm-6">
          <NavLink to="/catalog/1">
            <Product />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
