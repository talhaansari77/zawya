import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { images } from '../../../../assets/images'
import CustomText from '../../../../components/CustomText'
import { colors } from '../../../../utils/Colors'
import { Roboto } from '../../../../utils/Fonts'

const PortfolioContainer = ({   setModalVisible,
    modalVisible}) => {
  return (
        <TouchableOpacity 
        activeOpacity={0.6}
        onPress={()=>{
            setModalVisible(true)

        }}
        style={styles.mainContainer}>
        <View style={styles.imgCon}>
            <Image source={images.Polygon}/>
          

        </View>
        <CustomText
                label={"Portfolio Value"}
                fontSize={14}
                fontWeight={"400"}
                fontFamily={Roboto.SemiBold}
                color={colors.darkGrey}
              />

        </TouchableOpacity>
        
  )
}

export default PortfolioContainer

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        width:"40%",
        height:verticalScale(50),
        alignSelf:"center"
        // flexWrap:"wrap"
    },
    imgCon:{
        width:moderateScale(20),
        height:verticalScale(10),
        alignItems:"center",
        // justifyContent:"center"

    }

})