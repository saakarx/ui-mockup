import React from 'react';
import { Button } from 'react-bootstrap';
import { VscSignOut } from 'react-icons/vsc';

const User: React.FC = () => {
  const userImage =
    'https://images.unsplash.com/photo-1642599208526-cfc325049713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80';
  return (
    <div className="d-flex align-items-start gap-2 border-opacity-25 border-dark border-top py-3 px-3">
      <div className="avatar-container">
        <img className="user-avatar" src={userImage} alt="avatar" />
      </div>
      <div className="flex-grow-1">
        <p className="user-username fw-bold m-0">James Burton</p>
        <p className="user-email m-0">james@thevouch.digital</p>
      </div>
      <Button variant="">
        <VscSignOut />
      </Button>
    </div>
  );
};

export default User;
