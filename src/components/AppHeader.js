import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import commonStyles from '../utils/CommonStyles';
import {images} from '../assets/images';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomText from './CustomText';
import {colors} from '../utils/Colors';
import {Montserrat, Roboto} from '../utils/Fonts';

const AppHeader = props => {
  return (
    <View style={commonStyles.justify}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={props.onPress}
        style={{width:  scale(props.width || 35),height: verticalScale( props.height||  35),marginLeft:props.marginLeft}}>
            <Image 
                resizeMode="contain"
        // style={{
        //   width: scale(props.width || 35),
        //   height: verticalScale(props.height || 35),
        // }}
        
          style={commonStyles.img}
          source={props.img}
        />
      </TouchableOpacity>

      <CustomText
        label={props.txt}
        color={colors.white}
        fontSize={props.fontSize}
        fontFamily={Roboto.SemiBold}
      />

      <TouchableOpacity
      onPress={props.rightOnPress}
        activeOpacity={0.6}
        style={{
          width: scale(props.rigthWidth || 35),
          height: verticalScale(props.rightHeight || 35),
        }}>
        <Image
          resizeMode="contain"
          style={commonStyles.img}
          source={props.rightImg}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({});
