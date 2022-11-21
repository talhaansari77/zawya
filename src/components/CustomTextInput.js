import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Platform
} from "react-native";
import React from "react";
import {
  moderateScale,
  scale,
  ScaledSheet,
  verticalScale,
} from "react-native-size-matters";
import CustomText from "./CustomText";
import {colors} from "../utils/Colors"
import commonStyles from "../utils/CommonStyles";

const CustomTextInput = ({
  eyeClick,
  password,
  setEyeClick,
  error,
  withLabel,
  leftIcon,
  source,
  iconWidth,
  iconHeight,
  ...props
}) => {
  return (
    <View>
      {withLabel ? (
        <CustomText
          label={withLabel}
          color={colors.gray}
          fontFamily="regular"
          fontSize={verticalScale(10)}
          // marginBottom={verticalScale(10)}
        />
      ) : null}
      <TouchableOpacity
        onPress={props.onPress}
        disabled={!props.onPress}
        style={[
          {
            width: props.width || "100%",
            height: props.height || verticalScale(50),
            borderRadius: props.borderRadius || moderateScale(30),
            backgroundColor: props.backgroundColor,
            marginTop: props.marginTop || verticalScale(0),
            flexDirection: "row",
            borderColor: props.borderColor ,
            alignItems: "center",
            paddingLeft: props.paddingLeft,

            backgroundColor:colors.white,

            shadowColor: Platform.OS=="ios"?"#ced4da":colors.black,
            shadowRadius: 8,
            elevation: 5,
            alignItems: "center",
            shadowOpacity: 0.5,
        
            shadowOffset: { width: 3, height: 5 },
          },
        ]}
      >
        {
          leftIcon?(
            <View style={{

              width:  iconWidth ||scale(20),
              height:  iconHeight||verticalScale(20),
              marginLeft:verticalScale(10),

            }} >
           <Image style={commonStyles.img} source={leftIcon} />


            </View>

          ):<></>
        }



        <TextInput
          style={[
            {
              width: props.inputWidth  || "95%",
              height: props.inputHeight || "100%",
              marginLeft: props.inputLeftMargin || 10,
              paddingRight: props.paddingRight || 10,
              paddingHorizontal: props.paddingHorizontal,
              fontFamily: props.fontFamily || "Montserrat-regular",
              color: props.color || colors.white,
              fontSize: verticalScale(13),
              // textAlign: props.textAlign || "center",
              multiline: props.multiline
              // alignSelf: props.alignItems || "center"
            },
          ]}
          onChangeText={props.onChangeText}
          value={props.value}
          numberOfLines={props.numberOfLines}
          keyboardType={props.keyboardType}
          autoCapitalize="none"
          multiline={props.multiline}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
          secureTextEntry={props.secureTextEntry}
        />
       

      </TouchableOpacity>
      {error ? (
        <CustomText
          label="* "
          children={error}
          fontSize={verticalScale(8)}
          color={colors.red}
          fontWeight={"600"}
          marginTop={verticalScale(5)}
        />
      ) : null}
    </View>
  );
};
export default CustomTextInput;
const styles = ScaledSheet.create({
  icon: {
    width: "20@s",
    height: "20@vs",
    marginLeft:verticalScale(10),
  },
});
