import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './components/Container';
import Content from './components/Content';
import Navbar from './components/Navbar';
import NavigationAside from './components/NavigationAside';
import ShoppingCart from './components/ShoppingCart';
import OtherScreens from './screens/OtherScreens';
import { data } from './components/data';
const App = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const menData = data.filter((d) => d.category === 'men');
  const womenData = data.filter((d) => d.category === 'women');
  const kidsData = data.filter((d) => d.category === 'kids');
  const bagsData = data.filter((d) => d.category === 'bags');
  const shoesData = data.filter((d) => d.category === 'shoes');

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      return;
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
  };

  const cartHandler = (product, type) => {
    if (type === 'increment') {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...product, amount: product.amount + 1 } : x
        )
      );
    } else if (type === 'decrement') {
      if (product.amount === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...product, amount: product.amount - 1 } : x
          )
        );
      }
    } else {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
  };
  return (
    <BrowserRouter basename='shop'>
      <Navbar
        menuToggle={menuToggle}
        setMenuToggle={setMenuToggle}
        inCart={cartItems.length}
      />
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
                  <OtherScreens
                    heading={'home all categories'}
                    data={data.slice(0, 50)}
                    addToCart={addToCart}
                  />
                }
              />
              <Route
                path='men'
                element={
                  <OtherScreens
                    heading={'men category'}
                    data={menData.slice(0, 50)}
                    addToCart={addToCart}
                  />
                }
              />
              <Route
                path='women'
                element={
                  <OtherScreens
                    heading={'women category'}
                    data={womenData.slice(0, 50)}
                    addToCart={addToCart}
                  />
                }
              />
              <Route
                path='kids'
                element={
                  <OtherScreens
                    heading={'kids category'}
                    data={kidsData.slice(0, 50)}
                    addToCart={addToCart}
                  />
                }
              />
              <Route
                path='bags'
                element={
                  <OtherScreens
                    heading={'bags category'}
                    data={bagsData.slice(0, 50)}
                    addToCart={addToCart}
                  />
                }
              />
              <Route
                path='shoes'
                element={
                  <OtherScreens
                    heading={'shoes category'}
                    data={shoesData.slice(0, 50)}
                    addToCart={addToCart}
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
    </BrowserRouter>
  );
};

export default App;
