import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import {Button, Modal, Portal, Provider} from 'react-native-paper';
import {pick} from 'react-native-document-picker';

import {scaleSize} from 'utils/index';
import Colors from 'constants/Colors';
import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
import DropdownPicker from 'components/Input/DropdownPicker';
import Input from 'components/Input';
import upload from 'images/subscribers/create/upload_2.png';

const UploadMultipleModal = ({
  visible,
  hideModal,
  //   filePickerHandler,
  //   pickedFile,
  //   dropDownValue,
  //   setDropDownValue,
  //   dropDownChange,
  //   inputOnChangeValue,
  //   inputValue,
  //   type,
  passDocValues,
}) => {
  const [file, setFile] = useState([]);

  // File picker
  const filePickerHandler = async (id, attribute) => {
    try {
      const [pickResult] = await pick();
      if (pickResult.type !== 'image/jpeg' && pickResult.type !== 'image/png')
        return alert('Please upload a jpeg or png file');
      setFile(prev => [
        ...prev,
        {
          uri: pickResult.uri,
          name: pickResult.name,
          type: pickResult.type,
        },
      ]);
      // const [pickResult] = await pick({mode: 'import'}); // equivalent
      console.log('PICKED FILE IS -----', pickResult);
      // do something with the picked file
    } catch (err) {
      console.log(err);
      // see error handling
    }
  };

  // On modal dissmiss
  const modalDismissHandler = () => {
    hideModal();
    clearValues();
  };
  //   On submit
  const submitHandler = () => {
    passDocValues({file});
    hideModal();
    clearValues();
  };

  // Clear all the input values
  const clearValues = () => {
    setFile([]);
  };

  console.log('FROM MULTIPLE FILES==>>', file);

  // let data = {
  //   config: {
  //     data: {_parts: [Array]},
  //     env: {FormData: null},
  //     headers: {
  //       Accept: 'application/json, text/plain, */*',
  //       Authorization: 'Token 0lpjztdlvy2d97d',
  //       'Content-Type': 'multipart/form-data',
  //     },
  //     maxBodyLength: -1,
  //     maxContentLength: -1,
  //     method: 'post',
  //     timeout: 0,
  //     transitional: {
  //       clarifyTimeoutError: false,
  //       forcedJSONParsing: true,
  //       silentJSONParsing: true,
  //     },
  //     url: 'http://54.179.8.43:9090/api/mobile/app/subscriber/create/',
  //     xsrfCookieName: 'XSRF-TOKEN',
  //     xsrfHeaderName: 'X-XSRF-TOKEN',
  //   },
  //   data: {
  //     data: [
  //       'DOB: Date has wrong format. Use one of these formats instead: DD [Jan-Dec] YYYY, YYYY-MM-DD.',
  //       "ADDITIONAL_DOCS: [ErrorDetail(string='The submitted data was not a file. Check the encoding type on the form.', code='invalid')]",
  //     ],
  //     msg: 'ERROR',
  //     result: false,
  //   },
  //   headers: {
  //     allow: 'GET, POST, HEAD, OPTIONS',
  //     connection: 'keep-alive',
  //     'content-length': '265',
  //     'content-type': 'application/json',
  //     date: 'Thu, 17 Oct 2024 11:18:01 GMT',
  //     'referrer-policy': 'same-origin',
  //     server: 'nginx/1.14.0 (Ubuntu)',
  //     vary: 'Accept, Origin, Cookie',
  //     'x-content-type-options': 'nosniff',
  //     'x-frame-options': 'SAMEORIGIN',
  //   },
  //   request: {
  //     DONE: 4,
  //     HEADERS_RECEIVED: 2,
  //     LOADING: 3,
  //     OPENED: 1,
  //     UNSENT: 0,
  //     _aborted: false,
  //     _cachedResponse: undefined,
  //     _hasError: false,
  //     _headers: {
  //       accept: 'application/json, text/plain, */*',
  //       authorization: 'Token 0lpjztdlvy2d97d',
  //       'content-type': 'multipart/form-data',
  //     },
  //     _incrementalEvents: false,
  //     _lowerCaseResponseHeaders: {
  //       allow: 'GET, POST, HEAD, OPTIONS',
  //       connection: 'keep-alive',
  //       'content-length': '265',
  //       'content-type': 'application/json',
  //       date: 'Thu, 17 Oct 2024 11:18:01 GMT',
  //       'referrer-policy': 'same-origin',
  //       server: 'nginx/1.14.0 (Ubuntu)',
  //       vary: 'Accept, Origin, Cookie',
  //       'x-content-type-options': 'nosniff',
  //       'x-frame-options': 'SAMEORIGIN',
  //     },
  //     _method: 'POST',
  //     _perfKey:
  //       'network_XMLHttpRequest_http://54.179.8.43:9090/api/mobile/app/subscriber/create/',
  //     _performanceLogger: {
  //       _closed: false,
  //       _extras: [Object],
  //       _pointExtras: [Object],
  //       _points: [Object],
  //       _timespans: [Object],
  //     },
  //     _requestId: null,
  //     _response:
  //       '{"result":false,"msg":"ERROR","data":["DOB: Date has wrong format. Use one of these formats instead: DD [Jan-Dec] YYYY, YYYY-MM-DD.","ADDITIONAL_DOCS: [ErrorDetail(string=\'The submitted data was not a file. Check the encoding type on the form.\', code=\'invalid\')]"]}',
  //     _responseType: '',
  //     _sent: true,
  //     _subscriptions: [],
  //     _timedOut: false,
  //     _trackingName: 'unknown',
  //     _url: 'http://54.179.8.43:9090/api/mobile/app/subscriber/create/',
  //     readyState: 4,
  //     responseHeaders: {
  //       Allow: 'GET, POST, HEAD, OPTIONS',
  //       Connection: 'keep-alive',
  //       'Content-Length': '265',
  //       'Content-Type': 'application/json',
  //       Date: 'Thu, 17 Oct 2024 11:18:01 GMT',
  //       'Referrer-Policy': 'same-origin',
  //       Server: 'nginx/1.14.0 (Ubuntu)',
  //       Vary: 'Accept, Origin, Cookie',
  //       'X-Content-Type-Options': 'nosniff',
  //       'X-Frame-Options': 'SAMEORIGIN',
  //     },
  //     responseURL: 'http://54.179.8.43:9090/api/mobile/app/subscriber/create/',
  //     status: 400,
  //     timeout: 0,
  //     upload: {},
  //     withCredentials: true,
  //   },
  //   status: 400,
  //   statusText: undefined,
  // };

  return (
    <Modal
      visible={visible}
      onDismiss={modalDismissHandler}
      style={{paddingHorizontal: scaleSize(0)}}
      // contentContainerStyle={{backgroundColor: 'red'}}
    >
      <View style={styles.modalInnerWrapper}>
        <View style={styles.modalTitleWrapper}>
          <Text style={styles.modalTitle}>Upload Document</Text>
        </View>
        <View style={styles.modalBodyWrapper}>
          <TouchableOpacity
            style={styles.uploadButtonWrapper}
            onPress={filePickerHandler}>
            <Image style={styles.uploadIcon} source={upload} />
            <Text style={styles.uploadText}>Upload</Text>
          </TouchableOpacity>
          {/* {file && <Text style={styles.pickedFileNameText}>{file.name}</Text>} */}
          <View style={{marginVertical: scaleSize(10)}}>
            {file.map((item, index) => (
              <Text key={index.toString()} style={styles.pickedFileNameText}>
                {item.name}
              </Text>
            ))}
          </View>

          <TouchableOpacity
            disabled={file.length == 0}
            style={{
              ...styles.modalSubmitButtonWrapper,
              marginTop: !file.length == 0 ? scaleSize(20) : 0,
              backgroundColor:
                file.length == 0 ? Colors.drawerTextGrey : Colors.cancelBtn,
            }}
            onPress={submitHandler}>
            <Text style={styles.modalSubmitButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default UploadMultipleModal;

const styles = StyleSheet.create({
  // Modal
  modalInnerWrapper: {
    backgroundColor: 'white',
    marginHorizontal: scaleSize(20),
    borderRadius: scaleSize(12),
    overflow: 'hidden',
  },
  modalTitleWrapper: {
    backgroundColor: Colors.modalHeader,
    alignItems: 'center',
    paddingVertical: scaleSize(15),
  },
  modalTitle: {
    ..._Text(FontSize.regularVariantPlus, Family.semibold, Colors.userText),
  },
  dobLabel: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.label2),
    marginBottom: scaleSize(5),
  },
  modalBodyWrapper: {
    paddingHorizontal: scaleSize(35),
    paddingVertical: scaleSize(28),
  },
  inputWrapper: {marginBottom: scaleSize(10)},
  uploadButtonWrapper: {
    backgroundColor: Colors.bg_light,
    alignItems: 'center',
    paddingVertical: scaleSize(12),
    borderRadius: scaleSize(10),
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: Colors.border1,
    marginTop: scaleSize(10),
  },
  uploadIcon: {
    width: scaleSize(20),
    height: scaleSize(20),
    resizeMode: 'contain',
    marginBottom: scaleSize(3),
  },
  uploadText: {
    ..._Text(FontSize.smallVariant, Family.semibold, Colors.label2),
  },
  pickedFileNameText: {
    ..._Text(FontSize.small, Family.semibold, Colors.green),
    marginVertical: scaleSize(7),
  },
  modalSubmitButtonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scaleSize(15),
    paddingHorizontal: scaleSize(75),
    alignSelf: 'center',
    borderRadius: scaleSize(15),
  },
  modalSubmitButtonText: {
    ..._Text(FontSize.regular, Family.semibold, Colors.white),
  },
});
