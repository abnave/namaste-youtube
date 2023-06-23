import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div className='col-span-11'><ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer
//"YouTube Data API v3 has not been used in project 87486206446 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=87486206446 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry."