import "./product-list.css";
import ProductListItem from "./ProductListItem";

const ProductList = ({
  items
}) => {
  return (
    <div className='product__list'>
        <div className="list_container">
          {
            items 
            ? items?.map((item, i) => (
              <ProductListItem 
                  key={`list__item_${i}`}
                  imageUrl={item?.details?.image}
                  title={item?.name}
                  price={item?.details?.price}
              />
            ))
            : <p>No products found</p>
          }
        </div>
    </div>
  )
}

export default ProductList;