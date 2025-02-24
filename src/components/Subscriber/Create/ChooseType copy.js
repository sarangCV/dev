import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {_Text, commonStyles} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
// Importing assets
import bg_2 from 'images/subscribers/create/bg_2.png';
import Colors from 'constants/Colors';
import {scaleSize} from 'utils/index';
import AccentButtonOne from 'components/Button/AccentButtonOne';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
// import {addUserData} from 'features/Subscriber/SubscriberSlice';
import {RadioButton} from 'react-native-paper';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';
import Input from 'components/Input';
import DropdownPicker from 'components/Input/DropdownPicker';

const ChooseType = ({setPage}) => {
  const [individual, setIndividual] = useState(false);
  const [enterprise, setEnterprise] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  const dispatch = useDispatch();

  // TODO: Setting subscriber type to the state
  const actionHandler = type => {
    // dispatch(addUserData({connectionType: type}));
    setPage();
    // console.log('TYPE---', type);
  };

  const typePressHandler = () => {
    setIndividual(prev => !prev);
  };

  const enterprisePressHandler = () => {
    setEnterprise(prev => !prev);
  };

  console.log('RENDER!!!', individual);
  return (
    <>
      <ScrollView>
        <View style={styles.bgWrapper}>
          <Image style={styles.bg} source={bg_2} />
        </View>
        <View style={styles.body}>
          <View
            style={{
              ...styles.layoutBg,
              height: enterprise ? scaleSize(620) : scaleSize(380),
            }}></View>
          <View style={styles.content}>
            <Text style={styles.title}>Choose Type</Text>
            <Text style={styles.description}>
              Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod
              tenpor incidunt ut labore et dolore nagna aliqua.{' '}
            </Text>
            <DropdownPicker
              items={items}
              open={open}
              value={value}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
            <View style={{...commonStyles.row, ...styles.typeWrapper}}>
              {/* Radio */}
              <TouchableOpacity
                style={styles.radioWrapper}
                onPress={typePressHandler}>
                <RadioButton
                  value={individual}
                  status={individual ? 'checked' : 'unchecked'}
                  onPress={typePressHandler}
                  // style={{height: 5, width: 5}}
                />
                <Text style={styles.radioLabel}>Individual</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.radioWrapper}
                onPress={typePressHandler}>
                <RadioButton
                  value={individual}
                  status={!individual ? 'checked' : 'unchecked'}
                  onPress={typePressHandler}
                  style={{height: 10, width: 10}}
                />
                <Text style={styles.radioLabel}>Bulk/Corporate</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={commonStyles.row}
              onPress={enterprisePressHandler}>
              {/* Radio */}
              <View style={styles.radioWrapper}>
                <Text style={styles.radioLabel}>GST/Enterprise subscriber</Text>
                <RadioButton
                  value={enterprise}
                  status={enterprise ? 'checked' : 'unchecked'}
                  onPress={enterprisePressHandler}
                  style={{height: 10, width: 10}}
                />
              </View>
            </TouchableOpacity>

            {enterprise && (
              <View>
                {/* Billing Details */}
                <View style={styles.inputWrapper}>
                  <View style={styles.inputGroupWrapper}>
                    <Input
                      label="Name of GST Holder"
                      placeholder={''}
                      labelColor={Colors.label2}
                      // doAction={text => onChangeValue('pincode', text)}
                      // value={'pincode'}
                      multiline={false}
                      error={''}
                      readonly={false}
                      bgColor={'#fff'}
                      height={45}
                      asterik
                    />
                    <View style={{paddingVertical: scaleSize(5)}}></View>
                    <Input
                      label="GST Number"
                      placeholder={''}
                      labelColor={Colors.label2}
                      // doAction={text => onChangeValue('pincode', text)}
                      // value={'pincode'}
                      multiline={false}
                      error={''}
                      readonly={false}
                      bgColor={'#fff'}
                      height={45}
                      asterik
                    />
                    <View style={{paddingVertical: scaleSize(5)}}></View>

                    <Input
                      label="GST Registration Date"
                      placeholder={''}
                      labelColor={Colors.label2}
                      // doAction={text => onChangeValue('pincode', text)}
                      // value={'pincode'}
                      multiline={false}
                      error={''}
                      readonly={false}
                      bgColor={'#fff'}
                      height={45}
                      asterik
                    />
                  </View>
                </View>
              </View>
            )}

            <View style={styles.actionWrapper}>
              <AccentButtonTwo
                title={'Proceed'}
                onPress={() =>
                  actionHandler(individual ? 'individual' : 'corporate')
                }
              />
            </View>
          </View>

          {/* <AccentButtonOne
            title={'Individual Connection'}
            onPress={() => actionHandler('individual')}
          />
          <AccentButtonOne
            title={'Bulk/Corporate Connection'}
            onPress={() => actionHandler('corporate')}
          /> */}
        </View>
      </ScrollView>
    </>
  );
};

export default ChooseType;

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
    paddingRight: scaleSize(50),
  },

  typeWrapper: {
    backgroundColor: Colors.white,
    paddingHorizontal: scaleSize(15),
    borderRadius: scaleSize(10),
    marginVertical: scaleSize(10),
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scaleSize(5),
  },
  radioLabel: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.placeholderColor),
  },
  inputWrapper: {marginTop: scaleSize(12)},
  actionWrapper: {
    marginTop: scaleSize(20),
  },

  inputGroupWrapper: {
    borderWidth: 1,
    borderColor: Colors.inputDefault,
    borderRadius: scaleSize(5),
    paddingHorizontal: scaleSize(10),
    paddingVertical: scaleSize(10),
  },
});
