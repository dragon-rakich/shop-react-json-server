import './_cart-item.scss';

import Button from '../../../../Button/Button';

function CartItem({cartItem, onDecrease, onIncrease, onRemove}) {
    return (
        <article className='cart-item'>
            <div className='cart-item__main'>
                <div className='cart-item__image' />
                <div className='cart-item__data'>
                    <h2 className='cart-item__title'>{cartItem.title}</h2>
                    <p className='cart-item__price'>${cartItem.price}</p>
                    <div className='cart-item__counter'>
                        <Button
                            onClick={onDecrease}
                            label="-"
                            type="primary"
                            size="medium"
                         />
                        <p className='cart-item__count'>{cartItem.count}</p>
                        <Button
                            onClick={onIncrease}
                            label="+"
                            type="primary"
                            size="medium"
                         />
                    </div>
                </div>
            </div>
            <button onClick={onRemove}>×</button>
        </article>
    )
}


export default CartItem;