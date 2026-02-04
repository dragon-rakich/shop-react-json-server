import './_product.scss';

function Product({product}, onBuy) {
    return (
        <article className='product'>
            <div className='product__image' />
            <div className='product__ui'>
                <h2 className='product__name'>{product.name}</h2>
                <p className='product__line'>{product.description}</p>
                <p className='product__line'>{product.brand} • {product.category}</p>
                <div className='product__rating-box'>
                    <div className='product__rating-star' />
                    <p className='product__rating-num'>{product.rating}</p>
                </div>
                <p className='product__price'>${product.price}</p>
                <button onClick={onBuy}>Add to Cart</button>
            </div>
        </article>
    )
}

export default Product;