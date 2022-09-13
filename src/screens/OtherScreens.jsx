import CardsContainer from '../components/CardsContainer';
const OtherScreens = ({ heading, data, addToCart }) => {
  return (
    <section>
      <div className='heading-container'>
        <h1 className='heading-container__heading text-cap'>modern shop</h1>
        <p className='text-first-cap fw-regular'>
          you can find all you need in one place
        </p>
      </div>

      <CardsContainer heading={heading} data={data} addToCart={addToCart} />
    </section>
  );
};

export default OtherScreens;
