import React from 'react'
import Rotas from './routes'
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <div  >
      <HashRouter>
        <Rotas />
      </HashRouter>
    </div>

  
  );
}

export default App;
