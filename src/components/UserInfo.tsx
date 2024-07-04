import React from 'react';

interface UserInfoProps {
  name: string;
  age: number;
  email: string;
}

const UserInfo = ({ name, age, email }: UserInfoProps) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserInfo;
