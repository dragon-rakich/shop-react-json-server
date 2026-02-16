import './_product.scss';

import Button from '../../../Button/Button';
const urls = {
    cameras : new URL("../../../../assets/products-images/camera.jpg", import.meta.url),
    earbuds : new URL("../../../../assets/products-images/earbuds.jpg", import.meta.url),
    headphones : new URL("../../../../assets/products-images/headphones.jpg", import.meta.url),
    keyboards : new URL("../../../../assets/products-images/keyboard.jpg", import.meta.url),
    laptops : new URL("../../../../assets/products-images/laptop.jpg", import.meta.url),
    microphones : new URL("../../../../assets/products-images/microphone.jpg", import.meta.url),
    monitors : new URL("../../../../assets/products-images/monitor.jpg", import.meta.url),
    mice : new URL("../../../../assets/products-images/mouse.jpg", import.meta.url),
    routers : new URL("../../../../assets/products-images/router.jpg", import.meta.url),
    speakers : new URL("../../../../assets/products-images/speaker.jpg", import.meta.url),
    storage : new URL("../../../../assets/products-images/storage.jpg", import.meta.url),
    tablets : new URL("../../../../assets/products-images/tablet.jpg", import.meta.url),
    smartwatches : new URL("../../../../assets/products-images/watch.jpg", import.meta.url),
    webcams : new URL("../../../../assets/products-images/webcam.jpg", import.meta.url),
}

function Product({product, onAddItem}) {
    const style = { backgroundImage: 'url(' + urls[product.category.toLowerCase()] + ')' };
    return (
        <article className='product'>
            <div className='product__image' style={style}> </div>
            <div className='product__ui'>
                <h2 className='product__name' >{product.name}</h2>
                <p className='product__line'>{product.description}</p>
                <p className='product__line'>{product.brand} • {product.category}</p>
                <div className='product__rating-box'>
                    <div className='product__rating-star' />
                    <p className='product__rating-num'>{product.rating}</p>
                </div>
                <p className='product__price'>${product.price}</p>
                <Button
                    label="Add to Cart"
                    type="secondary"
                    size="large"
                    onClick={onAddItem}
                />            
            </div>
        </article>
    )
}

export default Product;