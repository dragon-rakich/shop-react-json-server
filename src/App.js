import Header from './Components/Header/Header';
import Logo from './Components/Header/Logo/Logo';
import Cart from './Components/Header/Cart/Cart';

import Store from './Components/Store/Store';

import Footer from './Components/Footer/Footer';

export function App() {
  return (
    <>
      <Header>
        <Logo brandname="TechStore" />
        <Cart />
      </Header>
      <Store />
      <Footer />
    </>
  );
}
