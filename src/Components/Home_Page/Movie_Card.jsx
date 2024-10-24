import React, { useEffect, useState } from 'react'; // Import useState
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Ensure FontAwesomeIcon is imported
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'; // Ensure these icons are imported
import './Card.css';
import Item_component from '../Film_item/item_component';
import Navbar from './Navbar';
import Film_item from '../Film_item/Film_item';


function Movie_Card({ object }) {
  
  const [itemClick,setClickItem]=useState("false");
  useEffect(() => {
    
}, [itemClick]);

  function handleItemClick(state,event)
  {
    event.preventDefault();
    setClickItem("true");
    sentDetails();
   
  }
 function sentDetails()
  { alert("ddd");
    
    <Film_item object={object}/>  }
 
  return (
    <>
      <div className='container1'>
        <div className="carousel-container-images">
          

          <div className="image-container">
            
              <img className="image-item" src={object.image} onClick={(event) => handleItemClick("true", event)} />
            
          </div>

          
        </div>
        <h5>{object.title}</h5>
        <p>{object.RealseDate}</p>
        <p>{object.Rating}</p>
      </div>
    </>
  );
}

export default Movie_Card;
