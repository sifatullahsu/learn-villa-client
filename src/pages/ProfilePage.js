import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContextComp';


const ProfilePage = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const { displayName, email, photoURL } = user;

  const navigate = useNavigate();

  const handleAccountInfo = event => {
    event.preventDefault();

    const form = event.target;
    const displayName = form.displayName.value;
    const photoURL = form.photoURL.value;

    if (user.displayName !== displayName && user.photoURL !== photoURL) {
      updateUserProfile({ displayName, photoURL })
        .then(res => {
          toast.success('Display Name Updated');
          toast.success('Photo URL Updated');
          navigate('/');
        })
        .catch(err => {
          toast.error('Display Name Not Updated');
          toast.error('Photo URL Not Updated');
        })
    }

    else if (user.displayName !== displayName) {
      updateUserProfile({ displayName })
        .then(res => {
          toast.success('Display Name Updated');
          navigate('/');
        })
        .catch(err => {
          toast.error('Display Name Not Updated');
        })
    }

    else if (user.photoURL !== photoURL) {
      updateUserProfile({ photoURL })
        .then(res => {
          toast.success('Photo URL Updated');
          navigate('/');
        })
        .catch(err => {
          toast.error('Photo URL Not Updated');
        })
    }

    else {
      toast.warn('You did not changed anything!');
    }

  }

  return (
    <div className='container py-5 profile'>
      <div>
        <img src={photoURL ? photoURL : '../images/user.png'} className='rounded-circle mb-2' style={{ width: '50px' }} alt="" />
        <h5>{displayName}</h5>
        <div>{email}</div>
      </div>

      <div>
        <h5 className='my-3'>Account Informations:</h5>
        <Form onSubmit={handleAccountInfo}>
          <Form.Group className="form-group form-box clearfix mb-3" controlId="accout-name">
            <Form.Label className='text-muted'>Full Name</Form.Label>
            <Form.Control name="displayName" type="text" placeholder="Email" defaultValue={user.displayName} />
          </Form.Group>

          <Form.Group className="form-group form-box clearfix mb-3" controlId="accout-email">
            <Form.Label className='text-muted'>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Email" defaultValue={user.email} readOnly />
            <Form.Text className="text-muted">
              This is readonly field.
            </Form.Text>
          </Form.Group>

          <Form.Group className="form-group form-box clearfix mb-3" controlId="accout-photo-url">
            <Form.Label className='text-muted'>Photo URL</Form.Label>
            <Form.Control name="photoURL" type="text" placeholder="Photo URL" defaultValue={user.photoURL} />
          </Form.Group>

          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-sm btn-theme">Update</button>
          </div>
        </Form>
      </div>

    </div>
  );
};

export default ProfilePage;