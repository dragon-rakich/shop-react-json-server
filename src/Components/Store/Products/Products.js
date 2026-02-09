import './_products.scss';
import Product from './Product/Product';
import Loading from './Loading/Loading';
import NoResults from './NoResults/NoResults';

function Products(products) {
    if (!products) {
        return (
            <Loading 
                title="Products Loading......."
                subtitle="Please Check Internet Connection"
            />
        )
    }

    if (products.length > 0) {
        return (
            <NoResults 
                title="No products found matching your filters"
                subtitle="Try adjusting your search criteria"
            />
        )

    }

    return (
        <div className='products'>
        </div>
    )
}

export default Products;