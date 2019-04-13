import { StyleSheet } from 'react-native';

const button = {
  alignItems: 'center',
  justifyContent: 'center',
  height: 40,
  marginHorizontal: 10,
  marginVertical: 5,
  borderRadius: 5,
  padding: 3
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  textInput: {
    backgroundColor: '#ffffff',
    padding: 10,
    height: 40,
    margin: 10,
    borderRadius: 5
  },
  button: {
    ...button,
    backgroundColor: '#88cc88'
  },
  signUpButton: {
    ...button
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  loginBox: {
    margin: 10
  },
  imageBox: {
    alignItems: 'center',
    marginTop: 20
  },
  image: {
    width: 120,
    height: 120
  },
  scrollView: {
    backgroundColor: '#2299ec'
  }
});
