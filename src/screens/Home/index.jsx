import React, { useState } from 'react';
import { Avatar, ListItem } from 'react-native-elements';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import semalImage from '../../images/semal.jpeg';
import shakiraImage from '../../images/shakira.jpeg';

const data = [
  {
    rollNumber: 'sp19-bse-008',
    name: 'Semal Saqib',
    image: semalImage,
    email: 'sp19-bse-008@cuilahore.edu.pk',
    skills: {
      skill1: 'React',
      skill1Level: 'Beginner',
      skill2: 'Vue',
      skill2Level: 'Intermediate',
    },
    currentRole: 'Internee',
    company: 'Alpha Squared',
  },
  {
    rollNumber: 'sp19-bse-150',
    name: 'Shakira Hafeez',
    image: shakiraImage,
    email: 'sp19-bse-150@cuilahore.edu.pk',
    skills: {
      skill1: 'React',
      skill1Level: 'Beginner',
      skill2: 'Vue',
      skill2Level: 'Intermediate',
    },
    currentRole: 'Internee',
    company: 'Khired Network',
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: '#DB7093' }]}>
        <Text style={styles.heading}>Meet the Team</Text>
      </View>
      <View style={styles.content}>
        {data.map((person) => (
          <View style={styles.item}>
            <ListItem>
              <Avatar
                title={person.name[0]}
                source={person.image}
                rounded
                size='large'
              />
              <ListItem.Content>
                <ListItem.Title style={{ marginBottom: 10, fontSize: 24 }}>
                  {person.name}
                </ListItem.Title>
                <ListItem.Subtitle style={{ fontSize: 18 }}>
                  {person.rollNumber}
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    height: 250,
  },
  heading: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  item: {
    marginTop: 25,
  },
});

export default Home;
