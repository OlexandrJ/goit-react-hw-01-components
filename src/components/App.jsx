import React from 'react';
import Profile from './Profile';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import Statistics from './Statistics';
import FriendList from './FriendList';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />

    </div>
  );
};



export default App;