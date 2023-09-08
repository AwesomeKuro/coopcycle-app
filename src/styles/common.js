// Source file for common CSS

import Config from 'react-native-config'
import { Platform } from 'react-native'

let primaryColor = Config.PRIMARY_COLOR || '#e4022d',
    whiteColor = '#fff',
    darkGreyColor = '#424242',
    greyColor = '#95A5A6',
    lightGreyColor = '#ECF0F1',
    blueColor = '#3498DB',
    greenColor = '#2ECC71',
    redColor = '#E74C3C',
    orangeColor = '#d35400',
    fontTitleName = 'Raleway-Regular',
    dateSelectHeaderHeight = 40,
    calendarHeight = Platform.select({
      ios: 357,
      android: 367,
    }), // an actual height is slightly different per platform; android is ~367, ios is ~357
    headerFontSize = 18

export {
  orangeColor,
  primaryColor,
  whiteColor,
  greyColor,
  lightGreyColor,
  darkGreyColor,
  blueColor,
  headerFontSize,
  dateSelectHeaderHeight,
  calendarHeight,
  greenColor,
  redColor,
  fontTitleName,
}
