import { View, Text } from 'react-native'
import React from 'react'
import CustomText from '../../../../components/CustomText'
import { colors } from '../../../../utils/Colors'

const RecoveryScreenHeader = () => {
  return (
    <View>
      <CustomText
        label={'Recovery Phrase'}
        alignSelf={'center'}
        fontSize={15}
        color={colors.white}
        fontFamily={'Montserrat-Bold'}
      />
    </View>
  )
}

export default RecoveryScreenHeader