import { useState } from 'react';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Rating from '../Rating';

const Card = ({ product, data, addToCart }) => {
  const [showDetails, setShowDetails] = useState(false);

  const { des, id, image, isAdded, name, price, rating, reviews } = product;

  return (
    <article className='card'>
      <div className='card__body'>
        <img src={image} alt='product' className='card__img' />

        <div className='card__add-to-cart'>
          <button
            className='card__btn btn sm'
            onClick={() => {
              addToCart(product);
            }}
          >
            add to cart
          </button>
          <button
            className='card__full-screen'
            onClick={() => setShowDetails(!showDetails)}
          >
            <BsArrowsFullscreen />
          </button>
        </div>
      </div>

      <div className='card__title'>
        <h3 className='text-cap fw-semibold'>{name}</h3>
        <p>${price}</p>
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
          <button
            className='btn sm'
            onClick={() => {
              addToCart(product);
            }}
          >
            add to cart
          </button>

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
