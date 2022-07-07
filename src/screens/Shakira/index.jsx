import React, { useState } from 'react';
import {
  ScrollView,
  Linking,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import shakiraImage from '../../images/shakira.jpeg';
import styles from './styles';

const ShakiraScreen = () => {
  const name = 'Shakira';
  const sendEmail = () => {
    Linking.openURL(
      `mailto:sp19-bse-150@cuilahore.edu.pk?subject=Portfolio Discussion&body=Hi ${name}, I saw your portfolio, need to discuss something with you about my new project`
    );
  };
  return (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.profileContainer}>
        <View style={styles.profileBackground}>
          <Avatar title={'S'} source={shakiraImage} rounded size='xlarge' />
        </View>
        <Text style={styles.name}>Shakira Hafeez</Text>
        <Pressable onPress={sendEmail}>
          <Text style={styles.changePassword}> Contact Shakira via Email </Text>
        </Pressable>
      </View>
      <View style={styles.infoContainer}>
        <DetailItem title='Company' value='Khired Network' />
        <DetailItem title='Role' value='Internee' />
        <DetailItem title='Email' value='sp19-bse-150@cuilahore.edu.pk' />
        <DetailItem title='Skills' value='' />
        <Text style={[styles.value, { marginTop: -20 }]}>
          Vue: Intermediate
        </Text>
        <Text style={styles.value}>React Native: Beginner</Text>
        <Text style={styles.value}>React: Beginner</Text>
      </View>
    </ScrollView>
  );
};

const DetailItem = ({ title, value }) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default ShakiraScreen;
