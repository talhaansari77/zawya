import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import React from 'react';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import {images} from '../../../assets/images';
import {Spacer} from '../../../components/Spacer';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import CustomGradientButton from '../../../components/CustomGradientButton';
import RestoreWalletBody from './Molecules/RestoreWalletBody';
import RestoreWalletHeader from './Molecules/RestoreWalletHeader';

const RestoreWallet = ({navigation}) => {
  return (
    <ImageBackground
      source={images.BackgroundImage}
      resizeMode="cover"
      style={{height: '100%'}}>
      <SafeAreaView>
        <RestoreWalletHeader />

        <RestoreWalletBody />

        {/* <Spacer height={10} /> */}
        <CustomGradientButton
          title="Next"
          width="60%"
          fontSize={23}
          // backgroundColor={colors.primary}
          height={verticalScale(40)}
          borderRadius={moderateScale(10)}
          alignSelf={'center'}
          onPress={() => {
            navigation.navigate('RestoreWalletSecond'); 
          }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default RestoreWallet;
