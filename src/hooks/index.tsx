import React from 'react';

import { GameContextProvider } from './game';
import { CardContextProvider } from './card';

const AppContextProvider: React.FC = ({ children }) => (
  <CardContextProvider>
    <GameContextProvider>{children}</GameContextProvider>
  </CardContextProvider>
);

export default AppContextProvider;
