import './_store.scss';
import {useState, useEffect} from 'react';

import StoreHeading from './StoreHeading/StoreHeading';
import Product from './Product/Product';

const initialFilters = {
    search: {value: "", fun: function(product) {return true}},
    category: {value: "all", fun: function(category) {return true}},
    brand: {value: "all", fun: function(brand) {return true}},
    price: {value: "all", fun: function(price) {return true}},
    order: {value: "Name: A-Z", fun: function(products) {products.sort((a, b) => {a.name.toLowerCase().localeCompare(b.name.toLowerCase())})}}, 
    inStockOnly: {value: false, fun: function(isInStock) {return true}}
}

function Store() {
    const [products, setProducts] = useState(false);
    const [filters, setFilters] = useState(initialFilters);
    const [page, setPage] = useState(false);

    useEffect(() => {
        let timeoutId;

        const fetchProducts = async() => {
            try {
                const resp = await fetch("http://localhost:3000/products");
                if (!resp.ok) {
                    console.log("get products error: " + resp.status);
                    timeoutId = setTimeout(fetchProducts, 3000);
                    return;
                }

                const data = await resp.json();
                setProducts(data);
            } catch(err) {
                console.log(err);
                timeoutId = setTimeout(fetchProducts, 3000);
        }
        fetchProducts();

        return () => {
            if (timeoutId) {clearTimeout(timeoutId)};
        };

    }

    }, [])
    return (
        <section className='store container'>
            <StoreHeading 
                main="Discover Amazing Tech Products"
                sub="Browse our collection of 60 premium tech products from top brands"
            />
            {(!products) && <p>Loading Store Info...</p>}
            
        </section>
    )
}

export default Store;