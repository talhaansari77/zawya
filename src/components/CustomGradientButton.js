import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
// import { Ionicons } from "@expo/vector-icons";
import {
  ScaledSheet,
  verticalScale,
  scale,
  moderateScale,
} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

// import { ActivityIndicator } from "react-native-paper";
import {colors} from '../utils/Colors';
function CustomGradientButton({
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
  icons,
  x1,
  y1,
  x2,
  y2,
  iconMarginRight,
  marginLeft
}) {
  return (
    <TouchableOpacity
      disabled={loading}
      activeOpacity={0.6}
      style={[
        {
          //       backgroundColor: backgroundColor || <LinearGradient
          //       colors={["#8E59E2", "#f3f3f3"]}
          //   ></LinearGradient>,
          // backgroundColor: <LinearGradient colors={["#8E59E2", "#f3f3f3"]} />,
          width: width || '100%',
          height: height || verticalScale(40),
          borderColor: borderColor,
          borderRadius: borderRadius || 8,
          borderWidth: borderWidth,
          opacity: opacity,
          alignItems: alignItems || 'center',
          alignSelf: alignSelf || 'center',
          justifyContent: justifyContent || 'center',
          alignContent: 'center',
          // textAlign:"center",
          marginTop,
          marginBottom: marginBottom,
          marginHorizontal: marginHorizontal,
          paddingHorizontal: paddingHorizontal,
        },
      ]}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={colors.white} size={moderateScale(26)} />
      ) : (
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: '90%',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <LinearGradient
              start={{x: x1 || 0, y: y1 || 1}}
              end={{x: x2 || 1, y: y2 || 0}}
              colors={[colors.niceBlue, colors.blueWithPurple]}
              style={{
                height: '100%',
                alignItems: 'center',
                borderRadius: borderRadius || 10,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <View
                style={{
                  width:  icons?"80%":'100%',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                  <View></View>
                <Text
                  style={[
                    {
                      color: color || colors.white,
                      fontSize: fontSize || verticalScale(15),
                      fontFamily: fontFamily || 'Montserrat-Bold',
                      alignSelf: alignSelf || 'center',
                      // marginLeft:"15%"
                      // textAlign: textAlign
                    },
                  ]}>
                  {title}
                </Text>
             
              </View>
              {icons ? <View
                style={{paddingRight: iconMarginRight}}
                >{icons ? icons : null}</View> : null}
            </LinearGradient>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default CustomGradientButton;
