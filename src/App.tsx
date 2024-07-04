import React from 'react';
import Card from './components/Card';
import UserInfo from './components/UserInfo';


const App = () => {
  const users = [
    { name: 'Brad', age: 27, email: 'mcewen.brad30@gmail.com' },
    { name: 'Bradley', age: 30, email: 'mcewen.bradley30@gmail.com' }
  ];

  return (
    <div>
      <h1>User Information </h1>
      {users.map((user, index) => (
        <Card key={index}>
          <UserInfo name={user.name} age={user.age} email={user.email} />
          <img src='' alt='Too handsome for screen'></img>
        </Card>
      ))}
    </div>
  );
};

export default App;
