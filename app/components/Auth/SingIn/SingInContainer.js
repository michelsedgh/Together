import React, { Component } from 'react';
import { View, Alert, Image, Text } from 'react-native';
import { func, bool, string } from 'prop-types';
import { connect } from 'react-redux';
import BasicFormComponent from '../BasicForm/basicForm';
import CustomActivityIndicator from 'components/common/CustomActivityIndicator';
import { styles } from '../BasicForm/styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { loginUser, restoreSession } from 'actions/session/actions';

const FIREBASE_LOGO = require('icons/firebase.png');

class SingInContainer extends Component {
  componentDidMount() {
    this.props.restoreSession();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.logged && this.props.logged) {
      this.props.onSignedIn();
    }
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
            <React.Fragment>
              <BasicFormComponent
                title="SIGN IN"
                onButtonPress={this.props.loginUser}
                onSignUpButtonOPress={this.props.onSignUp}
              />
            </React.Fragment>
          )}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

SingInContainer.defaultProps = {
  error: null
};

SingInContainer.propTypes = {
  restoreSession: func.isRequired,
  error: string,
  logged: bool.isRequired,
  loading: bool.isRequired,
  onSignedIn: func.isRequired,
  onSignUp: func.isRequired,
  loginUser: func.isRequired
};

const mapStateToProps = ({ sessionReducer: { loading, user, error, logged } }) => ({
  loading: loading,
  user: user,
  error: error,
  logged: logged
});

const mapDispatchToProps = {
  loginUser,
  restoreSession
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingInContainer);
