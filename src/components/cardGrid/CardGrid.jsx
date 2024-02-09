import React from 'react';
import './CardGrid.css';
import Card from './Card';
import CardSec from './CardSec';
import image1 from "../../Assets/images/card1.png"
import image2 from "../../Assets/images/Card2.png"

import image3 from "../../Assets/images/Card4.png"

const CardGrid = () => {
  return (

    <div  className='makeitcenter'>

<div   className=" gridStyle">
    <div style={{display:"flex",justifyContent:"center"}}>
    <CardSec image={image1} title="500 coins" disc="Membership Benefits"/>

    </div>
    <div style={{display:"flex",justifyContent:"center"}}>
    <Card  image={image2} title="Upto Peace Coins" disc="Against dollar spend" />         

    </div>

      <div style={{display:"flex",justifyContent:"center"}}>
      <CardSec  image={image3} title="Every purchase" disc="With every purchase you make, you earn peace coins"/> 

      </div>



    </div>
    </div>

  );
}

export default CardGrid;
