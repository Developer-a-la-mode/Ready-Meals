import { Fragment, useState } from 'react';
import './App.css';
import Navigation from './Components/Layout/Navigation';
import Hero from './Components/Layout/Hero';
import About from './Components/Layout/About';
import WeeklyMeals from './Components/Menu/WeeklyMeals';
import Cart from './Components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return <CartProvider>
    <Navigation onShowCart={showCartHandler} />
    {cartIsShown && <Cart onClose={hideCartHandler} />}
    <Hero />
    <About />
    <WeeklyMeals />
  </CartProvider>
}

export default App;
