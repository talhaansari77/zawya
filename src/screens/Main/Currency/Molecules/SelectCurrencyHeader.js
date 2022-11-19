import {View, Text} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {Spacer} from '../../../../components/Spacer';

const SelectCurrencyHeader = () => {
  return (
    <View>
      <CustomText
        label={'Select Currency'}
        alignSelf={'center'}
        fontSize={15}
        color={colors.white}
        fontFamily={'Montserrat-Bold'}
      />
      <Spacer height={30} />

        <View style={{width:"100%", paddingHorizontal:20}}>
      <CustomText
        label={'Available'}
        alignSelf={'flex-start'}
        fontSize={13}
        color={colors.white}
        fontFamily={'Montserrat-regular'}
      />
      </View>
    </View>
  );
};

export default SelectCurrencyHeader;
