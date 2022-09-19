import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartCard from './ShoppingCartCard';
import { useReactToPrint } from 'react-to-print';
const ShoppingCart = ({ cartHandler, cartItems }) => {
  const total = cartItems
    .reduce((accumulator, object) => {
      return accumulator + object.price * object.amount;
    }, 0)
    .toFixed(2);

  const shoppingCartItemsRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => shoppingCartItemsRef.current,
    documentTitle: 'your_shopping_cart',
    onAfterPrint: () => alert('thank you for shopping from us'),
  });
  return (
    <aside className='shopping-cart' ref={shoppingCartItemsRef}>
      <Link to='/' className='btn shopping-cart__btn'>
        back to home
      </Link>
      <div className='heading-container'>
        <h1 className='heading-container__heading text-first-cap'>
          {cartItems.length === 0
            ? 'your shopping cart is empty'
            : 'your shopping cart'}
        </h1>
      </div>

      <div className='shopping-cart-container'>
        {cartItems.map((product) => {
          return (
            <ShoppingCartCard
              key={product.id}
              product={product}
              cartHandler={cartHandler}
            />
          );
        })}
      </div>

      {cartItems.length > 0 && (
        <h3 className='text-cap'>
          <span>total:</span>
          <span className='fw-regular'> ${total}</span>
        </h3>
      )}
      <div className='shopping-cart__btn-container'>
        <button
          className={`btn warning ${cartItems.length === 0 && 'disabled'}`}
          onClick={() => cartHandler([], 'empty')}
        >
          empty cart
        </button>
        <button className='btn' onClick={handlePrint}>
          check out
        </button>
      </div>
    </aside>
  );
};

export default ShoppingCart;
