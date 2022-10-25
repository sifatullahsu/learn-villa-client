import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContextComp';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h3>{user?.displayName}</h3>
      <div>{user?.email}</div>
    </div>
  );
};

export default ProfilePage;