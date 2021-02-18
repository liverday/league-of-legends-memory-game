import React from 'react';

import GlobalStyle from './styles/global';
import Game from './pages/Game';
import { CardContextProvider } from './hooks/card';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <CardContextProvider>
        <Game />
      </CardContextProvider>
    </>
  );
};

export default App;
