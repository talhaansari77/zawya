import {View, Text, ImageBackground, SafeAreaView} from 'react-native';
import React from 'react';
import SelectCurrencyBody from './Molecules/SelectCurrencyBody';
import SelectCurrencyHeader from './Molecules/SelectCurrencyHeader';
import {images} from '../../../assets/images';

const SelectCurrency = () => {
  return (
    <ImageBackground
      source={images.BackgroundImage}
      resizeMode="cover"
      style={{height: '100%'}}>
      <SafeAreaView >
        <View style={{width:"100%", padding:20}}>
        <SelectCurrencyHeader />
        <SelectCurrencyBody />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SelectCurrency;
