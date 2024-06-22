/* eslint-disable arrow-spacing */
// eslint-disable-next-line import/no-extraneous-dependencies
import { WebAppProvider, useWebApp } from '@vkruglikov/react-telegram-web-app';
import './App.css';
import { useEffect } from 'react';
import Board from './component/Board';

function App() {
  const WebApp = useWebApp();

  useEffect(()=>{
    WebApp.ready();
  }, [WebApp]);
  return (
    <WebAppProvider options={{ smoothButtonsTransition: true }}>
      <div className="game_container">
        <div className="game-board">
          <h3 className="game-board-title">Classic Tic-Tac-Toe Battle</h3>
          <Board />
        </div>
      </div>
    </WebAppProvider>
  );
}

export default App;
