import React from 'react'

const SidebarNavButton = ({imageLink, name}) => {
  return (
    <li className="flex flex-row hover:bg-slate-100 rounded-lg p-2 m-1">
    <img
      className="mr-8 h-4 mb-1 float-left"
      src= {imageLink}
    ></img>
    <h1 className="text-center text-sm mr-12">{name}</h1>
  </li>
  )
}

export default SidebarNavButton