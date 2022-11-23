import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {Spacer} from '../../../../components/Spacer';
import {icons} from '../../../../assets/icons';
import CustomTextInput from '../../../../components/CustomTextInput';
import {colors} from '../../../../utils/Colors';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomButton from '../../../../components/CustomButton';

const DesignFormBottom = () => {
  const designs = [
    {
      id: 1,
      icons: (
        <Image
          resizeMode="contain"
          style={{height: 100, width: 80}}
          source={icons.D1}
        />
      ),
    },
    {
      id: 2,
      icons: (
        <Image
          resizeMode="contain"
          style={{height: 100, width: 80}}
          source={icons.D3}
        />
      ),
    },
    {
      id: 3,
      icons: (
        <Image
          resizeMode="contain"
          style={{height: 100, width: 80}}
          source={icons.D2}
        />
      ),
    },
    {
      id: 4,
      icons: (
        <Image
          resizeMode="contain"
          style={{height: 100, width: 80}}
          source={icons.D4}
        />
      ),
    },
    {
      id: 5,
      icons: (
        <Image
          resizeMode="contain"
          style={{height: 100, width: 80}}
          source={icons.D5}
        />
      ),
    },
  ];
  return (
    <View style={{width: '100%', paddingHorizontal: 25}}>
      <Spacer height={15} />
      <CustomText label={'Template'} fontSize={15} />
      <Spacer height={15} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        {designs.map((design, index) => (
          <View key={index}>{design.icons}</View>
        ))}
      </View>
      <CustomText
        label={'Add Catrgory'}
        fontSize={15}
        marginBottom={7}
        marginTop={15}
      />
      <CustomTextInput
        placeholder={'Define Category'}
        backgroundColor={colors.grey1}
        placeholderTextColor={colors.black}
        height={55}
        borderRadius={1}
        shadowOpacity={0.1}
      />

      <CustomText
        label={'Business Logo'}
        fontSize={15}
        marginBottom={7}
        marginTop={15}
      />

      <View
        style={{
          width: '100%',
          padding: verticalScale(25),
          borderWidth: 1,
          borderColor: colors.grey,
        }}>
        <TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Image
              source={icons.uploadImage}
              resizeMode={'contain'}
              style={{
                height: verticalScale(30),
                width: scale(40),
                marginBottom: 5,
              }}
            />
            <Spacer height={5} />
            <CustomText label={'Upload Image'} />
          </View>
        </TouchableOpacity>
      </View>
              <Spacer height={15} />
      <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <CustomButton
          width={120}
          height={55}
          backgroundColor={colors.white}
          borderWidth={1}
          borderColor={colors.black}
          color={colors.black}
          title={'Cancle'}
        />
        <CustomButton title={'Next'} width={120}
          height={55} />
      </View>
    </View>
  );
};

export default DesignFormBottom;
