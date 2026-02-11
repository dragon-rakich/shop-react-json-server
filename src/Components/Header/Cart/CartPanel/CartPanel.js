import Cart from '../Cart';
import './_cart-panel.scss';

import CartItem from './CartItem/CartItem';
import Button from '../../../Button/Button';

function CartPanel({cart, isShowing, onHide, onUpdate}) {
    const total = cart.reduce((sum, cartItem) => sum + (Number(cartItem.price) * Number(cartItem.count)), 0);

    let className = "cart-panel";
    if (isShowing) {className += " open"}
    return (
        <div className={className}>
            <header className='cart-panel__header'>
                <h2 className='cart-panel__title'>Shopping Cart</h2>
                <button className='cart-panel__x' onClick={onHide}>×</button>
            </header>
            {(cart.length === 0) && 
                <p className='cart-panel__empty'>Your cart is empty.</p>
            }
            {(cart.length > 0) && 
                <>
                    <ul className='cart-panel__cart'>
                        {cart.map((cartItem, i) => {
                            return (<li key={i}>
                                <CartItem 
                                    cartItem={cartItem}
                                    onDecrease={() => {onUpdate(cartItem, "decrease")}}
                                    onIncrease={() => {onUpdate(cartItem, "increase")}}
                                    onRemove={() => {onUpdate(cartItem, "delete")}}
                                />
                            </li>)
                        })}
                    </ul>
                    <div className='cart-panel__total'>
                        <p className='cart-panel__total-text'>Total:</p>
                        <p className='cart-panel__total-amount'>${total.toFixed(2)}</p>
                    </div>
                    <Button
                        label="Checkout"
                        type="secondary"
                        size="large"
                        onClick={() => {}}
                    />            
                </>
            }

        </div>
    )
}

export default CartPanel;