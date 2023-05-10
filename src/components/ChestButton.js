import React from 'react';
import chest from '../images/wow-treasure-chest-2.png';
import '../css/chest-button.css';

function ChestButton(props) {


  return (
    <>
      <img src={chest} alt='Chest' className='treasure-chest' onClick={props.onClick}/>
    </>
  );
}

export default ChestButton;