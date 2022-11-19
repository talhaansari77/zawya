import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import React from 'react';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import {images} from '../../../assets/images';
import {Spacer} from '../../../components/Spacer';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomGradientButton from '../../../components/CustomGradientButton';
import GradientContainer from '../../../components/GradientContainer';
import RestoreWalletHeader from './Molecules/RestoreWalletHeader';

const RestoreWalletSecond = ({navigation}) => {
  const RestorWalletArray = [
    {
      id: 1,
      no: 7,
    },
    {
      id: 2,
      no: 8,
    },
    {
      id: 3,
      no: 9,
    },
    {
      id: 4,
      no: 10,
    },
    {
      id: 5,
      no: 11,
    },
    {
      id: 6,
      no: 12,
    },
  ];
  return (
    <ImageBackground
      source={images.BackgroundImage}
      resizeMode="cover"
      style={{height: '100%'}}>
      <SafeAreaView>
        <RestoreWalletHeader />

        <View style={{width: '100%', padding: 20}}>
          {RestorWalletArray.map((walletArray, index) => (
            <View key={index}>
              <GradientContainer
                height={60}
                marginBottom={20}
                alignItems={'center'}
                flexDirection={'row'}>
                <CustomText
                  label={walletArray.no}
                  color={colors.white}
                  fontSize={15}
                  fontFamily={'Montserrat-bold'}
                />

                <CustomTextInput
                  placeholder="------------"
                  placeholderTextColor={colors.white}
                  paddingHorizontal={10}
                />
              </GradientContainer>
            </View>
          ))}
        </View>

        {/* <Spacer height={20} /> */}
        <CustomGradientButton
          title="Restore"
          width="60%"
          fontSize={23}
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

export default RestoreWalletSecond;
