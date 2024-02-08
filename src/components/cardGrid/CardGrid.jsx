import React from 'react';
import './CardGrid.css';
import Card from './Card';
import CardSec from './CardSec';

const CardGrid = () => {
  return (

    <div  className='makeitcenter'>

<div   className=" gridStyle">
      <Card/>
      <CardSec/>

      <Card/>         

      <CardSec/>


    </div>
    </div>

  );
}

export default CardGrid;
