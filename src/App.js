import {
  HashRouter,
  Routes,
  Route
}
from 'react-router-dom';

import Layout from './Layout';
import Store from './Components/Store/Store';

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Store />} />

        </Route>
      </Routes>
    </HashRouter>
  );
}
