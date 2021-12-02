import './styles.css';
import notebook from '../../assets/images/notebook.png';
import Price from '../Price';

const Product = () => {
  return (
    <div className="main-container-product">
      <div className="image-product">
        <img src={notebook} alt="notebook" />
      </div>
      <div className="text-price-container">
        <div className="text-container-product">
          <div>
            <h1>Notebook Samsung M10</h1>
          </div>
          <div>
            <p>A vista ou no pix</p>
          </div>
        </div>
        <div className="price-container-index">
          <Price price={1234.99} />
        </div>
      </div>
    </div>
  );
};

export default Product;
