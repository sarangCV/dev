import CompletedCard from 'components/Card/Bill/Completedcard'
import RecommendedCard from 'components/Card/Recharge/RecommendedCard'
import Colors from 'constants/Colors'
import CompletedListJson from 'data/BillCompletedJson'
import RecommendedListJson from 'data/RecommendedListJson'
import React from 'react'
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  FlatList,
} from 'react-native'
import {scaleSize} from 'utils/index';

const RecommendedScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <View style={styles.section}>
            <FlatList
              data={RecommendedListJson}
              keyExtractor={item => item.key}
              renderItem={({ item, index }) => (
                <RecommendedCard
                  item={item}
                  // goToDetails={() => goToDetails(item)}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  section: {
    marginTop: scaleSize(20),
    marginBottom: scaleSize(30),
    marginStart: scaleSize(10),
    marginEnd: scaleSize(10),
  },
})

export default RecommendedScreen
