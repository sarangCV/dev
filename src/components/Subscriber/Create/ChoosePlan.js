import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {CalendarList} from 'react-native-calendars';
import {Button, Modal, Portal, Provider} from 'react-native-paper';

import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
// Importing assets
import bg from 'images/subscribers/create/bg_12.png';
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

const ChoosePlan = ({setPage, setImage, data}) => {
  const [visible, setVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [selectedPlanData, setSelectedPlanData] = useState('');

  const [selectedBand, setSelectedBand] = useState('');
  const [icCharge, setIcCharge] = useState('');

  const [planOpen, setPlanOpen] = useState(false);
  const [bandOpen, setBandOpen] = useState(false);

  const [selectedSalutation, setSelectedSalutation] = useState('');

  const dispatch = useDispatch();

  const isFirstRender = useRef(true);

  // Importing subscriberData state values from reducer
  const {createSubscriberInput, kycListData} = useSelector(subscriberSelector);
  const {plan, band_type} = createSubscriberInput;
  //  const {

  // } = createSubscriberInput;

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

  const country = [
    {name: 'India', slug: 'india'},
    {name: 'China', slug: 'china'},
  ];
  // const containerStyle = {backgroundColor: 'white', padding: 2};

  useEffect(() => {
    if (plan) {
      setSelectedPlan(plan),
        setSelectedPlanData(data?.plans?.filter(item => item.slug == plan));
    }
    if (band_type) {
      setSelectedBand(band_type), setSelectedPlan(plan);
    }
  }, [plan, band_type]);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  // On selecting subscriber salutation
  const subscriberSalutationHandler = value => {
    setSelectedSalutation(value);
  };

  const fatherSalutationHandler = () => {
    console.log('FATHER SALUTATION');
  };

  // On plan dropdown change
  const planChangeHandler = useCallback((type, value) => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // Ignore first call
    }
    console.log('PLAN CHANGE HANDLER');
    const filteredPlan = data?.plans?.filter(item => item.slug == value);
    setSelectedPlan(value);
    setSelectedPlanData(filteredPlan);
    setSelectedBand('');
    setIcCharge('');
  }, []);

  // On band dropdown change
  const bandChangeHandler = (type, value) => {
    console.log('BAND CHANGE HANDLER', selectedPlanData[0], value);

    const bandType =
      value == 'SINGLEBAND' ? 'single_band_ic_value' : 'dual_band_ic_value';
    const filtered = selectedPlanData && selectedPlanData[0][bandType];
    setIcCharge(Number(filtered));
  };

  const actionHandler = type => {
    const emptyCheck = validateEmptyValues({
      Plan: selectedPlan,
      Band: selectedBand,
    });
    if (emptyCheck.isValid) {
      dispatch(
        addCreateSubscriberInput({
          plan: selectedPlan,
          band_type: selectedBand,
        }),
      );
      setPage();
    } else {
      alert(`Please select a ${emptyCheck.emptyKey.toUpperCase()} `);
    }
  };
  console.log('FROM LOCAL STORAGE----------------->>', data);

  return (
    <>
      <ScrollView>
        <View style={styles.bgWrapper}>
          <Image style={styles.bg} source={bg} />
        </View>

        <View style={styles.body}>
          <View style={styles.layoutBg}></View>
          <View style={styles.content}>
            <Text style={styles.title}>Choose Plan</Text>
            <Text style={styles.description}>
              Loren ipsun dolor sit anet, consectetur
            </Text>
            {/* Form details */}
            <View style={styles.detailsWrapper}>
              {/* Select Plan */}
              <View style={styles.inputWrapper}>
                <View style={styles.row}>
                  <Text style={styles.asterikText}>* </Text>
                  <Text style={styles.dobLabel}>Select Plan</Text>
                </View>
                <View style={{flex: 1}}>
                  <DropdownPicker
                    schema={{
                      label: 'name',
                      value: 'slug',
                    }}
                    isOpen={planOpen}
                    disabled={false}
                    value={selectedPlan}
                    defaultValue={selectedPlan}
                    items={data?.plans}
                    // setItems={setCountryList}
                    setOpen={setPlanOpen}
                    setValue={setSelectedPlan}
                    type="enquiryType"
                    placeHolder="select"
                    dropDownMaxHeight={1000}
                    listMode={'MODAL'}
                    // error={''}
                    direction="TOP"
                    showIcon={true}
                    // changeItem={(type, value) => setSelectedPlan(value)}

                    changeItem={planChangeHandler}
                    // dropDownItemSelected={(value, type = 'district') =>
                    //   dropDownItemSelected(value, type)
                    // }
                    // onPress={(value, type = 'district') =>
                    //   dropDownPressed(type)
                    // }
                  />
                </View>
              </View>
              {/* Select Band Type */}
              <View style={styles.inputWrapper}>
                <View style={styles.row}>
                  <Text style={styles.asterikText}>* </Text>
                  <Text style={styles.dobLabel}>Select Band Type</Text>
                </View>
                <DropdownPicker
                  schema={{
                    label: 'name',
                    value: 'value',
                  }}
                  isOpen={bandOpen}
                  disabled={false}
                  value={selectedBand}
                  defaultValue={selectedBand}
                  items={data?.band_types}
                  // setItems={setCountryList}
                  setOpen={setBandOpen}
                  setValue={setSelectedBand}
                  type="enquiryType"
                  placeHolder="Select Band Type"
                  dropDownMaxHeight={1000}
                  // error={''}
                  direction="TOP"
                  showIcon={true}
                  // changeItem={(type, value) => setSelectedBand(value)}
                  changeItem={bandChangeHandler}
                  // dropDownItemSelected={(value, type = 'district') =>
                  //   dropDownItemSelected(value, type)
                  // }
                  // onPress={(value, type = 'district') =>
                  //   dropDownPressed(type)
                  // }
                />
              </View>
              {/* IC Charge */}
              <View style={styles.inputWrapper}>
                <Input
                  label="IC Charge"
                  placeholder={''}
                  labelColor={Colors.label2}
                  // doAction={text => onChangeValue('pincode', text)}
                  value={icCharge.toString()}
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
    </>
  );
};

export default ChoosePlan;

const styles = StyleSheet.create({
  bgWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    width: scaleSize(280),
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
    height: scaleSize(480),
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
  row: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  asterikText: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.red),
    marginRight: scaleSize(2),
  },
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
