import './_cart-item.scss';

function CartItem({cartItem, onDecrease, onIncrease, onRemove}) {
    return (
        <article className='cart-item'>
            <div className='cart-item__main'>
                <div className='cart-item__image' />
                <div className='cart-item__data'>
                    <h2 className='cart-item__title'>{cartItem.title}</h2>
                    <p className='cart-item__price'>${cartItem.price}</p>
                    <div className='cart-item__counter'>
                        <button onClick={onDecrease}>-</button>
                        <p className='cart-item__count'>{cartItem.count}</p>
                        <button onClick={onIncrease}>+</button>
                    </div>
                </div>
            </div>
            <button onClick={onRemove}>X</button>
        </article>
    )
}

export default CartItem;