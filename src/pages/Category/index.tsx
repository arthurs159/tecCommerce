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
            <CategoryProduct category={{
              name: 'Hardware',
              url: 'https://raw.githubusercontent.com/arthurs159/Assets/master/ecommerce/hardwarecategory.png'
            }} />
          </div>
          <div className="col-md-6">
            <CategoryProduct category={{
              name: 'Notebook',
              url: 'https://raw.githubusercontent.com/arthurs159/Assets/master/ecommerce/notebookcategory.png'
            }} />
          </div>
          <div className="col-md-6">
            <CategoryProduct category={{
              name: 'TV',
              url: 'https://raw.githubusercontent.com/arthurs159/Assets/master/ecommerce/tvcategory.png'
            }} />
          </div>
          <div className="col-md-6">
            <CategoryProduct category={{
              name: 'Periférico',
              url: 'https://raw.githubusercontent.com/arthurs159/Assets/master/ecommerce/mousecategory.png'
            }} />
          </div>
          <div className="col-md-6">
            <CategoryProduct category={{
              name: 'Smartphone',
              url: 'https://raw.githubusercontent.com/arthurs159/Assets/master/ecommerce/smartphonecategory.png'
            }} />
          </div>
        </div>
      </div>

</div>      
  );
};

export default Category;
