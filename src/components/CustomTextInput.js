import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
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

const CustomTextInput = ({
  eyeClick,
  password,
  setEyeClick,
  error,
  withLabel,
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
            height: props.height || verticalScale(40),
            borderRadius: props.borderRadius || moderateScale(15),
            backgroundColor: props.backgroundColor,
            marginTop: props.marginTop || verticalScale(0),
            flexDirection: "row",
            borderColor: props.borderColor ,
            alignItems: "center",
            paddingLeft: props.paddingLeft,
          },
        ]}
      >

        <TextInput
          style={[
            {
              width:  password || eyeClick||props.mic || props.downArrow? props.inputWidth  : "95%",
              height: props.inputHeight || "100%",
              marginLeft: props.inputLeftMargin || 10,
              paddingRight: props.paddingRight || 10,
              paddingHorizontal: props.paddingHorizontal,
              fontFamily: props.fontFamily || "Montserrat-regular",
              color: props.color || colors.white,
              fontSize: verticalScale(13),
              textAlign: props.textAlign || "center",
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
        {password ? (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setEyeClick(!eyeClick);
            }}
          >
            {eyeClick ? (
              <Ionicons
                name="eye-off"
                size={moderateScale(22)}
                style={{ opacity: 0.5 }}
                color={colors.primary}
              />
            ) : (
              <Ionicons
                name="eye"
                size={moderateScale(22)}
                style={{ opacity: 0.5 }}
                color={colors.primary}
              />
            )}
            {/* <Image style={styles.icon} source={eyeClick ? images.eye:images.hiddenEye } /> */}
          </TouchableOpacity>
        ) : null}

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
    height: "15@vs",
    tintColor: colors.gray,
  },
});
