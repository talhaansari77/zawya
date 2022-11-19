import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {images} from '../../../../assets/images';
import {colors} from '../../../../utils/Colors';

const SecurityHeader = () => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View style={{flex: 4}}>
          <TouchableOpacity>
            <Image
              style={{height: 50, width: 50}}
              source={images.wallet}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 7, justifyContent: 'center'}}>
          <CustomText
            label={'Security'}
            color={colors.white}
            fontFamily={'Montserrat-bold'}
            fontSize={20}
          />
        </View>
        {/* <View style={{backgroundColor:"red"}}></View> */}
      </View>
    </View>
  );
};

export default SecurityHeader;
