import React from 'react'
import Navbar from '../Home_Page/Navbar'
import Item_component from './item_component'

function Film_item({object}) {
  return (
    <div>
      <Navbar/>
      <Item_component object={object}/>
    </div>
  )
}

export default Film_item
