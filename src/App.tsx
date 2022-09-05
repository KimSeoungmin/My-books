import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Deatil from './pages/Detail';
import Edit from './pages/Edit';
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';
import Add from './pages/Add';
import Error from './pages/Error';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (

    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <Routes>
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/book/:id' element={<Deatil />} />
          <Route path='/add' element={<Add />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<Home />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  ) 
}

export default App;
