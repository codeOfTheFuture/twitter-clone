import React from 'react';
import { Tweet } from '../types/typings';
import TweetComponent from '../components/Tweet';

interface Props {
  tweets: Tweet[];
}

const Tweets: React.FC = () => {
  return (
    <div>
      {/* {tweets.map(tweet => (
        <TweetComponent key={tweet._id} tweet={tweet} />
      ))} */}
    </div>
  )
}

export default Tweets;