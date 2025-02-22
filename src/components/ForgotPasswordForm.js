import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Formik } from 'formik'
import { withTranslation } from 'react-i18next'
import { Button, FormControl, Input, Text } from 'native-base';
import _ from 'lodash'

import material from '../../native-base-theme/variables/material';

class ForgotPasswordForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: undefined,
    };
  }

  _validate(values) {

    let errors = {}

    if (_.isEmpty(values.username)) {
      errors.username = true
    }

    return errors
  }

  _onSubmit(values) {
    const { username } = values
    this.props.onSubmit(username);
  }

  render() {

    const initialValues = {
      username: '',
    }

    return (
      <Formik
        initialValues={ initialValues }
        validate={ this._validate.bind(this) }
        onSubmit={ this._onSubmit.bind(this) }
        validateOnBlur={ false }
        validateOnChange={ false }>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View>
          <FormControl error={ touched.username && errors.username }>
            <FormControl.Label>{this.props.t('USERNAME_OR_EMAIL')}</FormControl.Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="done"
              onChangeText={ handleChange('username') }
              onBlur={ handleBlur('username') }
              onSubmitEditing={ handleSubmit }
            />
          </FormControl>
          <View style={{ marginTop: 20 }}>
            <Button block onPress={ handleSubmit }>
              <Text>{this.props.t('SUBMIT')}</Text>
            </Button>
            <Text
              style={{
                marginTop: 15,
                color: material.inputErrorBorderColor,
              }}>
              {this.props.nonInputError}
            </Text>
          </View>
        </View>
        )}
      </Formik>
    );
  }
}

function mapStateToProps(state) {
  return {
    nonInputError: state.app.forgotPassword.nonInputError,
  };
}

export default connect(mapStateToProps)(withTranslation()(ForgotPasswordForm));
