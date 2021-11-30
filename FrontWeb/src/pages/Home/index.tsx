import './styles.css';
import NavBar from '../../components/Navbar';
import img1 from '../../assets/images/notebookguy.png';
import Button from '../../components/Button';

const Home = () => {
  return (
    <>
      <NavBar />
      
      <div className="container">
        <div className="home-card">
          <div className="img-container">
            <img src={img1} alt="notebookGuy" />
          </div>
          <div className="text">
            <h1>Bem-vindo à TecCommerce</h1>
            <p>Conheça nossos produtos e promoções</p>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
