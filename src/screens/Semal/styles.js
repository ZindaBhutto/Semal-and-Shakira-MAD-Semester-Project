import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    height: 280,
    display: 'flex',
    backgroundColor: '#DB7093',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  profileBackground: {
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 42,
    height: 42,
    tintColor: '#000000',
  },
  name: {
    fontWeight: '700',
    fontSize: 24,
    paddingHorizontal: 8,
    textAlign: 'center',
    marginTop: 15,
  },
  changePassword: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 10,
    color: '#730f37',
  },
  infoContainer: {
    marginVertical: 34,
    padding: 30,
  },
  contentContainer: {
    marginBottom: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
  },
  value: {
    fontSize: 18,
    marginBottom: 10,
  },
  warningIcon: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
  },
  warningText: {
    marginVertical: 12,
    lineHeight: 26,
    fontSize: 18,
    width: '80%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tryAgainButton: {
    width: '60%',
  },
});

export default styles;
