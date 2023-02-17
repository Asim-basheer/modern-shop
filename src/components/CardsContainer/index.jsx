import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';

const index = ({ heading, data, addToCart, cartItems }) => {
  const [filtered, setFiltered] = useState([]);

  const { pathname } = useLocation();
  const handleChange = (e) => {
    const filterData = data.filter((d) => d.category === e.target.id);

    setFiltered(filterData);
  };

  useEffect(() => {
    if (pathname !== '/') {
      setFiltered([]);
    }
  }, [pathname]);

  return (
    <>
      <div className='card__box'>
        <h2 className='sub-heading text-cap'>{heading}</h2>
        {pathname === '/' && (
          <div className='card__checkbox'>
            <div className='card__checkbox-container'>
              <label htmlFor='all'>all</label>
              <input
                type='radio'
                name='category'
                id='all'
                onChange={handleChange}
                checked={filtered.length > 0 ? false : true}
              />
            </div>
            <div className='card__checkbox-container'>
              <label htmlFor='men'>men</label>
              <input
                type='radio'
                name='category'
                id='men'
                onChange={handleChange}
              />
            </div>
            <div className='card__checkbox-container'>
              <label htmlFor='women'>women</label>
              <input
                type='radio'
                name='category'
                id='women'
                onChange={handleChange}
              />
            </div>
            <div className='card__checkbox-container'>
              <label htmlFor='kids'>kids</label>
              <input
                type='radio'
                name='category'
                id='kids'
                onChange={handleChange}
              />
            </div>
          </div>
        )}
      </div>
      {filtered.length > 0 ? (
        <div className='cards-container'>
          {filtered.map((product) => {
            return (
              <Card
                key={product.id}
                product={product}
                addToCart={addToCart}
                data={data}
                cartItems={cartItems}
              />
            );
          })}
        </div>
      ) : (
        <div className='cards-container'>
          {data.map((product) => {
            return (
              <Card
                key={product.id}
                product={product}
                addToCart={addToCart}
                data={data}
                cartItems={cartItems}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default index;
