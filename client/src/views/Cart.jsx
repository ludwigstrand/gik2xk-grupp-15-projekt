import { useEffect, useState } from 'react';
import { getOne } from '../services/CartService';

function Cart() {
    const [cart, setCart] = useState({});

    useEffect(() => {
        getOne(1).then((carts) => {
            setCart(carts);
        });
    }, []);

    let totalPrice = 0;

    if (cart.products?.length > 0) {
        totalPrice = cart.products.reduce((acc, product) => acc + product.price, 0);
    }

    return (
      <ul>
        {cart.products?.length > 0 ? (
          cart.products.map((product) => (
            <li key={product.id}> 
                <p>{product.title}</p>
                <p>{product.amount}</p>
                <p>{product.price}</p>
            </li>
          ))
        ) : (
          <h3>Kunde inte hämta inlägg</h3>
        )}
        {cart.products?.length > 0 && (
            <p>Totalt pris: {totalPrice}</p> 
        )}
      </ul>
    );
}

export default Cart;
