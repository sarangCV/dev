import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {CalendarList} from 'react-native-calendars';
import {Button, Modal, Portal, Provider} from 'react-native-paper';

import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
// Importing assets
import bg from 'images/subscribers/create/bg_8.png';
import date from 'images/subscribers/create/date.png';

import Colors from 'constants/Colors';
import {WINDOW_HEIGHT, scaleSize} from 'utils/index';
import AccentButtonOne from 'components/Button/AccentButtonOne';
import Salutation from 'components/Subscriber/Create/Elements/Salutation';
import Input from 'components/Input';
import DropdownPicker from 'components/Input/DropdownPicker';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';
import {validateEmptyValues} from 'utils/Validator';
import {
  addCreateSubscriberInput,
  subscriberSelector,
} from 'features/Subscribers/SubscriberSlice';

const AgentDetails = ({setPage, data}) => {
  const [visible, setVisible] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState('');
  const [selectedAgentId, setSelectedAgentID] = useState('');
  const [selectedAgentDsa, setSelectedAgentDsa] = useState('');

  const [agentListOpen, setagentListOpen] = useState(false);
  const [selectedSalutation, setSelectedSalutation] = useState('');

  const dispatch = useDispatch();

  const country = [
    {name: 'India', slug: 'india'},
    {name: 'China', slug: 'china'},
  ];

  // Importing subscriberData state values from reducer
  const {subscriberCreateData, createSubscriberInput} =
    useSelector(subscriberSelector);

  const {agent} = createSubscriberInput;

  useEffect(() => {
    if (agent) setSelectedAgent(agent);
  }, []);

  // On change value of drop down
  const dropDownChange = (type, value) => {
    setSelectedAgent(value);
    const filtered = data && data.agents.filter(item => item.id == value);
    setSelectedAgentID(filtered[0]?.agent_id);
    setSelectedAgentDsa(filtered[0]?.name);
  };

  const actionHandler = type => {
    const emptyCheck = validateEmptyValues({selectedAgent});
    if (emptyCheck.isValid) {
      dispatch(
        addCreateSubscriberInput({
          agent: selectedAgent,
        }),
      );
      setPage();
    } else {
      alert('Please select an agent');
    }
  };

  console.log(
    'SUBSCRIBER DATA FROM IDENTITY SCREEN ===',
    createSubscriberInput,
  );
  return (
    <ScrollView>
      <View style={styles.bgWrapper}>
        <Image style={styles.bg} source={bg} />
      </View>
      <View style={styles.body}>
        <View style={styles.layoutBg}></View>
        <View style={styles.content}>
          <Text style={styles.title}>Agent Details</Text>
          <Text style={styles.description}>
            Loren ipsun dolor sit anet, consectetur
          </Text>
          {/* Form details */}
          <View style={styles.detailsWrapper}>
            {/* *Agent Firm Name */}
            <View style={styles.inputWrapper}>
              <Text style={styles.dobLabel}>
                {' '}
                <Text style={{color: 'red', marginRight: 3}}>*</Text>
                Agent Firm Name
              </Text>
              <DropdownPicker
                schema={{
                  label: 'firm_name',
                  value: 'id',
                }}
                isOpen={agentListOpen}
                disabled={false}
                value={selectedAgent}
                defaultValue={selectedAgent}
                items={data.agents}
                // setItems={setCountryList}
                setOpen={setagentListOpen}
                setValue={setSelectedAgent}
                type="enquiryType"
                placeHolder="name"
                dropDownMaxHeight={1000}
                // error={''}
                direction="TOP"
                showIcon={true}
                changeItem={dropDownChange}
                asterik
                // dropDownItemSelected={(value, type = 'district') =>
                //   dropDownItemSelected(value, type)
                // }
                // onPress={(value, type = 'district') =>
                //   dropDownPressed(type)
                // }
              />
            </View>
            {/* Agent Id */}
            <View style={styles.inputWrapper}>
              <Input
                label="Agent Id"
                placeholder={'ID'}
                labelColor={Colors.label2}
                // doAction={text => onChangeValue('pincode', text)}
                value={selectedAgentId}
                multiline={false}
                error={''}
                readonly={true}
                bgColor={'#fff'}
                height={45}
              />
            </View>
            {/* Agent/DSA */}
            <View style={styles.inputWrapper}>
              <Input
                label="Agent/DSA"
                placeholder={'Agent/DSA'}
                labelColor={Colors.label2}
                // doAction={text => onChangeValue('pincode', text)}
                value={selectedAgentDsa}
                multiline={false}
                error={''}
                readonly={true}
                bgColor={'#fff'}
                height={45}
              />
            </View>

            <View style={styles.actionWrapper}>
              <AccentButtonTwo title={'Proceed'} onPress={actionHandler} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AgentDetails;

const styles = StyleSheet.create({
  bgWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    width: scaleSize(240),
    height: scaleSize(240),
    resizeMode: 'contain',
  },
  body: {
    marginTop: scaleSize(20),
    flex: 1,
    zIndex: 999,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  layoutBg: {
    position: 'relative',
    backgroundColor: '#F5F6F8',
    // flex: 1,
    borderTopLeftRadius: scaleSize(550),
    borderTopRightRadius: scaleSize(550),
    height: 470,
    width: 550,
    overflow: 'hidden',
    marginLeft: scaleSize(-180),
    // alignItems: 'flex-end',
  },
  content: {
    position: 'absolute',
    top: 50,
    left: 20,
    // marginLeft: 185,
    // backgroundColor: 'red',
    width: scaleSize(320),
  },
  title: {
    ..._Text(FontSize.largeVariant12, Family.semibold, Colors.cancelBtn),
  },
  description: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.description_1),
    marginTop: scaleSize(5),
    opacity: 0.7,
    lineHeight: 22,
  },
  cameraIcon: {
    width: scaleSize(65),
    height: scaleSize(65),
    resizeMode: 'contain',
    marginLeft: scaleSize(10),
  },
  skipText: {
    ..._Text(FontSize.regularVariant, Family.semibold, Colors.description_1),
    opacity: 0.7,
    marginTop: scaleSize(33),
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    // backgroundColor: 'red',
    paddingBottom: 5,
    alignSelf: 'center',
  },
  salutationWrapper: {
    flexDirection: 'row',
    marginTop: scaleSize(10),
  },
  detailsWrapper: {
    // backgroundColor: 'red',
    // marginTop: scaleSize(10),
  },
  inputWrapper: {marginTop: scaleSize(10)},
  dobWrapper: {},
  dobLabel: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.label2),
    marginBottom: scaleSize(5),
  },
  dob: {
    backgroundColor: Colors.white,
    height: scaleSize(45),
    borderWidth: 1,
    borderColor: Colors.inputDefault,
    borderRadius: scaleSize(5),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaleSize(10),
  },
  dobText: {
    ..._Text(
      FontSize.smallVariantPlus,
      Family.semibold,
      Colors.placeholderColor,
    ),
  },
  dobIcon: {
    width: scaleSize(14),
    height: scaleSize(14),
  },
  fatherSalutaionWrapper: {
    borderWidth: 1,
    borderColor: Colors.inputDefault,
    borderRadius: scaleSize(5),
    paddingHorizontal: scaleSize(10),
    paddingBottom: scaleSize(10),
  },
  actionWrapper: {
    marginTop: scaleSize(50),
  },
});
