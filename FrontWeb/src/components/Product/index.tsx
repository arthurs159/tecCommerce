import './styles.css';
import notebook from '../../assets/images/notebook.png';

const Product = () => {
  return (
    <div className="main-container-product">
      <div className="image-product">
      <img src={notebook} alt="notebook" />
      </div>
      <div className="text-container-product">
        <div> 
          <h1>Notebook Samsung M10</h1>
          <p>A vista ou no pix</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
