import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useState} from 'react'
import commonStyles from '../../../utils/CommonStyles'
import { Spacer } from '../../../components/Spacer'
import { PH10 } from '../../../utils/CommonStyles'
import { images } from '../../../assets/images'
import { verticalScale,moderateScale } from 'react-native-size-matters'
import BodyItem from '../Login/Molecules/BodyItem'
import { ValidateInput } from '../../../utils/InputValidate'
const SignupScreen = ({navigation}) => {

  
  return (
    <View style={commonStyles.IosPadding}>
    <PH10>
      <Spacer height={10} />
      <View
        style={{
          width: moderateScale(130),
          height: verticalScale(50),
          alignSelf: 'center',
          borderRadius: 10,
          overflow: 'hidden',
        }}>
        <Image source={images.appIcon} style={commonStyles.img} />
      </View>
      <Spacer height={25} />

      <BodyItem 
      btnLabel={"Sign Up"}
      topLabel={"Sign Up"}
      signup

      onPress={()=>{
          navigation.navigate("LoginScreen")

      }}
      />
    </PH10>
  </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({})