import Price from '../../components/Price';
import './styles.css';

const Product = () => {
  return (
    <div className="main-box-container">
      <div className="box-container-card">
        <div className="container-text">
          <h1>VOLTAR</h1>
        </div>

        <div className="row">
          <div className="col-xl-6">
            <div className="container-img">
                   <img src="https://raw.githubusercontent.com/arthurs159/tecCommerce/master/FrontWeb/src/assets/images/notebook.png" alt="laptop1" />
            </div>
            <div className="name-and-price-container">
                     <h1>Nome do produto</h1>
                     <Price price={1234.56}/>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Product;
