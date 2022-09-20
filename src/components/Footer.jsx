import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  const { pathname } = useLocation();

  return (
    <footer
      className={`footer  bg-grey-700 ${pathname === '/cart' && 'hidden'}`}
    >
      <div className='container'>
        <Link to='/' className='footer__logo'>
          <img
            src='https://ik.imagekit.io/ievdkoh2e/shop_website/prestashop-logo-svgrepo-com_1_fYsla3_nJj.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1662911398113'
            alt='logo icon'
            className='logo'
          />
          <p className='text-cap fw-semibold'>modern shop</p>
        </Link>

        <div className='footer__social-links'>
          <a href='https://www.facebook.com/asim.alabtah.1/' target='_blank'>
            <img
              src='https://ik.imagekit.io/ievdkoh2e/shop_website/facebook-svgrepo-com_1_91gd2srA4.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663694725932'
              alt='social icon'
            />
          </a>
          <a href='https://twitter.com/AsimBasheer22' target='_blank'>
            <img
              src='https://ik.imagekit.io/ievdkoh2e/shop_website/twitter-svgrepo-com_1_T4iclArtR.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663694725888'
              alt='social icon'
            />
          </a>
          <a href='https://www.instagram.com/asim_basheer5500/' target='_blank'>
            <img
              src='https://ik.imagekit.io/ievdkoh2e/shop_website/instagram-svgrepo-com_1_65QNPkbpr.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663694725877'
              alt='social icon'
            />
          </a>
        </div>

        <p className='copyright'>
          Created By Asim Basheer | ©️ {year} All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
