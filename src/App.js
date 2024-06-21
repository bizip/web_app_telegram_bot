/* eslint-disable arrow-spacing */
// eslint-disable-next-line import/no-extraneous-dependencies
import { WebAppProvider, useWebApp } from '@vkruglikov/react-telegram-web-app';
import './App.css';
import { useEffect } from 'react';

function App() {
  const WebApp = useWebApp();

  useEffect(()=>{
    WebApp.ready();
  }, [WebApp]);
  return (
    <WebAppProvider options={{ smoothButtonsTransition: true }}>
      <h1>Hello world</h1>
    </WebAppProvider>
  );
}

export default App;
