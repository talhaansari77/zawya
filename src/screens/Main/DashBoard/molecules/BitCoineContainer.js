import {StyleSheet, Text, View, Image, Platform} from 'react-native';
import React from 'react';
import GradientContainer from '../../../../components/GradientContainer';
import commonStyles from '../../../../utils/CommonStyles';
import {images} from '../../../../assets/images';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import CustomText from '../../../../components/CustomText';
import {Roboto} from '../../../../utils/Fonts';
import {colors} from '../../../../utils/Colors';
import {Spacer} from '../../../../components/Spacer';

const BitCoineContainer = ({coin,name,number,amount,grading,img, onPress}) => {
  return (
    <View style={{marginBottom:20}}>
      <GradientContainer height={verticalScale(Platform.OS==='ios'?100:120)} padding={-1} onPress={onPress}>
        <Image
          // resizeMode="contain"
          style={commonStyles.img}
          source={images.weave}
        />

        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              marginHorizontal: 10,
              
            }}>
            <View style={styles.imgContainer}>
              <Image source={{uri:img}} style={commonStyles.img} />
            </View>
          </View>
          <View style={{width: '100%', paddingRight: 20}}>
            <View
              style={[
                styles.innerTxt,
                {
                  marginTop: '7%',
                },
              ]}>
              <CustomText
                label={coin}
                fontSize={18}
                fontFamily={Roboto.SemiBold}
                color={colors.white}
              />

              <CustomText
                label={number}
                fontSize={16}
                fontFamily={Roboto.SemiBold}
                color={colors.white}
              />
            </View>
            <Spacer height={7} />
            <CustomText
              label={name}
              fontSize={13}
              fontWeight={'400'}
              fontFamily={Roboto.Light200}
              color={colors.darkGrey}
              marginBottom={4}
            />
            <View style={styles.darkLine}></View>

            <View
              style={[
                styles.innerTxt,
                {
                  marginTop: '3%',
                },
              ]}>
              <CustomText
                label={amount}
                fontSize={16}
                fontWeight={'400'}
                fontFamily={Roboto.Light200}
                color={colors.cloudyBlue}
              />

              <CustomText
                label={grading}
                fontSize={16}
                fontWeight={'400'}
                fontFamily={Roboto.Light200}
                color={colors.cloudyBlue}
              />
            </View>
          </View>
        </View>
      </GradientContainer>
    </View>
  );
};

export default BitCoineContainer;

const styles = StyleSheet.create({
  imgContainer: {
    width: 70,
    height: 70,
    borderRadius: 99,
    overflow: 'hidden',
  },
  innerTxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',

    alignItems: 'center',
  },
  darkLine: {
    width: '75%',
    height: 2,
    backgroundColor: colors.primary,
  },
});
