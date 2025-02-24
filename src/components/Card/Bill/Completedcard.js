import React from 'react'
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Rounded, Spacing } from 'constants/Layout'
import { _Shadow } from 'styles'
import Colors from 'constants/Colors'
import { Family, FontSize } from 'constants/Fonts'
import { _Fill, _Text } from 'styles'
import { scaleSize, WINDOW_HEIGHT, WINDOW_WIDTH } from 'utils/index'
import FastImage from 'react-native-fast-image'
import DashedLine from 'react-native-dashed-line'

const CompletedCard = ({ item, itemIndex, doAction }) => {
  return (
    <Pressable style={styles.container} onPress={doAction} key={itemIndex}>
      <View
        borderRadius={12}
        style={{
          ...styles.bgContainer,
          backgroundColor: '#F4F4F4',
        }}>
        <View style={styles.bg}>
          <View style={{...styles.curve, top: 60}} />
          <View style={{...styles.curve, top: 120}} />
          <View style={{...styles.curve1, top: 60}} />
          <View style={{...styles.curve1, top: 120}} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.text}>{item.name}</Text>

            <View
              style={{paddingStart: '4%', paddingEnd: '4%',}}>
              <DashedLine
                dashLength={10}
                dashThickness={2}
                dashGap={5}
                dashColor="#797777"
              />
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'column', flex: 1}}>
                <Text style={styles.text1}>Date</Text>
                <Text style={styles.text2}>{item.month}</Text>
              </View>
              <View style={{flexDirection: 'column', flex: 1}}>
              <Text style={styles.text1}>Time</Text>
                <Text style={styles.text2}>{item.time}</Text>
              </View>
            </View>

            <View style={{ ...styles.inputRow,  }}>
              <Pressable
                style={styles.buttonContainerStyle}
                onPress={() => doSubmit()}>
                <Text style={styles.buttonText}>View Recept</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  bgContainer: {
    width: WINDOW_WIDTH * 0.9,
    height: scaleSize(310),
    borderRadius: Rounded.smallVariant,
    marginBottom:15
  },
  bg: {
    borderRadius: Rounded.smallVariant,
    width: WINDOW_WIDTH * 0.9,
    height: scaleSize(450),
    alignContent: 'flex-end',
    flexDirection: 'column',
   
  },
  curve: {
    backgroundColor: 'white',
    height: 20,
    width: 10,
    alignSelf: 'center',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  curve1: {
    backgroundColor: 'white',
    height: 20,
    width: 10,
    alignSelf: 'center',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    alignContent: 'flex-end',
    position: 'absolute',
    top: 35,
    left: scaleSize(327),
    right: 0,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ..._Text(FontSize.medium, Family.poppinsMedium, Colors.black),
    margin: 15,
    marginStart: 40,
    marginTop: 30,
  },
  text1:{
    ..._Text(FontSize.regularVariantPlus, Family.poppinsMedium, Colors.text),
    marginStart: 40,
    marginTop: 30,
  },
  text2:{
    ..._Text(FontSize.regularVariantPlus, Family.poppinsMedium, Colors.black),
    marginStart: 40,
  },
  inputRow: {
    marginBottom: Spacing.regular,
    marginTop: Spacing.xxlarge2,
    marginStart: 40,
  },
  
  buttonContainerStyle: {
    borderRadius: Rounded.xs,
    backgroundColor: Colors.pinkVarient,
    height: '33%',
    width:'35%'
  },
  buttonText: {
    fontFamily: Family.regular,
    fontSize: FontSize.smallVariantPlus,
    color: Colors.white,
    textAlign: 'center',
    marginTop:scaleSize(6)
  },
})

export default CompletedCard
