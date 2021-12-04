import './styles.css';

import { Category } from '../../types/category';


type Props = {
  category : Category;
}

const CategoryProduct = ({category} : Props) => {
  return (
    <div className="main-category-prod">
      <div className="category-container-product">
        <div className="cat-img-container">
          <img src={category.url} alt="tv" />
        </div>
        <div className="main-box-name">
          <div className="box-name">
            <h1>{category.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
