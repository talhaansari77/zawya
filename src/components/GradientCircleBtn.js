import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  ScaledSheet,
  verticalScale,
  scale,
  moderateScale,
} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

// import { ActivityIndicator } from "react-native-paper";
import {colors} from '../utils/Colors';
function GradientCircleBtn({
  loading,
  title,
  onPress,
  icon,
  color,
  width,
  height,
  borderColor,
  borderRadius,
  marginTop,
  alignItems,
  justifyContent,
  borderWidth,
  backgroundColor,
  fontFamily,
  marginBottom,
  marginHorizontal,
  opacity,
  fontSize,
  alignSelf,
  paddingHorizontal,
}) {
  return (
    <TouchableOpacity
      disabled={loading}
      activeOpacity={0.6}
   
      onPress={onPress}>
    
        <View style={{flexDirection: 'row'}}>
        
            <LinearGradient
              colors={[colors.blueWithPurple,colors. niceBlue, ]}
              style={{
                height: height || 40,
                width: width || 40,
            borderRadius:99,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              >

                  <Icon name="navigate-next" color={colors.white}
                  size={moderateScale(30)}/>


             
            </LinearGradient>
        </View>
    
    </TouchableOpacity>
  );
}

export default GradientCircleBtn;
