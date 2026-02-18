import { Outlet } from 'react-router-dom';

import Header from './Components/Header/Header';
import Logo from './Components/Header/Logo/Logo';
import Cart from './Components/Header/Cart/Cart';

import Footer from './Components/Footer/Footer';

export function Layout() {
  return (
    <>
      <Header>
        <Logo brandname="TechStore" />
        <Cart />
      </Header>
      <Outlet />
      <Footer />
    </>
  );
}


export default Layout;