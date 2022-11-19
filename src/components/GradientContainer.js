import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const GradientContainer = props => {
  return (
    <TouchableOpacity
    activeOpacity={props.onPress?6:1}
    onPress={props.onPress}
    disabled={!props.onPress}
      style={{
        width: props.width || '100%',
        height: props.height ||  verticalScale(100),
        borderRadius: moderateScale(props.borderRadius || 10),
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        overflow: 'hidden',
        flexDirection:"row",
        borderWidth:props.borderWidth,
        borderColor:props.borderColor,
        shadowColor: colors.black,
        backgroundColor:colors.black,
        shadowOffset: {
          width: 20,
          height: 20
        },
        shadowOpacity: 5,
        shadowRadius: 10,
        elevation: 10
       
        // margin:scale(props.padding ||10 )
      }}>
      <LinearGradient
        // style={{width: '100%', height: '100%', padding: props.padding || 10}}
        style={{
          width: '100%',
          height: '100%',
          padding: props.padding || 10,
          flexDirection: props.flexDirection,
          alignItems:props.alignItems,
         
        
        }}
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.8, y: 0.0}}
        colors={[colors.darkGreyBlueSecond, colors.dusk]}
        >
        {props.children}
        
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientContainer;

const styles = StyleSheet.create({

  shadowContainer: {
    shadowColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11
  },
});
