import { Link } from 'react-router-dom';
import ShoppingCartCard from './ShoppingCartCard';

const ShoppingCart = ({ cartHandler, cartItems }) => {
  const total = cartItems
    .reduce((accumulator, object) => {
      return accumulator + object.price * object.amount;
    }, 0)
    .toFixed(2);

  return (
    <aside className='shopping-cart'>
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

      <h3 className='text-cap'>
        <span>total:</span>
        <span className='fw-regular'> ${total}</span>
      </h3>
      <button className='btn'>check out</button>
    </aside>
  );
};

export default ShoppingCart;
