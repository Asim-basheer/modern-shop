import { AiFillDelete } from 'react-icons/ai';

const ShoppingCartCard = ({ product, cartHandler }) => {
  const { id, image, name, price, amount } = product;

  const total = (price * amount).toFixed(1);

  return (
    <div className='shopping-cart-card'>
      <div className='shopping-cart-card__img'>
        <img src={image} alt='product view' />
      </div>
      <div className='shopping-cart-card__name'>{name}</div>
      <div className='container-cards'>
        <div className='shopping-cart-card__count'>
          <span>amount</span>
          <div>
            <button onClick={() => cartHandler(product, 'decrement')}>-</button>
            {amount}
            <button onClick={() => cartHandler(product, 'increment')}>+</button>
          </div>
        </div>
        <div className='shopping-cart-card__price'>
          <span>price</span> ${price}
        </div>
        <div className='shopping-cart-card__total'>
          <span>total</span> ${total}
        </div>
        <button
          className='shopping-cart-card__control '
          onClick={() => cartHandler(product)}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartCard;
