import React from 'react';
import './App.css';
import ChestButton from './components/ChestButton';
import RewardsContainer from './components/RewardsContainer';


function App() {

  const [viewRewards, reroll] = React.useState();

  function handleClick() {
    reroll(<RewardsContainer />);
  }

  return (
    <div className="App">
      <h1>Open your chest and see what you got!</h1>
      <ChestButton onClick={handleClick}/>
      {viewRewards}
      <p className='footer'>Made by Donnie D.</p>
    </div>
  );
}

export default App;
