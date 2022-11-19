import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import React from 'react';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import RecoveryScreenHeader from './Molecules/RecoveryScreenHeader';
import RecoveryScreenBody from './Molecules/RecoveryScreenBody';
import {Spacer} from '../../../components/Spacer';
import {images} from '../../../assets/images';

const RecoveryScreen = () => {
  return (
    <ImageBackground
      source={images.BackgroundImage}
      resizeMode="cover"
      style={{height: '100%'}}>
      <SafeAreaView>
        <RecoveryScreenHeader />
        <RecoveryScreenBody />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default RecoveryScreen;
