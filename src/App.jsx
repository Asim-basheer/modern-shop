import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './components/Container';
import Content from './components/Content';
import Navbar from './components/Navbar';
import NavigationAside from './components/NavigationAside';
import ShoppingCart from './components/ShoppingCart';
import OtherScreens from './screens/OtherScreens';
import { data } from './components/data';
import Loading from './components/Loading';
import { ToastContainer, toast } from 'react-toastify';

import Footer from './components/Footer';
import { useEffect } from 'react';
const App = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cart'))
      ? JSON.parse(localStorage.getItem('cart'))
      : []
  );
  const [dataAfterSearch, setDataAfterSearch] = useState([]);
  const [searchResult, setSearchResult] = useState(false);

  const [loading, setLoading] = useState(false);
  const menData = data.filter((d) => d.category === 'men');
  const womenData = data.filter((d) => d.category === 'women');
  const kidsData = data.filter((d) => d.category === 'kids');

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      return;
    } else {
      setLoading(true);
      setCartItems((prevState) => {
        const arr = [...prevState, { ...product, amount: 1 }];
        localStorage.setItem('cart', JSON.stringify(arr));
        return arr;
      });
      setTimeout(() => {
        setLoading(false);
      }, 500);

      toast.success(`${product.name} added to your shopping cart`);
    }
  };

  const cartHandler = (product, type) => {
    if (type === 'increment') {
      setCartItems((prevState) => {
        const value = prevState.map((x) =>
          x.id === product.id ? { ...product, amount: product.amount + 1 } : x
        );

        localStorage.setItem('cart', JSON.stringify(value));
        return value;
      });
    } else if (type === 'decrement') {
      if (product.amount === 1) {
        setLoading(true);
        setCartItems((prevState) => {
          const filteredData = prevState.filter((x) => x.id !== product.id);
          localStorage.setItem('cart', JSON.stringify(filteredData));
          return filteredData;
        });
        setTimeout(() => {
          setLoading(false);
        }, 500);
        toast.success(`${product.name} removed from your shopping cart`);
      } else {
        setCartItems((prevState) => {
          const value = prevState.map((x) =>
            x.id === product.id ? { ...product, amount: product.amount - 1 } : x
          );

          localStorage.setItem('cart', JSON.stringify(value));
          return value;
        });
      }
    } else if (type === 'empty') {
      const confirm =
        cartItems.length > 0
          ? window.confirm('are you sure want to clear your shopping cart?')
          : false;
      if (confirm) {
        setCartItems(product);
        localStorage.removeItem('cart');
        toast.success('your shopping cart is empty');
      }
    } else if (type === 'empty-after-print') {
      setCartItems(product);
      localStorage.removeItem('cart');
    } else {
      setCartItems((prevState) => {
        const filteredData = prevState.filter((x) => x.id !== product.id);
        localStorage.setItem('cart', JSON.stringify(filteredData));
        return filteredData;
      });
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
      toast.success(`${product.name} removed from your shopping cart`);
    }
  };

  const searchHandler = (name) => {
    const filter = data.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );

    if (filter.length === 0) {
      setSearchResult(true);
      setDataAfterSearch([]);
    } else if (filter.length > 0) {
      setDataAfterSearch(filter);
      setSearchResult(false);
    }
  };

  useEffect(() => {
    window.onload = () => {
      setLoading(true);
    };

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <BrowserRouter basename='/'>
      <Navbar
        menuToggle={menuToggle}
        setMenuToggle={setMenuToggle}
        inCart={cartItems.length}
        searchHandler={searchHandler}
      />
      {loading && <Loading />}
      <main>
        <Container classes='page-container'>
          <NavigationAside
            menuToggle={menuToggle}
            setMenuToggle={setMenuToggle}
          />
          <Content menuToggle={menuToggle}>
            <Routes>
              <Route
                path=''
                element={
                  <>
                    {dataAfterSearch.length === 0 && searchResult === true ? (
                      <OtherScreens
                        heading='no result to show'
                        data={[]}
                        addToCart={addToCart}
                        loading={loading}
                        cartItems={cartItems}
                      />
                    ) : (
                      <OtherScreens
                        heading={`${
                          dataAfterSearch.length > 0
                            ? data.length === dataAfterSearch.length
                              ? 'home all categories'
                              : 'search in all categories'
                            : 'home in all categories'
                        }`}
                        data={
                          dataAfterSearch.length > 0 ? dataAfterSearch : data
                        }
                        addToCart={addToCart}
                        loading={loading}
                        cartItems={cartItems}
                      />
                    )}
                  </>
                }
              />
              <Route
                path='men'
                element={
                  <OtherScreens
                    heading={'men category'}
                    data={menData}
                    addToCart={addToCart}
                    loading={loading}
                    cartItems={cartItems}
                  />
                }
              />
              <Route
                path='women'
                element={
                  <OtherScreens
                    heading={'women category'}
                    data={womenData}
                    addToCart={addToCart}
                    loading={loading}
                    cartItems={cartItems}
                  />
                }
              />
              <Route
                path='kids'
                element={
                  <OtherScreens
                    heading={'kids category'}
                    data={kidsData}
                    addToCart={addToCart}
                    loading={loading}
                    cartItems={cartItems}
                  />
                }
              />
              <Route
                path='cart'
                element={
                  <ShoppingCart
                    heading={'shoes category'}
                    data={data.slice(0, 20)}
                    cartHandler={cartHandler}
                    cartItems={cartItems}
                  />
                }
              />
            </Routes>
          </Content>
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
