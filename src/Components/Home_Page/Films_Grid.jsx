import React from 'react'
import "./Films_grid.css";
function Films_Grid() {
    const Movies_data=[{
        image:"https://tse2.mm.bing.net/th?id=OIP.le_RFyGon3Tpg9M6hzLsIAHaFP&pid=Api&P=0&h=220",
        title:"Slient Voice",
        ReleaseDate:"1-2-2020",
        Rating:5,
    },
        {   image:"https://tse2.mm.bing.net/th?id=OIP.le_RFyGon3Tpg9M6hzLsIAHaFP&pid=Api&P=0&h=220",
            title:"One Piece",
            ReleaseDate:"1-2-2001",
            Rating:4,},
        {   image:"https://tse2.mm.bing.net/th?id=OIP.le_RFyGon3Tpg9M6hzLsIAHaFP&pid=Api&P=0&h=220",
            title:"Barbie by Disney",
            ReleaseDate:"1-2-2021",
            Rating:3,},
        {   image:"https://tse2.mm.bing.net/th?id=OIP.le_RFyGon3Tpg9M6hzLsIAHaFP&pid=Api&P=0&h=220",
            title:"Death Note",
            ReleaseDate:"1-2-2010",
            Rating:5,},
    ]
  return (
    <>
       <div>
      <div className="grid">
            {Movies_data.map((movie,index) => 
            (
              <Movie_Card key={index} object={movie}  />
            ))}
      </div>
    </div>
    </>
  )
}

export default Films_Grid
