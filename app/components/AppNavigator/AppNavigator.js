import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { shape } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import SingInContainer from 'components/Auth/SingIn';
import SignUpContainer from 'components/Auth/SignUp';
import HomeContainer from 'components/Home';
import PushNotifications from 'components/common/PushNotifications';
import { withNavigation } from './utils';
import ChatNavigator from './ChatNavigator';

const SignedInNavigator = createBottomTabNavigator({
  HomeTab: {
    screen: withNavigation(({ navigateTo }) => <HomeContainer onSignOut={navigateTo('SignIn')} />),
    navigationOptions: {
      tabBarLabel: 'Home',
      header: null,
      tabBarIcon: <Icon name="home" size={30} color="gray" />
    }
  },
  MessagesTab: {
    screen: ChatNavigator,
    navigationOptions: {
      tabBarLabel: 'Messages',
      header: null,
      tabBarIcon: <Icon name="comments" size={30} color="gray" />
    }
  }
});

const SignedOutNavigator = createStackNavigator(
  {
    SignIn: {
      screen: withNavigation(({ navigateTo }) => (
        <SingInContainer onSignUp={navigateTo('SignUp')} onSignedIn={navigateTo('HomeTab')} />
      ))
    },
    SignUp: {
      screen: withNavigation(({ navigateTo }) => <SignUpContainer onSignedIn={navigateTo('HomeTab')} />)
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2299ec'
      }
    },
    initialRouteName: 'SignIn'
  }
);

/* eslint-disable react/prop-types */
const SignedInTabNavigator = ({ screenProps, ...otherProps }) => (
  <PushNotifications>
    <SignedInNavigator screenProps={{ ...screenProps }} {...otherProps} />
  </PushNotifications>
);
SignedInTabNavigator.router = SignedInNavigator.router;

const MainNavigator = createSwitchNavigator({
  SignedOut: {
    screen: SignedOutNavigator
  },
  SignedIn: {
    screen: SignedInTabNavigator
  }
});

export default createAppContainer(MainNavigator);
