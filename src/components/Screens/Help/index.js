import { useNavigation, useRoute } from '@react-navigation/native'
import Colors from 'constants/Colors'
import {Family, FontSize} from 'constants/Fonts';
import {Rounded, Spacing} from 'constants/Layout';
import RechargeListJson from 'data/NotificationList/RechargeListJson'
import React, {useState} from 'react';
import {ScrollView, StatusBar} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  Pressable,
} from 'react-native';
import FastImage from 'react-native-fast-image'
import { useDispatch } from 'react-redux'
import {_Button, _Row, _Text} from 'styles/index';
import {isIOS, scaleSize, WINDOW_WIDTH} from 'utils/index';
import Input from 'components/Input';

import Screens from 'navigators/index'
import Button from 'components/Button';
import ButtonTypes from 'constants/ButtonTypes';
import ButtonSizes from 'constants/ButtonSizes';
import { TouchableOpacity } from 'react-native'

import { FlatList } from 'react-native'
import PopularCategoryList from 'data/PopularCategoryList';
import SRCard from 'components/Card/Help';
import SRCardListJson from 'data/SRCardListJson';
import DropdownPicker from 'components/Input/DropdownPicker'
import CategoryTypes from 'data/CategoryType'
import DropDownPicker from 'react-native-dropdown-picker';

const HelpView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();

  const [categoryTypeOpen, setCategoryTypeOpen] = useState(false);
  const [categoryType, setCategoryType] = useState('');
  const [categoryTypes, setCategoryTypes] = useState(CategoryTypes);
  const [categoryTypeError, setCategoryTypeError] = useState('');
  const [details, setDetails] = useState('');
  const [detailsError, setDetailsError] = useState('');

  const navigateBack = () => {
    navigation.goBack()
  }

  const doItemChange = (type, item) => {
    setCategoryType(item)
  }

  const onChangeValue = (type, text) => {
    switch (type) {
      case 'Details':
        setDetails(text)
        break
    }
  }
  return (
    <View style={[styles.wrapper]}>
      <StatusBar backgroundColor={Colors.cancelBtn} barStyle="light-content" />
      <View style={styles.header}>
        <Pressable onPress={() => navigateBack()}>
          <FastImage
            source={require('../../../images/back.png')}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.icon}
          />
        </Pressable>
        <Text style={styles.headerText}>Help & Support</Text>
        <Pressable onPress={() => navigation.navigate(Screens.NOTIFICATION)}>
          <FastImage
            source={require('../../../images/Home/notification_2.png')}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.icon}
          />
        </Pressable>
      </View>
      <View style={styles.contentStyle}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          data={SRCardListJson}
          horizontal={true}
          renderItem={({ item, index }) => (
            <SRCard
              item={item}
              itemIndex={index}
              //   doAction={() => gotoDetailView(item)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          //   ListFooterComponent={() => renderFooter()}
          //   onEndReachedThreshold={0}
          //   onEndReached={() => LoadMore()}
        />
    
        <View style={[styles.inputRow, { zIndex: isIOS ? 40 : undefined }]}>
          <Text style={styles.labelText}>Choose service type</Text>

          <DropdownPicker
            isOpen={categoryTypeOpen}
            disabled={false}
            value={categoryType}
            defaultValue={categoryType}
            items={CategoryTypes}
            setOpen={setCategoryTypeOpen}
            setValue={setCategoryType}
            setItems={setCategoryType}
            type="categoryType"
            placeHolder="Category"
            dropDownMaxHeight={1000}
            error={categoryTypeError}
            direction="BOTTOM"
            showIcon={true}
            changeItem={doItemChange}
          />
        </View>

        <View style={{ ...styles.inputRow, marginTop: -20}}>
          <Input
            placeholder={'Details'}
            labelColor={Colors.labelTextColor}
            doAction={text => onChangeValue('Details', text)}
            value={details}
            multiline={true}
            error={detailsError}
            readonly={false}
          />
        </View>

        <View style={{...styles.inputRow, paddingVertical: Spacing.medium}}>
          <Pressable
        //   onPress={() => doSubmit()}
            style={styles.buttonContainerStyle}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default HelpView

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
  },
  //   bodyView: {
  //     flex: 1,
  //     padding: Spacing.medium,
  //   },

  contentStyle: {
    flexDirection: 'column',
    padding: 10,
  },
  image: {
    alignSelf: 'center',
    width: 350,
    height: 350,
  },

  header: {
    flexDirection: 'row',
    padding: Spacing.largeVariant2,
    backgroundColor: Colors.cancelBtn,
    ..._Row,
    alignItems: 'center',
    width: WINDOW_WIDTH,
  },
  icon: {
    alignSelf: 'flex-start',
    width: scaleSize(25),
    height: scaleSize(25),
    flex: 1,
  },
  headerText: {
    ..._Text(FontSize.regularVariantPlus, Family.bold, Colors.white),
    paddingHorizontal: Spacing.small,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    marginLeft: 60,
  },
  formContainer: {
    marginEnd: Spacing.large,
    marginStart: Spacing.large,
  },

  labelText: {
    ..._Text(FontSize.xs, Family.robotoMedium, Colors.labelTextColor),
    paddingBottom: Spacing.xs,
  },
  buttonContainerStyle: {
    borderRadius: Rounded.smallVariant,
    backgroundColor: Colors.disablebtn,
    height: '30%',
  },
  buttonText: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: Family.bold,
    fontSize: FontSize.regular,
    color: Colors.white,
    marginTop: 15,
  },
  inputRow: {
    marginBottom: Spacing.small,
    marginTop: 20,
    padding: 10,
  },
})
