import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-container">
      <div className="container-fluid">
        <h4>TecCommerce</h4>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#teccommerce-navbar"
          aria-controls="teccommerce-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse list-container" id="teccommerce-navbar">
          <ul className="navbar-nav offset-md-2 links-container">
            <li>
              <NavLink to="/" activeClassName="active" exact>HOME</NavLink>
            </li>
            <li>
            <NavLink activeClassName="active" to="/catalog">
                CATALOGO
              </NavLink>
            </li>
            <li>
            <NavLink activeClassName="active" to="/categories">
                CATEGORIAS
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
