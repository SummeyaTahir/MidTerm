import React from 'react'
import "./item.css";


function Item_component({object}) {

    
    const Movies_data=[{
        image:"https://tse2.mm.bing.net/th?id=OIP.le_RFyGon3Tpg9M6hzLsIAHaFP&pid=Api&P=0&h=220",
        title:"Slient Voice",
        ReleaseDate:"1-2-2020",
        Rating:5,
    },
        {   image:"https://tse2.mm.bing.net/th?id=OIP.le_RFyGon3Tpg9M6hzLsIAHaFP&pid=Api&P=0&h=220",
            title:"One Piece",
            ReleaseDate:"1-2-2001",
            Rating:4,
            id:1},
        {   image:"https://tse2.mm.bing.net/th?id=OIP.le_RFyGon3Tpg9M6hzLsIAHaFP&pid=Api&P=0&h=220",
            title:"Barbie by Disney",
            ReleaseDate:"1-2-2021",
            Rating:3,
            id:2},
        {   image:"https://tse2.mm.bing.net/th?id=OIP.le_RFyGon3Tpg9M6hzLsIAHaFP&pid=Api&P=0&h=220",
            title:"Death Note",
            ReleaseDate:"1-2-2010",
            Rating:5,
            id:3},
            {
                image:"https://tse2.mm.bing.net/th?id=OIP.le_RFyGon3Tpg9M6hzLsIAHaFP&pid=Api&P=0&h=220",
                title:"Slient Voice",
                ReleaseDate:"1-2-2020",
                Rating:5,
                id:4,
            },
                {   image:"https://tse2.mm.bing.net/th?id=OIP.le_RFyGon3Tpg9M6hzLsIAHaFP&pid=Api&P=0&h=220",
                    title:"One Piece",
                    ReleaseDate:"1-2-2001",
                    Rating:4,
                    id:5},
                {   image:"https://tse2.mm.bing.net/th?id=OIP.le_RFyGon3Tpg9M6hzLsIAHaFP&pid=Api&P=0&h=220",
                    title:"Barbie by Disney",
                    ReleaseDate:"1-2-2021",
                    Rating:3,
                    id:6},
                {   image:"https://tse2.mm.bing.net/th?id=OIP.le_RFyGon3Tpg9M6hzLsIAHaFP&pid=Api&P=0&h=220",
                    title:"Death Note",
                    ReleaseDate:"1-2-2010",
                    Rating:5,
                    id:7},
    ]
   
  return (
    <div>
      <div id="item_container">
        <div id="item_image">
        <img src="{object.image}"/>
        </div>
        <div id="item_description">
            <h1>object.title</h1>
            {object.description}
    
        </div>
      </div>
    </div>
  )
}

export default Item_component
