import Cart from '../Cart';
import './_cart-panel.scss';

import CartItem from './CartItem/CartItem';

function CartPanel({cart, onHide, onIncrease, onDecrease, onRemove}) {
    const total = cart.reduce((sum, cartItem) => sum + (Number(cartItem.price) * Number(cartItem.count)), 0);

    return (
        <div className='cart-panel'>
            <header className='cart-panel__header'>
                <h2 className='cart-panel__title'>Shopping Cart</h2>
                <button className='cart-panel__x' onClick={onHide}>x</button>
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
                                    onDecrease={() => {onDecrease(cartItem)}}
                                    onIncrease={() => {onIncrease(cartItem)}}
                                    onRemove={() => {onRemove(cartItem)}}
                                />
                            </li>)
                        })}
                    </ul>
                    <div className='cart-panel__total'>
                        <p className='cart-panel__total-text'>Total:</p>
                        <p className='cart-panel__total-amount'>${total.toFixed(2)}</p>
                    </div>
                    <button>Checkout</button>
                </>
            }

        </div>
    )
}

export default CartPanel;