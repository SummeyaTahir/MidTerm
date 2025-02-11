import React from 'react'
import "./Films_grid.css";
import Movie_Card from './Movie_Card';
function Films_Grid() {
    const Movies_data=[{
        image:"https://tse2.mm.bing.net/th?id=OIP.le_RFyGon3Tpg9M6hzLsIAHaFP&pid=Api&P=0&h=220",
        title:"Slient Voice",
        ReleaseDate:"1-2-2020",
        Rating:5,
        description:"        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cumque sequi provident distinctio excepturi quibusdam architecto, ea dolorem, consequuntur aliquam sapiente rem voluptas dignissimos? Vel ullam commodi recusandae harum! Nulla.        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cumque sequi provident distinctio excepturi quibusdam architecto, ea dolorem, consequuntur aliquam sapiente rem voluptas dignissimos? Vel ullam commodi recusandae harum! Nulla.        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cumque sequi provident distinctio excepturi quibusdam architecto, ea dolorem, consequuntur aliquam sapiente rem voluptas dignissimos? Vel ullam commodi recusandae harum! Nulla."
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
    <>
       <div>
      <div className="grid">
            {Movies_data.map((movie,index) => 
            (
              <Movie_Card key="index" object={movie}/>
            ))}
      </div>
    </div>
    </>
  )
}

export default Films_Grid
