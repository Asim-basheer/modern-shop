import Card from './Card';

const index = ({ heading, data, addToCart, cartItems }) => {
  return (
    <>
      <h2 className='sub-heading text-cap'>{heading}</h2>
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
    </>
  );
};

export default index;
