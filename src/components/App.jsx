import React from 'react';
import Profile from './Profile';
import user from './user.json';
import data from './data.json';
import Statistics from './Statistics';

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
      <Statistics stats={data} />

    </div>
  );
};



export default App;