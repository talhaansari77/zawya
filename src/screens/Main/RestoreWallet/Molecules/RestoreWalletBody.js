import { View, Text } from 'react-native'
import React from 'react'
import GradientContainer from '../../../../components/GradientContainer';
import CustomText from '../../../../components/CustomText';
import CustomTextInput from '../../../../components/CustomTextInput';
import { colors } from '../../../../utils/Colors';

const RestoreWalletBody = () => {
    const RestorWalletArray = [
        {
          id: 1,
          no: 1,
        },
        {
          id: 2,
          no: 2,
        },
        {
          id: 3,
          no: 3,
        },
        {
          id: 4,
          no: 4,
        },
        {
          id: 5,
          no: 5,
        },
        {
          id: 6,
          no: 6,
        },
      ];
  return (
    <View style={{width: '100%', padding: 20}}>
    {RestorWalletArray.map((walletArray, index) => (
      <View key={index}>
        <GradientContainer
          height={60}
          marginBottom={20}
          alignItems={"center"}
          flexDirection={"row"}
          >
          <CustomText
            label={walletArray.no}
            color={colors.white}
            fontSize={15}
            fontFamily={'Montserrat-bold'}
          />
          
          <CustomTextInput
            placeholder="------------"
            placeholderTextColor={colors.white}
            paddingHorizontal={10}
          />
        </GradientContainer>
      </View>
    ))}
  </View>
  )
}

export default RestoreWalletBody