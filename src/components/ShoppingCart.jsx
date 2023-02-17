import { Link } from 'react-router-dom';
import ShoppingCartCard from './ShoppingCartCard';
import Receipt from './Receipt';
import { useState } from 'react';
const ShoppingCart = ({ cartHandler, cartItems }) => {
  const [popUp, setPopUp] = useState(false);

  const total = cartItems
    .reduce((accumulator, object) => {
      return accumulator + object.price * object.amount;
    }, 0)
    .toFixed(2);

  return (
    <>
      <aside className='shopping-cart'>
        <Link to='/' className='btn shopping-cart__btn'>
          back to home
        </Link>
        <div className='heading-container'>
          <h1 className='heading-container__sub-heading text-first-cap'>
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

          {cartItems.length === 0 ? (
            <button className='btn disabled'>check out</button>
          ) : (
            <button className='btn' onClick={() => setPopUp(!popUp)}>
              check out
            </button>
          )}
        </div>
      </aside>
      <Receipt total={total} setPopUp={setPopUp} popUp={popUp} />
    </>
  );
};

export default ShoppingCart;
