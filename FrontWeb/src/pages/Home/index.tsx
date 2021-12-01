import './styles.css';
import img1 from '../../assets/images/notebookguy.png';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="home-card">
          <div className="img-container">
            <img src={img1} alt="notebookGuy" />
          </div>
          <div className="text">
            <h1>Bem-vindo à TecCommerce</h1>
            <p>Conheça nossos produtos e promoções</p>
            <Link to="catalog">
              <Button />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
