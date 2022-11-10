import { AiOutlineCloseCircle } from 'react-icons/ai';

function Receipt({ total, setPopUp, popUp }) {
  const totalPlusFees = Number(total) + 13.99;
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const year = new Date().getFullYear(),
    month = new Date().getMonth(),
    day = new Date().getDate();

  return (
    <div className={`receipt ${popUp && 'receipt active'}`}>
      <div
        className={`receipt__overlay ${popUp && 'active'}`}
        onClick={() => setPopUp(false)}
      ></div>
      <div className={`receipt__body ${popUp && 'active'}`}>
        <div className='receipt__close' onClick={() => setPopUp(false)}>
          <AiOutlineCloseCircle />
        </div>

        <h2>
          customer receipt
          <span>your order is now completed</span>
        </h2>

        <div className='receipt__client-details'>
          <div>
            <span>client</span>
            <span>john de</span>
          </div>
          <div>
            <span>address</span>
            <span>jordan 202</span>
          </div>
        </div>

        <div className='receipt__date'>
          <span>
            {day} {monthNames[month]} {year}
          </span>
        </div>
        <div className='receipt__details'>
          <div>
            <span>price</span>
            <span>${total}</span>
          </div>
          <div>
            <span>fees</span>
            <span>$13.99</span>
          </div>
        </div>
        <div className='receipt__total'>
          <span>total</span>
          <span>${totalPlusFees}</span>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
