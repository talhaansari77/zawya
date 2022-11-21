import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import commonStyles, { PH10 } from '../../../utils/CommonStyles'
import { images } from '../../../assets/images'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { Spacer } from '../../../components/Spacer'
import BodyItem from './Molecules/BodyItem'

const LoginScreen = () => {
  return (
    <View style={commonStyles.IosPadding}>
      <PH10>
        <Spacer height={10}/>
        <View style={{width:moderateScale(130),height:verticalScale(50),alignSelf:"center",borderRadius:10,overflow:"hidden"}}>
          <Image source={images.appIcon}
          style={commonStyles.img}/>
        </View>
        <Spacer height={25}/>

        <BodyItem/>



      </PH10>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})