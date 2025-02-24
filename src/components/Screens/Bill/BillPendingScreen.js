import PendingCard from 'components/Card/Bill/PendingCard'
import Colors from 'constants/Colors'
import PendingListJson from 'data/BillPendingJson'
import React from 'react';
import { 
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  FlatList,
} from 'react-native';
import { scaleSize } from 'utils/index';

const PendingScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <View style={styles.section}>
            <FlatList
              data={PendingListJson}
              keyExtractor={item => item.key}
              renderItem={({item, index}) => (
                <PendingCard
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  section: {
    marginTop: scaleSize(20),
    marginBottom: scaleSize(30),
    marginStart: scaleSize(15),
    marginEnd: scaleSize(15),
  },
})

export default PendingScreen
