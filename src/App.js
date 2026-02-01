import Header from './Components/Header/Header';
import Logo from './Components/Header/Logo/Logo';
import Cart from './Components/Header/Cart/Cart';

export function App() {
  return (
    <>
      <Header>
        <Logo brandname="TechStore" />
        <Cart />
      </Header>
    </>
  );
}
