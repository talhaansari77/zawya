import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import commonStyles from '../../../utils/CommonStyles';
import {Spacer} from '../../../components/Spacer';
import {PH20} from '../../../utils/CommonStyles';
import CustomButton from '../../../components/CustomButton';
import {verticalScale} from 'react-native-size-matters';
import UserDetail from './Molecules/UserDetail';
import {signout} from '../../../../services/FirebaseAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAuthId} from '../../../../services/FirebaseAuth';
import {getSpecificeUser} from '../../../../services/FirebaseAuth';

const SignOutScreen = ({navigation}) => {
  const [AuthData, setAuthData] = useState(AuthData);
  useEffect(() => {
    getAuthData();
  }, []);


  const getAuthData = async () => {

    
    const responseData=await AsyncStorage.getItem("userEmail")
    setAuthData(responseData)
  
  };

  return (
    <View style={commonStyles.IosPadding}>
      <PH20>
        <Spacer height={20} />
        <CustomButton
          title="Sign out"
          fontSize={18}
          onPress={async () => {
            await AsyncStorage.removeItem('userAuth');
            AsyncStorage.removeItem('userEmail');

            signout();

            navigation.reset({
              index: 0,
              routes: [{name: 'AuthStack'}],
            });
          }}
          height={verticalScale(47)}
          width={'65%'}
        />

        <Spacer height={100} />

        <UserDetail AuthData={AuthData} />
      </PH20>
    </View>
  );
};

export default SignOutScreen;

const styles = StyleSheet.create({});