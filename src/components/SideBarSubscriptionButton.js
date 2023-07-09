import React from 'react'

const SideBarSubscriptionButton = ({imageLink, channelName}) => {
  return (
    <li className="flex flex-row hover:bg-slate-100 rounded-lg p-2 m-1">
    <img
      className="mr-8 h-6 w-6 rounded-2xl mb-1 float-left"
      src= {imageLink}
    ></img>
    <h1 className="text-center text-sm mr-12">{channelName}</h1>
  </li>
  )
}

export default SideBarSubscriptionButton