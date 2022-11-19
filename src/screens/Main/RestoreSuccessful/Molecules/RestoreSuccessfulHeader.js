import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {Spacer} from '../../../../components/Spacer';
import {colors} from '../../../../utils/Colors';
import {images} from '../../../../assets/images';
import {scale, verticalScale} from 'react-native-size-matters';

const RestoreSuccessfulHeader = () => {
  return (
    <View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          resizeMode: 'contain',
        }}>
        <Image
          style={{
            height: verticalScale(310),
            width: scale(290),
            resizeMode: 'contain',
          }}
          source={images.RestoreSuccessIcon}
        />
      </View>
      <CustomText
        label={'Restore Successful!'}
        alignSelf={'center'}
        fontSize={20}
        color={colors.white}
        fontFamily={'Montserrat-Bold'}
      />
      <Spacer height={30} />
      <View style={{width: '100%', paddingHorizontal: 60}}>
        <CustomText
          label={
            'You did it! Your assests are synced and ready for sending, receiving, and exchanging.'
          }
          alignSelf={'center'}
          textAlign={'center'}
          alignItems={'center'}
          fontSize={12}
          color={colors.white}
          fontFamily={'Montserrat-regular'}
        />
      </View>
      <Spacer height={25} />

      <TouchableOpacity>
        <CustomText
          label={'learn More'}
          alignSelf={'center'}
          fontSize={15}
          color={colors.blue}
          fontFamily={'Montserrat-Bold'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RestoreSuccessfulHeader;
