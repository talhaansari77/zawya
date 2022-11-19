import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LineSeparator from './LineSeparator';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import CustomText from '../../../../components/CustomText';
import {Montserrat} from '../../../../utils/Fonts';
import {colors} from '../../../../utils/Colors';
import { Spacer } from '../../../../components/Spacer';

const PortfolioAge = () => {
  return (
    <View style={{width: '100%'}}>
      <LineSeparator width={'100%'} height={1} />
      <View style={styles.innerView}>
      <View style={{width:"40%",alignItems:"center"}}>
          <CustomText
            label={'+&0.16'}
            fontSize={14}
            fontWeight={'500'}
            fontFamily={Montserrat.SemiBold}
            color={colors.frogGreen}
          />
          <Spacer height={10}/>

          <CustomText
            label={'Change'}
            fontSize={13}
            fontWeight={'500'}
            fontFamily={Montserrat.SemiBold}
            color={colors.darkGrey}
          />
        </View>

        <LineSeparator width={1} height={verticalScale(50)} />

        <View style={{width:"40%",alignItems:"center"}}>
        <CustomText
            label={'1 year'}
            fontSize={14}
            fontWeight={'600'}
            fontFamily={Montserrat.SemiBold}
            color={colors.white}
            
          />
          <Spacer height={10}/>
           <CustomText
            label={'Portfolio Age'}
            fontSize={13}
            fontWeight={'500'}
            fontFamily={Montserrat.SemiBold}
            color={colors.darkGrey}
          />
        </View>
        

      </View>

      <LineSeparator width={'100%'} height={1} />



    </View>
  );
};

export default PortfolioAge;

const styles = StyleSheet.create({
  innerView: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: '100%',
    height: verticalScale(80),
    paddingTop: '5%',
    // alignItems:"center"
  },
});
