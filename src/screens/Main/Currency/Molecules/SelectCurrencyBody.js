import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import GradientContainer from '../../../../components/GradientContainer';
import {colors} from '../../../../utils/Colors';
import CustomTextInput from '../../../../components/CustomTextInput';
import CustomText from '../../../../components/CustomText';
import {Spacer} from '../../../../components/Spacer';
import {images} from '../../../../assets/images';
import {scale, verticalScale} from 'react-native-size-matters';

const SelectCurrencyBody = () => {
  const SelectCurrencyData = [
    {
      flag: images.AustraliaFlag,
      name: 'AUD',
      currency: 'Australian Dollar',
    },
    {
      flag: images.BrazilFlag,
      name: 'BRL',
      currency: 'Brazilian Real',
    },
    {
      flag: images.CanadaFlag,
      name: 'CAD',
      currency: 'Canadian Dollar',
    },
    {
      flag: images.SwitzerlandFlag,
      name: 'CHF',
      currency: 'Swiss France',
    },
    {
      flag: images.ChinaFlag,
      name: 'CNY',
      currency: 'Chinese Yuan',
    },
  ];
  return (
    <View>
      
        <Spacer height={10} />
        {SelectCurrencyData.map((currencyArray, index) => (
            <TouchableOpacity>
          <View key={index}>
            <GradientContainer
              height={60} 
              marginBottom={20}
              alignItems={'center'}
              flexDirection={'row'}>
              {/* <CustomText
            label={currencyArray.no}
            color={colors.white}
            fontSize={15}
            fontFamily={'Montserrat-bold'}
          /> */}
              <Image
                source={currencyArray.flag}
                style={{
                  height: verticalScale(35),
                  width: scale(35),
                  resizeMode: 'contain',
                }}
              />
              <Spacer width={15} />

              <View>
                <CustomText
                  label={currencyArray.name}
                  color={colors.white}
                  fontSize={15}
                  fontFamily={'Montserrat-bold'}
                />

                <CustomText
                  label={currencyArray.currency}
                  color={colors.lighBlue}
                  fontSize={10}
                  fontFamily={'Montserrat-regular'}
                />
              </View>
            </GradientContainer>
          </View>
      </TouchableOpacity>

        ))}
    </View>
  );
};

export default SelectCurrencyBody;
