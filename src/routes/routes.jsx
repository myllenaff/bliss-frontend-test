import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Questions } from '../pages/Questions';
import { Details } from '../pages/Details';
import { Loading } from '../pages/Loading';
import { Offline } from '../pages/Offline';
import { ErrorPage } from '../pages/ErrorPage';

export function AppBrowserRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Loading />} />
      <Route path='/questions' element={<Questions />} />
      <Route path='/details/:question_id' element={<Details />} />
      <Route path='/offline' element={<Offline />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}
