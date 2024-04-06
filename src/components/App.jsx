import React from 'react';
import Profile from './profile/profile';
import user from './profile/user.json';
import Statistics from './statistics/statistics';
import data from './statistics/data.json';
import FriendList from './friendlist/friends';
import friends from './friendlist/friends.json';
import TransactionHistory from './transactions/transactions';
import transactions from './transactions/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
        paddingTop: 40,
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
