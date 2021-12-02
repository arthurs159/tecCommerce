import './styles.css';

import tv from '../../assets/images/tv.png';

const CategoryProduct = () => {
  return (
    <div className="main-category-prod">
      <div className="category-container-product">
        <div className="cat-img-container">
          <img src={tv} alt="tv" />
        </div>
        <div className="main-box-name">
          <div className="box-name">
            <h1>Smart TV's</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
