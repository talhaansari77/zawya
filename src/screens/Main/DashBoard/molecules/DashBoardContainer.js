import {View, Text,} from 'react-native';
import React from 'react';
import GradientContainer from '../../../../components/GradientContainer';
import {PieChart} from 'react-native-svg-charts';
import {DashBoardGraphData} from '../../../../utils/Data';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import CustomText from '../../../../components/CustomText';
import { Roboto } from '../../../../utils/Fonts';
import { colors } from '../../../../utils/Colors';
import { Spacer } from '../../../../components/Spacer';




const DashBoardContainer = (props) => {
  return (
      <GradientContainer 
      onPress={props.onPress}
      height={verticalScale(120)}>
        <View style={{width:"100%",height:"100%",flexDirection:"row",alignItems:"center",}}>

        <PieChart
          style={{width:"40%",marginLeft:moderateScale(20)}}
          data={DashBoardGraphData}
          outerRadius={50}
          innerRadius={48}
        />
        <View style={{marginLeft:verticalScale(20)}}>

        <CustomText
                label={"Total"}
                fontSize={14}
                fontFamily={Roboto.SemiBold}
                color={colors.darkGrey}
              />
              <Spacer/>
                <CustomText
                label={"$17.98"}
                fontSize={20}
                fontWeight={"400"}
                fontFamily={Roboto.SemiBold}
                color={colors.white}
              />

        </View>


      

        </View>
      
        {/* <View style={styles.graphDetailsTextView}>
                      <Text style={styles.graphDetailsTitleText}>Total</Text>
                      <Text style={styles.graphDetailsTotalText}>$17.98</Text>
                    </View> */}
                  
      </GradientContainer>
  );
};

export default DashBoardContainer;
