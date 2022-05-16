import "./product-list-item.css";

const ProductListItem = ({
    imageUrl,
    title,
    price,
}) => {
  return (
    <div 
        className="product__list_item"
    >
        <img
            src={imageUrl}
            alt="product-img-here"
        />
        <p className="product__title">{title}</p>
        <span className="product__price">$<span>{price}</span></span>
    </div>
  )
}

export default ProductListItem