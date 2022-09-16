import Container from './Container';

import { BiMenu } from 'react-icons/bi';
import { GiShoppingCart } from 'react-icons/gi';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Search from './Search';
import { useState } from 'react';

const Navbar = ({ menuToggle, setMenuToggle, inCart, searchHandler }) => {
  const { pathname } = useLocation();
  const [searchToggle, setSearchToggle] = useState(false);
  const navigate = useNavigate();

  const backToHome = () => {
    setMenuToggle(false);
    navigate('/');
  };
  return (
    <nav className={`navbar bg-grey-700 ${pathname === '/cart' && 'hidden'}`}>
      <Container classes='navbar__container'>
        <NavLink to={'/'} className='navbar__logo'>
          <img
            src='https://ik.imagekit.io/ievdkoh2e/shop_website/prestashop-logo-svgrepo-com_1_fYsla3_nJj.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1662911398113'
            alt='logo'
          />
          <p className='text-cap fw-bold'>modern shop</p>
        </NavLink>
        <Search searchHandler={searchHandler} setMenuToggle={setMenuToggle} />
        <div className='navbar__navigation'>
          <NavLink
            to={'/cart'}
            className='navbar__navigation-item'
            onClick={() => setMenuToggle(false)}
          >
            <GiShoppingCart />

            <div style={{ marginInlineStart: '3px' }}>
              {inCart > 0 && inCart}
            </div>
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
