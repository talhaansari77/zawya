import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  moderateScale,
  scale,
  ScaledSheet,
  verticalScale,
} from 'react-native-size-matters';
import {colors} from '../../../../utils/Colors';
import CustomText from '../../../../components/CustomText';
import {Roboto} from '../../../../utils/Fonts';
import {Spacer} from '../../../../components/Spacer';

const BottomContainer = ({setVisible}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
      onPress={()=>setVisible(false)}
        style={{
          height: 20,
          width: 20,
          borderRadius: 10,
          backgroundColor: colors.grey,
          position: 'absolute',
          top: -7,
          right: -7,
          zIndex: 99,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>x</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={styles.boxContainer}></View>
        <Spacer width={10} />

        <CustomText
          label="lorem ipsem sit dolor"
          color={colors.black}
          fontSize={12}
          alignSelf={'center'}
          fontFamily={Roboto.Regular300}
        />
      </View>
      <View style={styles.btnContainer}>
        <CustomText
          label="lorem"
          color={colors.white}
          fontSize={12}
          alignSelf={'center'}
          fontFamily={Roboto.Regular300}
        />
      </View>
    </View>
  );
};

export default BottomContainer;

const styles = ScaledSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.primary,
    padding: moderateScale(8),
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: verticalScale(60),
    backgroundColor: colors.white,
    marginHorizontal: scale(10),
    alignSelf: 'center',
    // zIndex:99
  },
  boxContainer: {
    width: '32@s',
    height: '30@vs',
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
  btnContainer: {
    backgroundColor: colors.primary,
    padding: moderateScale(5),
    borderRadius: 10,
    paddingHorizontal: 7,
  },
});
