import './_products.scss';
import Product from './Product/Product';
import Loading from './Loading/Loading';
import NoResults from './NoResults/NoResults';

function Products({products, onAddItem}) {
    if (!products) {
        return (
            <Loading 
                title="Products loading......."
                subtitle="Please check internet connection"
            />
        )
    }
    if (products.length === 0) {
        return (
            <NoResults 
                title="No products found matching your filters"
                subtitle="Try adjusting your search criteria"
            />
        )
    }

    return (
        <div className='products'>
            <ul className='products__list'>
                {products.map((product) => {
                    return (
                    <li key={product.id}>
                        <Product 
                            product={product}
                            onAddItem={() => {onAddItem(product)}}
                        />
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default Products;