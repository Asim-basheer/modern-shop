import Container from './Container';

import { BiSearch, BiMenu } from 'react-icons/bi';
import { GiShoppingCart } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Navbar = ({ menuToggle, setMenuToggle, inCart }) => {
  return (
    <nav className={`navbar bg-grey-700`}>
      <Container classes='navbar__container'>
        <NavLink to={'/'} className='navbar__logo'>
          <img
            src='https://ik.imagekit.io/ievdkoh2e/shop_website/prestashop-logo-svgrepo-com_1_fYsla3_nJj.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1662911398113'
            alt='logo'
          />
          <p className='text-cap fw-bold'>modern shop</p>
        </NavLink>
        <div className='navbar__navigation'>
          <button className='navbar__navigation-item search'>
            <BiSearch />
          </button>
          <NavLink
            to={'/cart'}
            className='navbar__navigation-item'
            onClick={() => setMenuToggle(false)}
          >
            <GiShoppingCart />

            <div>{inCart > 0 && inCart}</div>
          </NavLink>
          <button
            className='navbar__navigation-item menu'
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <BiMenu />
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
