import './_cart.scss';
import { useState, useEffect } from 'react'; 

import CartButton from './CartButton/CartButton';
import CartCount from './CartCount/CartCount';
import Overlay from '../../Overlay/Overlay';
import CartPanel from './CartPanel/CartPanel';

function Cart() {
    const [cart, setCart] = useState([]);
    const [isShowing, setIsShowing] = useState(false);

    const toggleCart = (e) => {
        setIsShowing(prev => !prev);
    }

    const updateCart = (cartItem, operation) => {
        let api = "http://localhost:3000/cart/" + cartItem.id;
        if (operation === "increase") {
            fetch(api, {method: "PATCH", body: JSON.stringify({count: Number(cartItem.count) + 1}), headers: {"Content-Type": "application/json"}});
        }
        else if (operation === "decrease") {
            if (Number(cartItem.count) === 1) {return;}
            fetch(api, {method: "PATCH", body: JSON.stringify({count: Number(cartItem.count) - 1}), headers: {"Content-Type": "application/json"}});
        }
        else if (operation === "delete") {
            fetch(api, {method: "DELETE"});
        }
    }

    useEffect(() => {
        console.log("boop");
        let timeoutId;

        async function poll() {
            try {
                const response = await fetch("http://localhost:3000/cart", {method: "GET"});
                const data = await response.json();
                console.log("New data:", data);
                setCart(data);
                console.log("cart set");
                timeoutId = setTimeout(poll, 1000);
            } catch (err) {
                console.log("Polling error", err);
                timeoutId = setTimeout(poll, 3000);
            }
        }

        poll();

        return () => {
            console.log("Stopping polling...");
            clearTimeout(timeoutId);
        };
    }, []); 

    return (
        <div className='cart'>
            <CartButton onClick={toggleCart} />
            {(cart && cart.length > 0) && <CartCount cart={cart} />}
            {(isShowing) && <Overlay onClick={toggleCart} opacity={0.5} />}
            <CartPanel 
                cart={cart} 
                isShowing={isShowing}
                onHide={toggleCart}
                onUpdate={updateCart}
            />
        </div>
    )
}

export default Cart;