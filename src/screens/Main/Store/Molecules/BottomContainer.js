import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../../utils/Colors';
import CustomText from '../../../../components/CustomText';
import {Roboto} from '../../../../utils/Fonts';
import {Spacer} from '../../../../components/Spacer';

const BottomContainer = () => {
  return (
    <View style={styles.mainContainer}>
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
      <View
        style={styles.btnContainer}>
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
    width: '100%',
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.primary,
    padding: moderateScale(8),
  },
  boxContainer: {
    width: '32@s',
    height: '30@vs',
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.primary,
  },
  btnContainer:{
    backgroundColor: colors.primary,
    padding: moderateScale(5),
    borderRadius: 10,
    paddingHorizontal: 7,
  }
});
