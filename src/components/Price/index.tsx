import { formatPrice } from '../../util/formatters';
import './styles.css';

type Props = {
  price: number;
}

const Price = ({ price }: Props) => {
  return (
         <div className="principal">
    <div className="price-container">
      <div className="price-text">
        <p>R$</p>
        <h1>{formatPrice(price)}</h1>
      </div>
    </div>
    </div>
  );
};

export default Price;
