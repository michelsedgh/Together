import React, { Component } from 'react';
import { SafeAreaView, View, Button, Image, Text } from 'react-native';
import { shape, func } from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { logoutUser } from 'actions/session/actions';

class Home extends Component {
  logout = async () => {
    const status = await this.props.logout();
    this.props.onSignOut();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.marginBox}>
            <Button onPress={this.logout} title="Logout" />
          </View>

          <View>
            <Text style={styles.title}>Welcome to Pulse</Text>
          </View>

          <View style={styles.marginBox}>
            <Icon name="logo-github" size={40} />
            <Text>@skantus</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

Home.propTypes = {
  logout: func.isRequired,
  onSignOut: func.isRequired,
  user: shape({}).isRequired
};

const mapStateToProps = ({ sessionReducer }) => ({
  user: sessionReducer.user
});

const mapDispatchToProps = {
  logout: logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
