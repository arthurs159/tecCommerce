import NavBar from '../../components/Navbar';
import Product from '../../components/Product';
import './styles.css';

const Catalog = () => {
  return (
    <>
      <NavBar />
      <div className="main-container-catalog">
        <div>
          <h1>Aproveite a semana da Black Friday!!</h1>
        </div>
      </div>

      <div>
        <div>
          <Product />
        </div>
      </div>
    </>
  );
};

export default Catalog;
