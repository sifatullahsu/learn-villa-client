import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContextComp';


const GoogleSignIn = () => {

  const { userLogin } = useContext(AuthContext);

  // console.log(userLogin);

  const handleGoogleSignIn = (e) => {

  }

  return (
    <>
      <button onClick={handleGoogleSignIn}>Google</button>
    </>
  );
};

export default GoogleSignIn;