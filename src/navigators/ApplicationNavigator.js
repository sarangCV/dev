import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import PreAuthStack from './PreAuthStack'

const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <PreAuthStack />
    </NavigationContainer>
    
  )
}

export default ApplicationNavigator
