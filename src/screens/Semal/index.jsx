import React, { useState } from 'react';
import { ScrollView, Pressable, Text, Linking, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from './styles';
import semalImage from '../../images/semal.jpeg';

const SemalScreen = () => {
  const name = 'Semal';
  const sendEmail = () => {
    Linking.openURL(
      `mailto:sp19-bse-008@cuilahore.edu.pk?subject=Portfolio Discussion&body=Hi ${name}, I saw your portfolio, need to discuss something with you about my new project`
    );
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.profileContainer}>
        <View style={styles.profileBackground}>
          <Avatar title={'S'} source={semalImage} rounded size='xlarge' />
        </View>
        <Text style={styles.name}>Semal Saqib</Text>
        <Pressable onPress={sendEmail}>
          <Text style={styles.changePassword}> Contact Semal via Email </Text>
        </Pressable>
      </View>
      <View style={styles.infoContainer}>
        <DetailItem title='Company' value='Alpha Squared' />
        <DetailItem title='Role' value='Internee' />
        <DetailItem title='Email' value='sp19-bse-008@cuilahore.edu.pk' />
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

export default SemalScreen;
