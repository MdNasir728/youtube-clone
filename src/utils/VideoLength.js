import React from 'react'
import moment from 'moment'

const VideoLength = ({seconds}) => {
  const duration = moment?.duration(seconds, "seconds");
  const formatted= moment?.utc(duration.asMilliseconds()).format("HH:mm:ss");
  return (
    <div className='videolength' >
      {formatted}
    </div>
  )
}

export default VideoLength

