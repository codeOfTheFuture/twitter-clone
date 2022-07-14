import React from 'react';
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon
} from '@heroicons/react/outline';

const TweetIcons: React.FC = () => {
  return (
    <div className='flex justify-between mt-5'>
      <div className='tweet-icon-wrapper'>
        <ChatAlt2Icon className='tweet-icon' />
        <span>5</span>
      </div>
      <div className='tweet-icon-wrapper'>
        <SwitchHorizontalIcon className='tweet-icon' />
      </div>
      <div className='tweet-icon-wrapper'>
        <HeartIcon className='tweet-icon' />
      </div>
      <div className='tweet-icon-wrapper'>
        <UploadIcon className='tweet-icon' />
      </div>
    </div>
  )
}

export default TweetIcons;