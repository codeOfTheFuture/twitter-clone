import React, { FC } from 'react';
import { Tweet } from '../types/typings';
import TweetComponent from '../components/Tweet';

interface Props {
  tweets: Tweet[];
}

const Tweets: FC<Props> = ({ tweets }) => {
  console.log(tweets);
  return (
    <div>
      {tweets?.map((tweet, i) => (
        <TweetComponent key={i} tweet={tweet} />
      ))}
    </div>
  )
}

export default Tweets;