import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import SupportScreenHeader from './Molecules/SupportScreenHeader';
import {colors} from '../../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../../../components/CustomText';
import CustomTextInput from '../../../components/CustomTextInput';
import {Spacer} from '../../../components/Spacer';
import CustomGradientButton from '../../../components/CustomGradientButton';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { images } from '../../../assets/images';

const SupportScreen = () => {
  return (
    <ImageBackground
    source={images.BackgroundImage}
    resizeMode="cover"
    style={{height: '100%'}}>
    <SafeAreaView>
      <View style={{width: '100%', padding: 20}}>
        <SupportScreenHeader />
      </View>

      <View
        style={[
          styles.container,
          styles.shadowContainer,
          styles.securityMarginTop,
        ]}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.8, y: 0.0}}
          colors={[
            colors.darkGreyBlueThired,
            colors.darkGreyBlueThired,
            colors.duskSecond,
          ]}
          style={styles.securityFlatListView}>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={{height:55}}>
              <CustomText
                label={'Email Address'}
                alignSelf={'center'}
                textAlign={'center'}
                justifyContent={'center'}
                fontSize={10}
                color={colors.lighBlue}
                fontFamily={'Montserrat-regular'}
              />
              <CustomTextInput
                placeholder="Type your email address here!"
                placeholderTextColor={colors.white}
                paddingHorizontal={10}
                alignItems={'center'}
                alignSelf={'center'}
                // textAlign={'center'}
                justifyContent={'center'}
                height={35}
              />
            </View>
            
          </TouchableOpacity>
        </LinearGradient>
      </View>



      <View
        style={[
          styles.container,
          styles.shadowContainer,
          styles.securityMarginTop,
        ]}>
        <Spacer height={15} />
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.8, y: 0.0}}
          colors={[
            colors.darkGreyBlueThired,
            colors.darkGreyBlueThired,
            colors.duskSecond,
          ]}
          style={styles.securityFlatListView}>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={{height:90}}>
              <CustomText
                label={'Message'}
                alignSelf={'center'}
                textAlign={'center'}
                justifyContent={'center'}
                fontSize={12}
                color={colors.lighBlue}
                fontFamily={'Montserrat-regular'}
              />
              <Spacer height={5} />
              <CustomTextInput
                placeholder="Type your Message here"
                multiline={true}
                placeholderTextColor={colors.white}
                paddingHorizontal={10}
                alignItems={'center'}
                alignSelf={'center'}
                // textAlign={'center'}
                justifyContent={'center'}
              />
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <Spacer height={25} />
      <CustomGradientButton
      x1={1}
      x2={1}
      y1={1}
      y2={0}
          title="SEND"
          width="40%"
          fontSize={18}
          height={verticalScale(40)}
          borderRadius={moderateScale(10)}
          alignSelf={'center'}
          onPress={() => {
            navigation.navigate('RestoreSuccessful');
          }}
        />
    </SafeAreaView>
    </ImageBackground>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  shadowContainer: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },

  container: {
    width: '100%',
    paddingHorizontal: 15,
  },

  securityMarginTop: {
    marginTop: 10,
  },
  securityFlatListView: {
    padding: 15,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.darkGreyBlue,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  //   flatListInnerTextView: {
  //     flexDirection: 'row',
  //   },
  flatListInnerTitleText: {
    //...Fonts.style.boldWhite
    color: colors.white,
    fontWeight: 'bold',
  },
  securityInnerImage: {
    width: 35,
    height: 35,
    right: 0,
    position: 'absolute',
    top: 5,
    resizeMode: 'contain',
  },
  separatorLine: {
    width: '84%',
    height: 1,
    backgroundColor: colors.darkGreyBlue,
    top: 7,
  },
  securitySubTitleView: {
    width: '80%',
  },
  flatListInnersubTitleText: {
    //...Fonts.style.regularBluegrey,
    color: colors.bluegrey,

    fontSize: 13,
    marginTop: 13,
  },
});
