import { useState } from 'react';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Rating from '../Rating';

const Card = ({ product, addToCart, cartItems }) => {
  const [showDetails, setShowDetails] = useState(false);

  const { id, des, image, name, price, rating, reviews } = product;

  const filtered = cartItems.filter((p) => p.id === product.id)[0];

  return (
    <article className='card'>
      <div className='card__body' onClick={() => setShowDetails(!showDetails)}>
        <img src={image} alt='product' className='card__img' />
      </div>

      <div className='card__title'>
        <h3 className='text-cap fw-semibold'>{name}</h3>
        <p>${price}</p>
      </div>

      <div className='card__add-to-cart'>
        {filtered?.id === id ? (
          <button
            className={`'card__btn btn sm disabled`}
            onClick={() => {
              addToCart(product);
            }}
          >
            add to cart
          </button>
        ) : (
          <button
            className={`'card__btn btn sm`}
            onClick={() => {
              addToCart(product);
            }}
          >
            add to cart
          </button>
        )}
        <button
          className='card__full-screen'
          onClick={() => setShowDetails(!showDetails)}
        >
          <BsArrowsFullscreen />
        </button>
      </div>

      <div className={`card__details card-details ${showDetails && 'active'}`}>
        <div className='card-details__img'>
          <img src={image} alt='product view' />
        </div>

        <div className='card-details__content'>
          <h3 className='card-details__name text-cap fw-semibold'>{name}</h3>
          <p className='card-details__description'>{des}</p>
          <div className='card-details__ratting'>
            <Rating value={rating} text={`${reviews} reviews`} />
          </div>
          {filtered?.id === id ? (
            <button
              className={`'card__btn btn sm disabled`}
              onClick={() => {
                addToCart(product);
              }}
            >
              add to cart
            </button>
          ) : (
            <button
              className={`'card__btn btn sm`}
              onClick={() => {
                addToCart(product);
              }}
            >
              add to cart
            </button>
          )}

          <button
            className='card-details__close'
            onClick={() => setShowDetails(false)}
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
      </div>

      <div
        className={`card__overlay ${showDetails && 'active'}`}
        onClick={() => setShowDetails(false)}
      ></div>
    </article>
  );
};

export default Card;
