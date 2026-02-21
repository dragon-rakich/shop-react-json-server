import {
  HashRouter,
  Routes,
  Route
}
from 'react-router-dom';

import Layout from './Layout';

import Store from './Components/Store/Store';
import Contact from './Components/Contact/Contact';
import Shipping from './Components/Shipping/Shipping';
import FAQ from './Components/FAQ/FAQ';

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Store />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/faq' element={<FAQ />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
