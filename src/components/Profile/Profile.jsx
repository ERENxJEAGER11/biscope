import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/auth';

function Profile() {
  const {
    user: { username },
  } = useSelector(userSelector);
  return <>Profile - {username}</>;
}

export default Profile;
