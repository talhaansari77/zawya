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
import {useNavigation} from '@react-navigation/core';
import {ValidateInput} from '../../../../utils/InputValidate';
import AuthOption from '../../Login/Molecules/AuthOption';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BodyContainer = ({...props}) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)

  const [submitError, setSubmitError] = useState({
    emailError: '',
    passwordError: '',
  });

  const onHandelSubmit =async () => {
    console.log('hcvg');
    const response = ValidateInput(
      email,
      password,
      submitError,
      setSubmitError,
    );

    if (response) {
      setLoading(true);
      try {
        // create user with email and password
        const userCredentials = await auth().createUserWithEmailAndPassword(
          email.trim(),
          password.trim(),
        );

        console.log("AuthData",userCredentials)
        if (userCredentials) {
          // save user id in  AsyncStorag
          AsyncStorage.setItem('userAuth', userCredentials.user.uid);
          AsyncStorage.setItem('userEmail', email);

          setLoading(false);
          navigation.reset({
            index: 0,
            routes: [{name: 'MainStack'}],
          });
        }
      } catch (error) {
        console.log('onSubmitRegister error', error);
        setSubmitError({
          ...submitError,
          emailError: 'The email address is already in use by another account',
        });
        setLoading(false);
      }
    }
  };
  return (
    <View style={styles.mainContainer}>
      <CustomText
        label={'Sign Up'}
        alignSelf="center"
        fontSize={20}
        color={colors.primary}
        fontFamily={Montserrat.SemiBold}
      />
      <Spacer height={20} />

      <CustomTextInput
        value={email}
        placeholder={'Email'}
        placeholderTextColor={colors.black}
        leftIcon={icons.userName}
        error={submitError.emailError}
        width={'87%'}
        onChangeText={em => {
          setEmail(em.trim());
          setSubmitError({...submitError, emailError: ''});
        }}
      />
      <Spacer height={30} />
      <CustomTextInput
        value={password}
        placeholder={'Password'}
        placeholderTextColor={colors.black}
        onChangeText={em => {
          setPassword(em.trim());
          setSubmitError({...submitError, passwordError: ''});
        }}
        leftIcon={icons.card}
        error={submitError.passwordError}
        width={'87%'}
        iconWidth={scale(15)}
        iconHeight={verticalScale(15)}
      />
      <Spacer height={30} />
      <CustomButton
        // title="Log In"
        title={'Sign Up'}
        loading={loading}

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
          label={'Already have an account? '}
          alignSelf="center"
          fontSize={10}
          color={colors.black}
          fontFamily={Montserrat.SemiBold}
        />
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
          <CustomText
            label={'Log In '}
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

export default BodyContainer;

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
