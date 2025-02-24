import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {commonStyles} from 'styles/';

const Error = ({children}) => {
  return (
    <View>
      <Text style={commonStyles.error}>{children}</Text>
    </View>
  );
}

Error.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Error;
