import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
const Home = React.lazy(() => import('./pages/Home'));
const Country = React.lazy(() => import('./pages/Country'));

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='country/:name' element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
