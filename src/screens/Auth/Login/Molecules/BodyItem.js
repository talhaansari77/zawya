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
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

const BodyItem = ({...props}) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [submitError, setSubmitError] = useState({
    emailError: '',
    passwordError: '',
  });

  const onHandelSubmit = async () => {
    const response = ValidateInput(
      email,
      password,
      submitError,
      setSubmitError,
    );

    if (response) {
      setLoading(true);

      //  login with email and password
      try {
        const userCredentials = await auth().signInWithEmailAndPassword(
          email.trim(),
          password.trim(),
        );
        if (userCredentials.user.uid) {
          AsyncStorage.setItem('userAuth', userCredentials.user.uid);
          AsyncStorage.setItem('userEmail', email);



          // save user data
          // await saveUser(userCredentials.user.uid, {fcmToken: newFcmToken});

          navigation.reset({
            index: 0,
            routes: [{name: 'MainStack'}],
          });
        }
      } catch (error) {
        setLoading(false);
        console.log('cjdbjd', error);
        if (
          error.code == 'auth/wrong-password' ||
          error.code == 'auth/user-not-found'
        ) {
          return setSubmitError({
            ...submitError,
            passwordError: 'Invalid Email and Password ',
          });
        }
      }
    }
  };
  return (
    <View style={styles.mainContainer}>
      <CustomText
        label={'Log In'}
        alignSelf="center"
        fontSize={20}
        color={colors.primary}
        fontFamily={Montserrat.SemiBold}
      />
      <Spacer height={20} />

      <CustomTextInput
        value={email}
        placeholder={'email'}
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
        secureTextEntry={true}
        placeholder={'password'}
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
        title={'Log In'}
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
          label={"Don't have and account "}
          alignSelf="center"
          fontSize={10}
          color={colors.black}
          fontFamily={Montserrat.SemiBold}
        />
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
          <CustomText
            label={'Sign Up'}
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
