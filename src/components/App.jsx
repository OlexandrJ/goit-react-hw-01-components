import React from 'react';
import Profile from './Profile/Profile';
import user from './Profile/user.json';
import data from './Statistic/data.json';
import Statistics from './Statistic/Statistics';
import friends from './Friends/friends.json';
import FriendList from './Friends/FriendList';
import transactions from './Transaction/transactions.json';
import TransactionHistory from './Transaction/TransactionHistory';

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
      <TransactionHistory items={transactions} />

    </div>
  );
};

export default App;