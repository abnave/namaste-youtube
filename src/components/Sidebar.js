import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);
  //early return
  if(!isMenuOpen) return null;
  return (
    <div className='p-2 m-2 shadow-lg w-48'>
      <Link to="/"><h1>Home</h1></Link>
      <h1 className='font-bold'>Subscriptions</h1>
      <ul>
        <li> Channel 1</li>
        <li> Channel 2</li>
        <li> Channel 3</li>
        <li> Channel 4</li>
        <li> Channel 5</li>
      </ul>
      <h1 className='font-bold pt-5'>Liked Videos</h1>
      <ul>
        <li> LV 1</li>
        <li> LV 2</li>
        <li> LV 3</li>
        <li> LV 4</li>
        <li> LV 5</li>
      </ul> 
      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li> Trending</li>
        <li> Shopping</li>
        <li> Music</li>
        <li> Live</li>
        <li> Gaming</li>
      </ul>
    </div>
  )
}

export default Sidebar