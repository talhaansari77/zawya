import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomText from '../../../../components/CustomText';
import {Spacer} from '../../../../components/Spacer';
import {icons} from '../../../../assets/icons';
import CustomTextInput from '../../../../components/CustomTextInput';
import {colors} from '../../../../utils/Colors';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomButton from '../../../../components/CustomButton';
import {OpenImageLib} from '../../../../components/imageSelector';

const DesignFormBottom = () => {
  const [logo, setLogo] = useState('');
  const [templateIndex, setTemplateIndex] = useState(-1);

  const designs = [
    {
      id: 1,
      icons: icons.D1,
    },
    {
      id: 2,
      icons: icons.D2,
    },
    {
      id: 3,
      icons: icons.D3,
    },
    {
      id: 4,
      icons: icons.D4,
    },
    {
      id: 5,
      icons: icons.D5,
    },
  ];

  const BannerTemplate = ({src, templateIndex, index}) => (
    <Image
      resizeMode="contain"
      style={{
        height: 95,
        width: 75,
        tintColor: templateIndex === index ? colors.primary : colors.grey,
      }}
      source={src}
    />
  );
  return (
    <View style={{width: '100%', paddingHorizontal: 25}}>
      <Spacer height={15} />
      <CustomText label={'Template'} fontSize={15} />
      <Spacer height={15} />
      <ScrollView horizontal={true}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
          width: '100%',
          //  paddingHorizontal: 50, 
          //  backgroundColor:"red"
          
        }}>
        {designs.map((design, index) => (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setTemplateIndex(index)}
            key={index}>
            <BannerTemplate
              src={design.icons}
              templateIndex={templateIndex}
              index={index}
            />
          </TouchableOpacity>
        ))}
      </View>
      </ScrollView>
      <CustomText
        label={'Add Category'}
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
          padding: verticalScale(logo ? 0 : 25),
          borderWidth: 1,
          borderColor: colors.grey,
        }}>
        <TouchableOpacity onPress={() => OpenImageLib(setLogo)}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={logo ? {uri: logo} : icons.uploadImage}
              resizeMode={'contain'}
              style={{
                height: verticalScale(logo ? 100 : 30),
                width: '100%',
                marginBottom: logo ? 0 : 5,
              }}
            />
            {logo ? (
              <></>
            ) : (
              <>
                <Spacer height={5} />
                <CustomText label={'Upload Image'} />
              </>
            )}
          </View>
        </TouchableOpacity>
      </View>
      <Spacer height={15} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <CustomButton
          width={120}
          height={55}
          backgroundColor={colors.white}
          borderWidth={1}
          borderColor={colors.black}
          color={colors.black}
          title={'Cancel'}
        />
        <CustomButton title={'Next'} width={120} height={55} />
      </View>
    </View>
  );
};

export default DesignFormBottom;
