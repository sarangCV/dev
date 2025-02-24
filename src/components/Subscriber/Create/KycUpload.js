import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {CalendarList} from 'react-native-calendars';
import {Button, Modal, Portal, Provider} from 'react-native-paper';
import {pick} from 'react-native-document-picker';

import {_Text} from 'styles/index';
import {Family, FontSize} from 'constants/Fonts';
// Importing assets
import bg from 'images/subscribers/create/bg_11.png';
import upload from 'images/subscribers/create/upload_2.png';
import kyc_1 from 'images/subscribers/create/kyc_4.png';
import kyc_2 from 'images/subscribers/create/kyc_2.png';
import kyc_3 from 'images/subscribers/create/kyc_3.png';
import kyc_4 from 'images/subscribers/create/rc_image.png';
import file from 'images/subscribers/file.png';
import uploaded from 'images/subscribers/create/uploaded.png';

import Colors from 'constants/Colors';
import {WINDOW_HEIGHT, scaleSize} from 'utils/index';
import AccentButtonOne from 'components/Button/AccentButtonOne';
// import {
//   addUserData,
//   subscriberSelector,
// } from 'features/Subscriber/SubscriberSlice';
import Salutation from 'components/Subscriber/Create/Elements/Salutation';
import Input from 'components/Input';
import DropdownPicker from 'components/Input/DropdownPicker';
import AccentButtonTwo from 'components/Button/AccentButtonTwo';
import KycCard from './Elements/KycCard';
import {commonStyles} from 'styles/index';
import {
  addCreateSubscriberInput,
  addKycListData,
  subscriberSelector,
} from 'features/Subscribers/SubscriberSlice';
import UploadModal from './UploadModal';
import UploadMultipleModal from './UploadMultipleModal';
import UploadSignatureModal from './UploadSignatureModal';

// import kyc_1 from 'images/subscribers/create/kyc_1.png';

const KycUpload = ({setPage, setImage, data}) => {
  const [idProofVisible, setIdProofVisible] = useState(false);
  const [addressProofVisible, setAddressProofVisible] = useState(false);
  const [signatureModalVisible, setSignatureModalVisible] = useState(false);
  const [multipleFilesModalVisible, setMultipleFilesModalVisible] =
    useState(false);

  const [values, setValues] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryListOpen, setCountryListOpen] = useState(false);
  const [selectedSalutation, setSelectedSalutation] = useState('');
  const [centerOpen, setCenterOpen] = useState(false);
  const [pickedFile, setPickedFile] = useState('');
  const [typeId, setTypeId] = useState('');
  // KYC list
  const [kycList, setKycList] = useState({
    1: {id: 1, title: 'Signature', img: kyc_1, uploaded: false},
    2: {
      id: 2,
      title: 'ID Proof',
      img: kyc_3,
      uploaded: false,
      idType: '',
      idDocNumber: '',
      idProof: '',
      idProofBack: '',
    },
    3: {
      id: 3,
      title: 'Address Proof',
      img: kyc_2,
      uploaded: false,
      addressType: '',
      addressDocNumber: '',
      addressProof: '',
    },
    4: {id: 4, title: 'Image', img: kyc_4, uploaded: false},
  });

  const dispatch = useDispatch();

  // Importing subscriberData state values from reducer
  const {createSubscriberInput, kycListData} = useSelector(subscriberSelector);

  const {
    additional_docs,
    addr_doc_num,
    addr_proof,
    addr_type_doc,
    id_doc_num,
    id_proof,
    id_proof_back,
    id_type_doc,
    subscriber_image,
    subscriber_signature,
  } = createSubscriberInput;

  // Set pre filled value in take a look back
  useEffect(() => {
    if (Object.keys(kycListData).length !== 0) setKycList(kycListData);
    if (additional_docs)
      setValues(prev => ({
        ...prev,
        additionalDocs: additional_docs,
      }));
    if (addr_doc_num)
      setValues(prev => ({
        ...prev,
        addressDocNumber: addr_doc_num,
      }));
    if (addr_proof)
      setValues(prev => ({
        ...prev,
        addressProof: addr_proof,
      }));
    if (addr_type_doc)
      setValues(prev => ({
        ...prev,
        addressType: addr_type_doc,
      }));
    if (id_doc_num)
      setValues(prev => ({
        ...prev,
        idDocNumber: id_doc_num,
      }));
    if (id_proof)
      setValues(prev => ({
        ...prev,
        idProof: id_proof,
      }));
    if (id_proof_back)
      setValues(prev => ({
        ...prev,
        idProofBack: id_proof_back,
      }));
    if (id_type_doc)
      setValues(prev => ({
        ...prev,
        idType: id_type_doc,
      }));
    if (subscriber_image)
      setValues(prev => ({
        ...prev,
        subscriberImage: subscriber_image,
      }));
    if (subscriber_signature)
      setValues(prev => ({
        ...prev,
        subscriberSignature: subscriber_signature,
      }));
  }, []);

  // const containerStyle = {backgroundColor: 'white', padding: 2};
  const modalHandler = id => {
    const types = {
      1: () => setSignatureModalVisible(true),
      2: () => setIdProofVisible(true),
      3: () => setAddressProofVisible(true),
      5: () => setMultipleFilesModalVisible(true),
    };
    if (types[id]) {
      types[id]();
    }
  };

  const hideModal = id => {
    const types = {
      1: () => setSignatureModalVisible(false),
      2: () => setIdProofVisible(false),
      3: () => setAddressProofVisible(false),
      5: () => setMultipleFilesModalVisible(false),
    };
    if (types[id]) {
      types[id]();
    }
  };

  // Setting the state according to the type
  const documentHandler = type => {
    if (type == 5)
      if (values['additionalDocs'])
        alert('Your previosly added docs will be replaced');
    setTypeId(type);
    if (type == 4) return handleCameraLaunch(type);
    modalHandler(type);
  };

  // Camera handler
  const handleCameraLaunch = id => {
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
        const image = response.assets[0];
        console.log(response.assets?.[0]);
        const fileData = {
          uri: imageUri,
          name: image.fileName,
          type: image.type,
        };
        // dispatch(addCreateSubscriberInput({subscriber_image: fileData}));
        // let temp = {...kycList};
        // temp[id].uploaded = true;
        // temp[id].file = fileData;
        setKycList(prev => ({...prev, 4: {...prev[4], uploaded: true}}));
        setValues(prev => ({...prev, subscriberImage: fileData}));
        console.log('ID-----------------', id);
      }
    });
  };

  // Pass the values from upload modal component
  const filterValues = (values, id) => {
    // console.log('FROM KYC CHILD===>>>', values);
    const types = {
      // Signature
      1: () => ({
        subscriberSignature: values['file'] || '',
      }),
      // Id proof
      2: () => ({
        idType: values['dropDownValue'] || '',
        idDocNumber: values['inputValue'] || '',
        idProof: values['file'][0] || '',
        idProofBack: values['file'][1] || '',
      }),
      // Address
      3: () => ({
        addressType: values['dropDownValue'] || '',
        addressDocNumber: values['inputValue'] || '',
        addressProof: values['file'] || '',
      }),
      // Additional docs
      5: () => ({
        additionalDocs: values['file'] || '',
      }),
    };
    // if (id == 5) {

    // }
    // Setting the values to the state according to the type
    if (types[id]) {
      setValues(prev => ({
        ...prev,
        ...types[id](),
      }));
    }
    // Making sure no need to update KYC list in additional files
    if (id !== 5) {
      // Updating the KYC list to check each files are uploaded or not
      setKycList(prev => ({...prev, [id]: {...prev[id], uploaded: true}}));
    }
  };

  // Submit data
  const submitHandler = () => {
    if (validateData()) {
      dispatch(
        addCreateSubscriberInput({
          subscriber_image: values.subscriberImage,
          subscriber_signature: values.subscriberSignature,
          id_type_doc: values.idType,
          id_doc_num: values.idDocNumber,
          id_proof: values.idProof,
          id_proof_back: values.idProofBack,
          addr_type_doc: values.addressType,
          addr_doc_num: values.addressDocNumber,
          addr_proof: values.addressProof,
          additional_docs: values.additionalDocs,
        }),
      );
      dispatch(addKycListData(kycList));
      setPage();
    } else {
      alert('Please fill out the mandotary fields');
    }
  };
  // Validation to check every field is not empty
  const hasAnyProperty = (obj, ...props) => {
    return props.every(prop => obj.hasOwnProperty(prop));
  };
  const validateData = () => {
    // if (
    //   hasAnyProperty(
    //     idType,
    //     idDocNumber,
    //     idProof,
    //     idProofBack,
    //     addressType,
    //     addressDocNumber,
    //     addressProof
    //   )
    // )
    const result = hasAnyProperty(
      values,
      'idType',
      'idDocNumber',
      'idProof',
      'idProofBack',
      'addressType',
      'addressDocNumber',
      'addressProof',
    );
    return result;
  };

  // console.log('KYC LIST+++++++++++++++++++>>>>', kycList);

  return (
    <>
      <Provider>
        <ScrollView>
          <View style={styles.bgWrapper}>
            <Image style={styles.bg} source={bg} />
          </View>
          <View style={styles.body}>
            <View style={styles.layoutBg}></View>
            <View style={styles.content}>
              <Text style={styles.title}>Upload KYC</Text>
              <Text style={styles.description}>
                Loren ipsun dolor sit anet, consectetur adipisci elit, sed
                eiusnod tenpor incidunt ut labore et dolore nagna aliqua.
              </Text>
              <View style={styles.kycActionWrapper}>
                <FlatList
                  data={Object.keys(kycList)}
                  renderItem={({item}) => (
                    <KycCard data={kycList[item]} onPress={documentHandler} />
                  )}
                  keyExtractor={(item, index) => item.id}
                  inverted
                  numColumns={3}
                  contentContainerStyle={{
                    //   backgroundColor: 'red',
                    alignItems: 'center',
                  }}
                />
              </View>

              {/* Additional docs */}
              <View
                style={{
                  // backgroundColor: 'red',
                  alignSelf: 'flex-start',
                  marginTop: scaleSize(15),
                }}>
                <Text style={styles.moreDocText}>More documents?</Text>
                <View
                  style={{
                    ...commonStyles.row,
                    alignSelf: 'center',
                    // backgroundColor: 'green',
                  }}>
                  <TouchableOpacity
                    style={styles.additionalDocButton}
                    onPress={() => documentHandler(5)}>
                    <Text style={styles.addionalDocText}>
                      Add addional documents
                    </Text>
                    <View style={styles.additionalDocIconWrapper}>
                      <Image
                        source={values['additionalDocs'] ? uploaded : file}
                        style={styles.additionalDocIcon}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.actionWrapper}>
                <AccentButtonTwo title={'Proceed'} onPress={submitHandler} />
              </View>
            </View>
          </View>
        </ScrollView>
        {/* Upload modal */}
        <Portal>
          {/* ID Proof */}
          <UploadModal
            visible={idProofVisible}
            hideModal={() => hideModal(2)}
            dropdownData={data?.id_proof_documents}
            // filePickerHandler={() => filePickerHandler(2, 'idProof')}
            // pickedFile={kycList[2].idProof}
            // dropDownValue={kycList[2].idType}
            // // setDropDownValue={value => dropDownChange(2, 'idProof', value)}
            // // dropDownChange={value => dropDownChange(2, 'idProof', value)}
            // setDropDownValue={value => dropDownChange(2, 'idType', value())}
            // dropDownChange={item => console.log('ON CHANGE DROPDOWN===', item)}
            // inputOnChangeValue={value =>
            //   inputOnChangeValue(2, 'idDocNumber', value)
            // }
            // inputValue={kycList[2].idDocNumber}
            type={'idProof'}
            passDocValues={values => filterValues(values, 2)}
          />
          {/* Address proof */}
          <UploadModal
            visible={addressProofVisible}
            hideModal={() => hideModal(3)}
            type={'addresssProof'}
            passDocValues={values => filterValues(values, 3)}
            dropdownData={data?.address_proof_documents}
          />
          {/* Signature */}
          <UploadSignatureModal
            visible={signatureModalVisible}
            hideModal={() => hideModal(1)}
            type={'signature'}
            passDocValues={values => filterValues(values, 1)}
          />
          {/* Additonal files */}
          <UploadMultipleModal
            visible={multipleFilesModalVisible}
            hideModal={() => hideModal(5)}
            type={'multipleFiles'}
            passDocValues={values => filterValues(values, 5)}
          />
        </Portal>
      </Provider>
    </>
  );
};

export default KycUpload;

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
    height: 525,
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
  kycActionWrapper: {
    marginTop: scaleSize(25),
  },
  actionWrapper: {
    marginTop: scaleSize(35),
  },

  moreDocText: {
    ..._Text(FontSize.smallVariant, Family.regular, Colors.label2),
  },
  addionalDocText: {
    ..._Text(FontSize.smallVariant, Family.semibold, Colors.label2),
  },
  additionalDocButton: {
    ...commonStyles.row,
    alignSelf: 'center',
  },
  additionalDocIconWrapper: {
    padding: scaleSize(7),
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: scaleSize(10),
    borderRadius: scaleSize(100),
    borderWidth: 1,
    borderColor: Colors.border2,
  },
  additionalDocIcon: {
    width: scaleSize(22),
    height: scaleSize(22),
    resizeMode: 'contain',

    // backgroundColor: 'red',
  },
});
