import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomText from '../../../../components/CustomText';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {colors} from '../../../../utils/Colors';
import {Montserrat} from '../../../../utils/Fonts';
import CustomTextInput from '../../../../components/CustomTextInput';
import {Spacer} from '../../../../components/Spacer';
import {icons} from '../../../../assets/icons';
import CustomButton from '../../../../components/CustomButton';
import AuthOption from './AuthOption';
import {useNavigation} from '@react-navigation/core';
import {ValidateInput} from '../../../../utils/InputValidate';

const BodyItem = ({...props}) => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const [submitError, setSubmitError] = useState({
    userNameError: '',
    cardNumberError: '',
  });

  const onHandelSubmit = () => {
    console.log("hcvg")
    const response = ValidateInput(userName, cardNumber, submitError, setSubmitError);
  };
  return (
    <View style={styles.mainContainer}>
      <CustomText
        label={props.topLabel}
        alignSelf="center"
        fontSize={20}
        color={colors.primary}
        fontFamily={Montserrat.SemiBold}
      />
      <Spacer height={20} />

      <CustomTextInput
        value={userName}
        placeholder={'User Name'}
        placeholderTextColor={colors.black}
        leftIcon={icons.userName}
        error={submitError.userNameError}
        width={'87%'}
        onChangeText={em => {
          setUserName(em.trim());
          setSubmitError({...submitError, userNameError: ''});
        }}
      />
      <Spacer height={30} />
      <CustomTextInput
        value={cardNumber}
        placeholder={'Card number'}
        placeholderTextColor={colors.black}
        onChangeText={em => {
          setCardNumber(em.trim());
          setSubmitError({...submitError, cardNumberError: ''});
        }}
        leftIcon={icons.card}
        error={submitError.cardNumberError}
        width={'87%'}
        iconWidth={scale(15)}
        iconHeight={verticalScale(15)}
      />
      <Spacer height={30} />
      <CustomButton
        // title="Log In"
        title={props.btnLabel}
        width={'95%'}
        onPress={onHandelSubmit}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: verticalScale(10),
        }}>
        <CustomText
          label={
            props.signup
              ? 'Already have an account? '
              : "Don't have and account "
          }
          alignSelf="center"
          fontSize={10}
          color={colors.black}
          fontFamily={Montserrat.SemiBold}
        />
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
          <CustomText
            label={props.signup ? 'Log In ' : 'Sign Up'}
            alignSelf="center"
            fontSize={10}
            color={colors.primary}
            fontFamily={Montserrat.SemiBold}
          />
        </TouchableOpacity>
      </View>

      <Spacer height={20} />

      <AuthOption />
    </View>
  );
};

export default BodyItem;

const styles = ScaledSheet.create({
  mainContainer: {
    width: '100%',
    height: '75%',
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
