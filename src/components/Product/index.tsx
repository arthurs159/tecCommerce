import './styles.css';
import Price from '../Price';
import { Products } from '../../types/product';

type Props = {
  product : Products;
}

const Product = ({ product } : Props) => {
  return (
    <div className="main-container-product">
      <div className="image-product">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="text-price-container">
        <div className="text-container-product">
          <div>
            <h1>{product.name}</h1>
          </div>
          <div>
            <p>À vista ou no pix</p>
          </div>
        </div>
        <div className="price-container-index">
          <Price price={product.price} />
        </div>
      </div>
    </div>
  );
};

export default Product;
