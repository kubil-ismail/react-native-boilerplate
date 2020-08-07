/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

// Use Redux
import { connect } from 'react-redux';
import { login } from '../redux/actions/authActions';

// Env
import { API_URL } from '../../env.json';

export class Home extends Component {
  componentDidMount = () => {
    this.props.login();
  }

  render() {
    console.log(API_URL);
    return (
      <SafeAreaView>
        <Text>Oke</Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
