import './_store.scss';
import {useState, useEffect} from 'react';

import StoreHeading from './StoreHeading/StoreHeading';
import Filters from './Filters/Filters';
import Products from './Products/Products';
import PageButtons from './PageButtons/PageButtons';

const initialFilters = {
    search: {value: "", fun: function(product) {return true}},
    category: {value: "all", fun: function(category) {return true}},
    brand: {value: "all", fun: function(brand) {return true}},
    price: {value: "all", fun: function(price) {return true}},
    order: {value: "Name: A-Z", fun: function(products) {return products.sort((a, b) => {a.name.toLowerCase().localeCompare(b.name.toLowerCase())})}}, 
    inStockOnly: {value: false, fun: function(isInStock) {return true}}
}

const PRODUCTS_PER_PAGE = 12;

function Store() {
    const [products, setProducts] = useState(false);
    const [filters, setFilters] = useState(initialFilters);
    const [page, setPage] = useState(1);

    const handleFilterChange = (key, value) => {
        setFilters(prev => {return {...prev, [key]: value}});
        setPage(1);
    }
    const handleClearFilters = () => {setFilters(initialFilters); setPage(1)}

    const handlePageChange = (pageNum) => {setPage(pageNum)}

    const handleAddItem = (product) => {

    }

    let filteredProducts = false;
    let filterResults = 0;
    let numOfPages = 1;
    let rangeOfShowing = false;

    if (products) {
        filteredProducts = products.filter((product) => {
            return  (
                filters.search.fun(product) &&
                filters.category.fun(product.category) && 
                filters.brand.fun(product.brand) &&
                filters.price.fun(product.price) &&
                filters.inStockOnly.fun(product.isInStock)
            )
        })

        filteredProducts = filters.order.fun(filteredProducts);
        filterResults = filteredProducts.length;
        numOfPages = Math.floor(filterResults/(PRODUCTS_PER_PAGE + 1) + 1);

        if (filterResults > 0) {
            rangeOfShowing = [];
            rangeOfShowing[0] = (page - 1)*PRODUCTS_PER_PAGE;
            rangeOfShowing[1] = rangeOfShowing[0] + (PRODUCTS_PER_PAGE - 1);
            if (! filteredProducts[rangeOfShowing[1]]) {rangeOfShowing[1] = filteredProducts.length - 1}
        }
    }

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
        };

        fetchProducts();

        return () => {
            if (timeoutId) {clearTimeout(timeoutId)};
        };
    }, []);
    return (
        <section className='store container'>
            <StoreHeading 
                main="Discover Amazing Tech Products"
                sub="Browse our collection of 60 premium tech products from top brands"
            />
            <Filters 
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                filterResults={filterResults}
            />
            <Products
                products={(filteredProducts) ? filteredProducts.filter((product, i) => {
                    return (rangeOfShowing[0] <= i && i <= rangeOfShowing[1])})
                    :false
                }
                onAddItem={handleAddItem}
            />
            {(numOfPages > 1) && 
                <PageButtons 
                    page={page}
                    numOfPages={numOfPages} 
                    onClick={handlePageChange}
                />}
            {(rangeOfShowing) && 
                <p className='store__showing'>Showing {rangeOfShowing[0] + 1} - {rangeOfShowing[1] + 1} of {filterResults} products</p>
            }
        </section>
    )
}

export default Store;