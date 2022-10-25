import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContextComp';


const GitHubSignIn = ({ from }) => {

  const { userSocialLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGithubSignIn = () => {
    userSocialLogin('github')
      .then(res => {
        toast.success('Successfully logged in!!');
        navigate(from);
      })
      .catch(err => {
        toast.error('Something is wrong!!');
      })
  }

  return (
    <>
      <button onClick={handleGithubSignIn}>GitHub</button>
    </>
  );
};

export default GitHubSignIn;