import './styles.css';
import 'bootstrap/js/src/collapse.js';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-container">
      <div className="container-fluid">
        <h4>TecCommerce</h4>

        <button
          className="navbar-toggler hamburguer-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#teccommerce-navbar"
          aria-controls="teccommerce-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="teccommerce-navbar">
          <ul className="navbar-nav offset-md-2 links-container">
            <li>
              <a href="link">HOME</a>
            </li>
            <li>
              <a href="link">CATÁLOGO</a>
            </li>
            <li>
              <a href="link">ADMIN</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
