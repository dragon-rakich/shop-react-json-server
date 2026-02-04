import './_store.scss';
import {useState, useEffect} from 'react';

import StoreHeading from './StoreHeading/StoreHeading';
import Product from './Product/Product';

function Store() {
    const [products, setProducts] = useState(false);
    const [filters, setFilters] = useState({});
    const [page, setPage] = useState(false);
    return (
        <section className='store container'>
            <StoreHeading 
                main="Discover Amazing Tech Products"
                sub="Browse our collection of 60 premium tech products from top brands"
            />
        </section>
    )
}

export default Store;