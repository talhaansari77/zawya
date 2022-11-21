import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {colors} from '../../../../utils/Colors';
import {Montserrat} from '../../../../utils/Fonts';
import CustomTextInput from '../../../../components/CustomTextInput';
import {Spacer} from '../../../../components/Spacer';
import {icons} from '../../../../assets/icons';
import CustomButton from '../../../../components/CustomButton';
import AuthOption from './AuthOption';

const BodyItem = () => {
  return (
    <View style={styles.mainContainer}>
      <CustomText
        label="Log In"
        alignSelf="center"
        fontSize={20}
        color={colors.primary}
        fontFamily={Montserrat.SemiBold}
      />
      <Spacer height={20} />

      <CustomTextInput
        placeholder={'User Name'}
        placeholderTextColor={colors.black}
        leftIcon={icons.userName}
        width={'87%'}
      />
      <Spacer height={15} />
      <CustomTextInput
        placeholder={'Card number'}
        placeholderTextColor={colors.black}
        leftIcon={icons.card}
        width={'87%'}
        iconWidth={scale(15)}
        iconHeight={verticalScale(15)}
      />
      <Spacer height={30} />
      <CustomButton title="Log In" width={'95%'} />
      <Spacer height={20} />


      <AuthOption/>
    </View>
  );
};

export default BodyItem;

const styles = ScaledSheet.create({
  mainContainer: {
    width: '100%',
    height: '72%',
    borderRadius: scale(40),
    padding: '15@s',
    backgroundColor: colors.white,

    shadowColor: Platform.OS == 'ios' ? '#ced4da' : colors.black,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
    shadowOpacity: 0.5,

    shadowOffset: {width: 3, height: 5},
  },
});
