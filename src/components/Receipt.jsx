const Receipt = ({ cartItems, total, shoppingCartItemsRef }) => {
  return (
    <div className='receipt fs-bold' ref={shoppingCartItemsRef}>
      <div className='receipt__logo'>
        <img
          src='https://ik.imagekit.io/ievdkoh2e/shop_website/prestashop-logo-svgrepo-com_1_fYsla3_nJj.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1662911398113'
          alt='logo'
        />
        <p className='text-cap fw-bold'>modern shop</p>

        <h2>your receipt</h2>
      </div>

      <div className='receipt__container'>
        {cartItems.map((cart) => {
          return (
            <div className='receipt__box' key={cart.id}>
              <div className='text-first-cap text-first-cap'>
                name of the product: {cart.name}
              </div>
              <div className='text-first-cap'>quantity: {cart.amount}</div>
              <div className='text-first-cap'>
                total price: ${(cart.amount * cart.price).toFixed(2)}
              </div>
            </div>
          );
        })}
      </div>

      <div className='fw-bold text-first-cap'>
        total receipt price: ${total}
      </div>

      <div className='text-first-cap'>thank you for the order</div>
    </div>
  );
};

export default Receipt;
