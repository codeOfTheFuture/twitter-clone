import React from 'react';
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon
} from '@heroicons/react/outline';

interface Props {
  replyCount: number;
}

const TweetIcons: React.FC<Props> = ({ replyCount }) => {
  return (
    <div className='flex justify-between mt-5'>
      <div className='tweet-icon-wrapper'>
        <ChatAlt2Icon className='tweet-icon' />
        <span>{replyCount}</span>
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