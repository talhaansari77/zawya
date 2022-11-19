import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from '../../../components/AppHeader'
import { images } from '../../../assets/images'
import commonStyles from '../../../utils/CommonStyles'
import SummaryContainer from './molecules/SummaryContainer'
import { Spacer } from '../../../components/Spacer'
import { Montserrat } from '../../../utils/Fonts'
import { colors } from '../../../utils/Colors'
import CustomText from '../../../components/CustomText'
const Portfolio = ({navigation}) => {
  return (
    <View style={commonStyles.IosPadding}>
          <AppHeader
        // marginLeft={10}
          img={images.wallet}
          txt={'zawya'}
        //   width={35}
        //   heigth={40}
          fontSize={18}
          rightImg={images.SettingImage}
          onPress={()=>navigation.navigate("MainStack",{screen:"WalletScreen"})}
          rightOnPress={()=>navigation.navigate("SettingScreen")}

        />
        <Spacer height={10}/>

        <SummaryContainer/>

       


    </View>
  )
}

export default Portfolio

const styles = StyleSheet.create({})