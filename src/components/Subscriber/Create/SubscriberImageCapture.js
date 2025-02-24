import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';

import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
// Importing assets
import bg_4 from 'images/subscribers/create/bg_4.png';
import camera_icon from 'images/subscribers/create/camera.png';
import retry_icon from 'images/subscribers/create/retry.png';
import upload_icon from 'images/subscribers/create/upload.png';

import Colors from 'constants/Colors';
import {scaleSize} from 'utils/index';
import AccentButtonOne from 'components/Button/AccentButtonOne';
// import {
//   addUserData,
//   subscriberSelector,
// } from 'features/Subscriber/SubscriberSlice';

const SubscriberImageCapture = ({setPage, setImage}) => {
  const dispatch = useDispatch();

  // Subscriber data
  // const {userData} = useSelector(subscriberSelector);
  // Extracting userData
  // const {userImage} = userData;

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        // setImage(imageUri);
        console.log(response);
        // dispatch(addUserData({userImage: imageUri}));
      }
    });
  };

  console.log('USER DATA FROM IMAGE', userData.userImage);
  return (
    <>
      <View style={styles.bgWrapper}>
        <Image
          style={userImage ? styles.profilePic : styles.bg}
          source={userImage ? {uri: userImage} : bg_4}
          // source={{
          //   uri: 'file:///data/user/0/com.asianet_lco/cache/rn_image_picker_lib_temp_28ee6f87-db19-487e-841d-c66138163726.jpg',
          // }}
          // source={bg_4}
        />
      </View>
      <View style={styles.textWrapper}>
        <View style={styles.layoutBg}></View>
        <View style={styles.content}>
          <Text style={styles.title}>Capture Image</Text>
          <Text style={styles.description}>
            Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod
            tenpor incidunt ut labore et dolore nagna aliqua.{' '}
          </Text>
        </View>
        {userImage ? (
          <View style={{...styles.actionWrapper, flexDirection: 'row'}}>
            <TouchableOpacity onPress={handleCameraLaunch}>
              <Image
                source={retry_icon}
                style={{...styles.cameraIcon, marginLeft: scaleSize(10)}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={setPage}>
              <Image
                source={upload_icon}
                style={{...styles.cameraIcon, marginLeft: scaleSize(10)}}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.actionWrapper}>
            <TouchableOpacity onPress={handleCameraLaunch}>
              <Image source={camera_icon} style={styles.cameraIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={setPage}>
              <Text style={styles.skipText}>Do later</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};

export default SubscriberImageCapture;

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
  profilePic: {
    width: scaleSize(160),
    height: scaleSize(180),
    borderRadius: scaleSize(30),
    resizeMode: 'contain',
    marginTop: scaleSize(15),
  },
  textWrapper: {
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
    borderRadius: scaleSize(550),
    height: 550,
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
    width: scaleSize(250),
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
  actionWrapper: {
    // backgroundColor: 'red',
    position: 'absolute',
    // width: scaleSize(280),
    bottom: 20,
  },
  cameraIcon: {
    width: scaleSize(65),
    height: scaleSize(65),
    resizeMode: 'contain',
    // marginLeft: scaleSize(10),
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
});
