import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { AppBrowserRoutes } from './routes';

export function Routes() {
  return (
    <BrowserRouter>
      <AppBrowserRoutes />
    </BrowserRouter>
  );
}
