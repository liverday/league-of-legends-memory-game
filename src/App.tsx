import React from 'react';

import GlobalStyle from './styles/global';
import Game from './pages/Game';
import AppContextProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppContextProvider>
        <Game />
      </AppContextProvider>
    </>
  );
};

export default App;
