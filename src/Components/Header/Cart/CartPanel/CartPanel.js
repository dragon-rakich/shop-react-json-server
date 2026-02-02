import './_cart-panel.scss';

function CartPanel({cart, onHide, onIncrease, onDecrease, onRemove}) {
    return (
        <div className='cart-panel'>
            <header className='cart-panel__header'>
                <h2 className='cart-panel__title'>Shopping Cart</h2>
                <button className='cart-panel__x'>x</button>
            </header>
            {(cart.length === 0) && 
                <p className='cart-panel__empty'>Your cart is empty.</p>
            }
            {(cart.length > 0) && 
                <>
                    <ul className='cart-panel__cart'>
                        {cart.map((cartItem, i) => {

                        })}
                    </ul>
                    <div className='cart-panel__total'>
                        <p className='cart-panel__total-text'>Total:</p>
                        <p className='cart-panel__total-amount'>Total:</p>
                    </div>

                </>
            }

        </div>
    )
}

export default CartPanel;