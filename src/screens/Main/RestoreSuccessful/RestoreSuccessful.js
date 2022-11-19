import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import React from 'react';
import RestoreSuccessfulHeader from './Molecules/RestoreSuccessfulHeader';
import CustomGradientButton from '../../../components/CustomGradientButton';
import {Spacer} from '../../../components/Spacer';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {images} from '../../../assets/images';

const RestoreSuccessful = ({navigation}) => {
  return (
    <ImageBackground
      source={images.BackgroundImage}
      resizeMode="cover"
      style={{height: '100%'}}>
      <SafeAreaView>
        <RestoreSuccessfulHeader />

        <Spacer height={25} />

        <CustomGradientButton
          title="BACK"
          width="50%"
          fontSize={20}
          height={verticalScale(40)}
          borderRadius={moderateScale(50)}
          alignSelf={'center'}
          fontFamily={'Montserrat-bold'}
          onPress={() => {
            navigation.navigate('RestoreWalletSecond');
          }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default RestoreSuccessful;
