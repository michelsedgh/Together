import React, { Component } from 'react';
import { View, Alert, Image } from 'react-native';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';
import BasicFormContainer from '../BasicForm/basicForm';
import CustomActivityIndicator from 'components/common/CustomActivityIndicator';
import { styles } from '../BasicForm/styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signupUser } from 'actions/session/actions';

const FIREBASE_LOGO = require('icons/firebase.png');

class SignupContainer extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.registered && this.props.registered) this.props.onSignedIn();
  }

  render() {
    return (
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={FIREBASE_LOGO} />
        </View>
        <View style={styles.loginBox}>
          {this.props.loading ? (
            <CustomActivityIndicator color="#ffffff" size="large" />
          ) : (
            <BasicFormContainer title="CREATE ACCOUNT" onButtonPress={this.props.signupUser} isSignUp />
          )}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

SignupContainer.defaultProps = {
  registered: false
};

SignupContainer.propTypes = {
  registered: bool,
  onSignedIn: func.isRequired,
  loading: bool.isRequired,
  signupUser: func.isRequired
};

const mapStateToProps = ({ sessionReducer: { loading, registered } }) => ({
  loading,
  registered
});

const mapDispatchToProps = {
  signupUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupContainer);
