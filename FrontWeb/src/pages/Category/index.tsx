import CategoryProduct from '../../components/CategoryProduct';
import './styles.css';

const Category = () => {
  return (
    <div className="category-main-container">
      <div className="text-name-category">
        <h1>Escolha a categoria!!!</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CategoryProduct />
          </div>
          <div className="col-md-6">
            <CategoryProduct />
          </div>
          <div className="col-md-6">
            <CategoryProduct />
          </div>
          <div className="col-md-6">
            <CategoryProduct />
          </div>
          <div className="col-md-6">
            <CategoryProduct />
          </div>
          <div className="col-md-6">
            <CategoryProduct />
          </div>
        </div>
      </div>

</div>      
  );
};

export default Category;
