import React from 'react';
import {View} from 'react-native';
import {scaleSize} from 'utils/index';

const HorizontalLine = ({marginStyle = 10}) => {
  return (
    <View
      style={{
        borderBottomColor: '#272727',
        borderBottomWidth: 0.25,
        marginLeft: 20,
        marginRight: 30,
        opacity: 0.155,
        margin: scaleSize(marginStyle),
        backgroundColor: 'blue',
      }}
    />
  );
};

export default HorizontalLine;
