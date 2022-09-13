import { NavLink } from 'react-router-dom';

const NavigationAside = ({ menuToggle, setMenuToggle }) => {
  return (
    <aside className={`page-container__aside ${menuToggle && 'active'} `}>
      <nav className='navigation-aside'>
        <ul className='navigation-aside__items'>
          <li
            className='navigation-aside__item'
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <NavLink
              to='/'
              className='navigation-aside__link fw-semibold text-cap'
            >
              <img
                src='https://ik.imagekit.io/ievdkoh2e/shop_website/home-svgrepo-com__1__1_uUbj0bD5R_.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1662915833999'
                alt='home icon'
              />{' '}
              <span>home</span>
            </NavLink>
          </li>
          <li
            className='navigation-aside__item'
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <NavLink
              to='/men'
              className='navigation-aside__link fw-semibold text-cap'
            >
              <img
                src='https://ik.imagekit.io/ievdkoh2e/shop_website/man-svgrepo-com__2__1_6EUzRCsM2.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1662915834350'
                alt='men icon'
              />
              <span>men</span>
            </NavLink>
          </li>
          <li
            className='navigation-aside__item'
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <NavLink
              to='/women'
              className='navigation-aside__link fw-semibold text-cap'
            >
              <img
                src='https://ik.imagekit.io/ievdkoh2e/shop_website/girl-svgrepo-com__2__1_JCjzizPFj.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1662915834128'
                alt='women icon'
              />
              <span>women</span>
            </NavLink>
          </li>
          <li
            className='navigation-aside__item'
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <NavLink
              to='/kids'
              className='navigation-aside__link fw-semibold text-cap'
            >
              <img
                src='https://ik.imagekit.io/ievdkoh2e/shop_website/avatar-boy-kid-svgrepo-com_1_0Ma2e7un9H.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1662915834822'
                alt='kids icon'
              />

              <span>kids</span>
            </NavLink>
          </li>
          <li
            className='navigation-aside__item'
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <NavLink
              to='/bags'
              className='navigation-aside__link fw-semibold text-cap'
            >
              <img
                src='https://ik.imagekit.io/ievdkoh2e/shop_website/bag-svgrepo-com_1_JsUdT0b-C.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1662915834051'
                alt='bags icon'
              />
              <span>bags</span>
            </NavLink>
          </li>
          <li
            className='navigation-aside__item'
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <NavLink
              to='/shoes'
              className='navigation-aside__link fw-semibold text-cap'
            >
              <img
                src='https://ik.imagekit.io/ievdkoh2e/shop_website/shoes-shoe-svgrepo-com_1_tQqMkDa5Y.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1662915834686'
                alt='shoes icon'
              />
              <span>shoes</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default NavigationAside;
