import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import commonStyles from '../../../utils/CommonStyles';
import {Spacer} from '../../../components/Spacer';
import {PH20} from '../../../utils/CommonStyles';
import CustomButton from '../../../components/CustomButton';
import {verticalScale} from 'react-native-size-matters';
import UserDetail from './Molecules/UserDetail';
import {getAuthId, getSpecificeUser, getUser, signout} from '../../../../services/FirebaseAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignOutScreen = ({navigation}) => {
  // useEffect(async () => {
  //   try {
  //     await getAuthId().then(id => {
  //       let user = getSpecificeUser(id);
  //       console.log('id==>' + id);
  //       console.log('user==>' + user.email);
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, []);

  return (
    <View style={commonStyles.IosPadding}>
      <PH20>
        <Spacer height={20} />
        <CustomButton
          title="Sign out"
          fontSize={18}
          onPress={async () => {
            await AsyncStorage.removeItem('userAuth');

            signout();

            navigation.reset({
              index: 0,
              routes: [{name: 'AuthStack'}],
              // screen:'Login'
            });
          }}
          height={verticalScale(47)}
          width={'65%'}
        />

        <Spacer height={100} />

        <UserDetail />
      </PH20>
    </View>
  );
};

export default SignOutScreen;

const styles = StyleSheet.create({});
