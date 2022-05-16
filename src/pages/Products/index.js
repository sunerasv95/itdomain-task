import { useEffect, useState } from "react";
import axios from "../../api/axios";
import ProductList from "../../components/ProductList";
import "./products.css";

const PRODUCTS_ENDPOINT = "prasadhewage/ecommerce/shipments";

const Products = () => {
	const [products, setProducts] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const fetchProducts = async ()  => {
            try {
                const res = await axios.get(PRODUCTS_ENDPOINT);
                const prods = res?.data;
                console.log("PRODS", prods);
                isMounted && setProducts(prods);
            } catch (err) {
                console.error(err);
            }
        } 

        fetchProducts();

        return () => {
            isMounted = false;
            controller.abort();
        }
        
    }, [])
    

	return (
        <div className="products">
            <div className="products__left_side">
                Filters
            </div>
            <div className="products__right_side">
                <ProductList 
                    items={products}
                />
            </div>
        </div>
    );
};

export default Products;
