import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Dashboard = React.lazy(() => import("./Components/Dashboard"));
const Landing = React.lazy(() => import("./Components/Landing"));

import Navbar from './Components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <div>
          <Routes>
            <Route path="/dashboard" element={<Suspense fallback={"...loading"}><Dashboard /></Suspense>} />
            {/* why suspense --> in lazy routing , it takes time to fetch the bundle (may be 2s or 10s depends on net speed) 
            hence we use suspense api , which is used for async data fetching , while it loads it will show ...loading */}
            <Route path="/landing" element={<Suspense fallback={"...loading"}><Landing/></Suspense>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

//using lazy loading
// in normal or client side loading -- whole client bundle is geven at once 
// , and with routing we tarverse different pages
// however in lazy loading, we only give the bundle , when asked for or when needed 
//there is no need to guve the whole bundle at once but rather in parsts when needed