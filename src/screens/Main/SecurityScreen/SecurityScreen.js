import {View, Text, ImageBackground, SafeAreaView} from 'react-native';
import React from 'react';
import { images } from '../../../assets/images';
import SecurityHeader from './Molecules/SecurityHeader';
import SecurityBody from './Molecules/SecurityBody';
import { Spacer } from '../../../components/Spacer';


const SecurityScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={images.BackgroundImage}
      resizeMode="cover"
      style={{height: '100%'}}>
        <SafeAreaView>
            <View style={{width:"100%", padding:20}}>
        <SecurityHeader  />
        <Spacer height={10} />
        <SecurityBody navigation={navigation}  />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SecurityScreen;
