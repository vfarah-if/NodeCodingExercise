import React from 'react';

import Header from './components/Header';
import MarsRoverImages from './components/MarsRoverImages';

import './App.css';
import GameOfLife from './components/GameOfLife';

function App() {
  let user = undefined;
  const loginHandler = () => alert('OnLogin ...');
  const createAccountHandler = () => alert('createAccountHandler ...');

  return (
    <div className='App'>
      <Header
        user={user}
        onLogin={loginHandler}
        onCreateAccount={createAccountHandler}
      />
      <br />
      <MarsRoverImages />
      <GameOfLife
        gridColor='green'
        activeColor='green'
        backgroundColor='red'
        boardSize={20}
        cellSize={50}
        seedActivePositions={[
          { x: 9, y: 4 },
          { x: 8, y: 5 },
          { x: 9, y: 5 },
          { x: 10, y: 5 },
          { x: 7, y: 6 },
          { x: 8, y: 6 },
          { x: 9, y: 6 },
          { x: 10, y: 6 },
          { x: 11, y: 6 },

          { x: 9, y: 15 },
          { x: 8, y: 14 },
          { x: 9, y: 14 },
          { x: 10, y: 14 },
          { x: 7, y: 13 },
          { x: 8, y: 13 },
          { x: 9, y: 13 },
          { x: 10, y: 13 },
          { x: 11, y: 13 },
        ]}
        showCellInfo={false}
      />
    </div>
  );
}

export default App;
