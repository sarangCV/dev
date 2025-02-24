import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {authSelector} from 'features/Auth/AuthSlice';

// Logged in user type (admin / lco)
const userType = () => {
  const {userData} = useSelector(authSelector);
  console.log('FROM USR TYPE FUNC----', userData);

  if (userData.type == 'lco') {
    return 'lco';
  } else {
    return 'ADMIN';
  }
};

export default userType;
