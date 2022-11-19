import {View, Text} from 'react-native';
import React from 'react';
import {images} from '../../../../assets/images';
import AppHeader from '../../../../components/AppHeader';
import {useNavigation} from '@react-navigation/native';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import { Spacer } from '../../../../components/Spacer';
import { Montserrat, Roboto } from '../../../../utils/Fonts';

const SupportScreenHeader = () => {
  const navigation = useNavigation();
  return (
    <View>
      <AppHeader
        img={images.BackArrow}
        txt={'Contact Us'}
        fontSize={14}
        onPress={() => navigation.navigate('ProfileScreen')}
        fontFamily={Montserrat.thin}
      />
      <Spacer height={8} />
      <CustomText
        label={'How can we help you?'}
        alignSelf={'center'}
        fontSize={13}
        color={colors.white}
        fontFamily={'Montserrat-Bold'}
        fontWeight={'700'}
      />
      <Spacer height={15} />
      <View style={{width: '100%', paddingHorizontal: 40}}>
        <CustomText
          label={
            'DE-CRYPTO Support is ready to help 24 hours a day, 7 days a week.'
          }
          alignSelf={'center'}
          textAlign={'center'}
          fontSize={12}
          color={colors.white}
          fontFamily={'Montserrat-regular'}
        />
      </View>
    </View>
  );
};

export default SupportScreenHeader;
