import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
// Importing assets
import bg from 'images/subscribers/hardware_network/bg.png';

import Colors from 'constants/Colors';
import {WINDOW_HEIGHT, scaleSize} from 'utils/index';

import Input from 'components/Input';
import DropdownPicker from 'components/Input/DropdownPicker';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';
import Header from 'components/Header';
import HardwareAndNetworkDetails from 'components/HardwareAndNetwork/HardwareAndNetworkDetails';
import GponDetails from 'components/HardwareAndNetwork/GponDetails';
import CustomerPremises from 'components/HardwareAndNetwork/CustomerPremises';

const HardwareAndNetwork = () => {
  const [visible, setVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryListOpen, setCountryListOpen] = useState(false);
  const [centerOpen, setCenterOpen] = useState(false);
  const [selectedSalutation, setSelectedSalutation] = useState('');
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const calendarRef = useRef();

  // Salutation list
  const salutation = [
    {id: 1, title: 'Mr'},
    {id: 2, title: 'Ms'},
    {id: 3, title: 'Dr'},
    {id: 4, title: 'M/S'},
  ];

  const gender = [
    {id: 1, title: 'Male'},
    {id: 2, title: 'Female'},
    {id: 3, title: 'Other'},
  ];

  // const containerStyle = {backgroundColor: 'white', padding: 2};

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  // On selecting subscriber salutation
  const subscriberSalutationHandler = value => {
    setSelectedSalutation(value);
  };

  const fatherSalutationHandler = () => {};

  const pageHandler = () => {
    console.log('PRESSED');
    setPage(prev => prev + 1);
  };

  // Seperating pages for longer forms
  const renderPage = () => {
    switch (page) {
      case 1:
        return <HardwareAndNetworkDetails setPage={pageHandler} />;
      case 2:
        return <GponDetails setPage={pageHandler} />;
      case 3:
        return <CustomerPremises setPage={pageHandler} />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header section */}
      <Header title={'Hardware and Network Details'} wallet={true} />
      <View style={styles.content}>{renderPage()}</View>
    </View>
  );
};

export default HardwareAndNetwork;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
});
