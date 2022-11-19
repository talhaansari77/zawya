import {View, Text} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {Spacer} from '../../../../components/Spacer';
import {colors} from '../../../../utils/Colors';

const RestoreWalletHeader = () => {
  return (
    <View>
      <CustomText
        label={'Restore Wallet'}
        alignSelf={'center'}
        fontSize={15}
        color={colors.white}
        fontFamily={'Montserrat-Bold'}
      />
      <Spacer height={30} />
      <View style={{width: '100%', paddingHorizontal: 50}}>
        <CustomText
          label={
            'Type your 12-word recovery phrase restore you existing wallet'
          }
          alignSelf={'center'}
          textAlign={'center'}
          fontSize={12}
          color={colors.lighBlue}
          fontFamily={'Montserrat-regular'}
        />
      </View>
    </View>
  );
};

export default RestoreWalletHeader;
