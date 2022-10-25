import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContextComp';


const GitHubSignIn = () => {

  const { userLogin } = useContext(AuthContext);

  // console.log(userLogin);

  const handleGithubSignIn = () => {

  }

  return (
    <>
      <button onClick={handleGithubSignIn}>GitHub</button>
    </>
  );
};

export default GitHubSignIn;