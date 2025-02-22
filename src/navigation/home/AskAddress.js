import { darkGreyColor, lightGreyColor, primaryColor, whiteColor } from '../../styles/common';
import { Box, Heading, Text } from 'native-base';
import AddressAutocomplete from '../../components/AddressAutocomplete';
import { Appearance, View } from 'react-native';
import React from 'react';
import { searchRestaurantsForAddress } from '../../redux/Checkout/actions';
import { newAddress } from '../../redux/Account/actions';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

const textInputContainerHeight = 54

const AskAddress = (props) => {

  const colorScheme = Appearance.getColorScheme()
  return <View style={{ backgroundColor: primaryColor, flex: 1, padding: 20 }}>
    <Box style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
      <Heading color={whiteColor}>{ props.t('WHERE_ARE_YOU') }</Heading>
      <Text color={lightGreyColor}>{ props.t('ASK_ADDRESS_DISCLAIMER') }</Text>
    </Box>
    <Box style={{ flex:2 }}>
      <AddressAutocomplete
        inputContainerStyle={{
          justifyContent: 'center',
          borderWidth: 0,
          height: textInputContainerHeight,
        }}
        style={{
          height: (textInputContainerHeight * 0.7),
          borderRadius: 3,
          borderWidth: 0,
          backgroundColor: colorScheme === 'dark' ? darkGreyColor : whiteColor,
        }}
        country={ props.country }
        location={ props.location }
        onSelectAddress={ (address) => {
          props.newAddress(address)
          props.searchRestaurantsForAddress(address)
        }}
      />
    </Box>
  </View>
}


function mapStateToProps(state) {

  return {
    location: state.app.settings.latlng,
    country: state.app.settings.country,
    address: state.checkout.address,
  }
}

function mapDispatchToProps(dispatch) {

  return {
    searchRestaurantsForAddress: address => dispatch(searchRestaurantsForAddress(address)),
    newAddress: address => dispatch(newAddress(address)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(AskAddress))
