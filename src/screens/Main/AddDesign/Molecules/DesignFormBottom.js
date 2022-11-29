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
import {useNavigation} from '@react-navigation/core';
import {SelectList} from 'react-native-dropdown-select-list';


const DesignFormBottom = ({
  onHandleSave,
  designState,
  setDesignState,
  images,
  setImages,
}) => {
  const navigation = useNavigation();
  const [logo, setLogo] = useState('');



  const [templateIndex, setTemplateIndex] = useState(-1);

  const data = [
    {key: '2', value: 'Restaurant'},
    {key: '3', value: 'Food'},
    {key: '5', value: 'Coffee'},
    {key: '6', value: 'Perfume'},
  ];

   
 
 
 

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
              onPress={() => {
                setDesignState({...designState, template: index});
                setTemplateIndex(index);
              }}
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
      <Spacer height={5}/>
         <SelectList
        setSelected={val => setDesignState({...designState, category: val})}
        data={data}
        save="value"
        placeholder="Add Category"
        colors={colors.black}
        placeholderTextColor={'#000'}
        arrowicon={
          <Image
            style={{
              height: 20,
              width: 20,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
            source={icons.polygon}
          />
        }
        boxStyles={{
          borderRadius: 0,
          backgroundColor: colors.grey1,
          borderColor: colors.white,
          height: 55,
        }}
        inputStyles={{
          fontSize: verticalScale(14),
          fontWeight: '200',
          alignSelf: 'center',
          color: 'black',
        }}
        dropdownTextStyles={{
          color: 'black',
        }}
      /> 
       {/* <CustomTextInput
        placeholder={'Define Category'}
        backgroundColor={colors.grey1}
        value={designState.category}

        onChangeText={nam => {
          setDesignState({...designState, category: nam});
        }}
        placeholderTextColor={colors.black}
        height={55}
        borderRadius={1}
        shadowOpacity={0.1}
      />  */}

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
          height: verticalScale(110),
          borderColor: colors.grey,
        }}>
        <TouchableOpacity
          onPress={() => {
            OpenImageLib().then(img => {
              setImages({...images, image2: img});
            });
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={images?.image2 ? {uri: images?.image2} : icons.uploadImage}
              resizeMode={images?.image2 ? 'cover' : 'contain'}
              style={{
                height: images?.image2 ? '100%' : verticalScale(30),
                width: '100%',
                marginBottom: images?.image2 ? 0 : 5,}}
            />
            {images?.image2 ?(
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
          onPress={() => navigation.goBack()}
        />
        <CustomButton
          onPress={() => {
            onHandleSave();
          }}
          title={'Next'}
          width={120}
          height={55}
        />
      </View>
    </View>
  );
};

export default DesignFormBottom;
