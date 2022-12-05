import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomTextInput from '../../../../components/CustomTextInput';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {SelectList} from 'react-native-dropdown-select-list';
import {icons} from '../../../../assets/icons';
import {scale, verticalScale} from 'react-native-size-matters';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Spacer} from '../../../../components/Spacer';
import {OpenImageLib} from '../../../../components/imageSelector';
import { useIsFocused } from '@react-navigation/native';

const DesignForm = ({
  designState,
  setDesignState,
  images,
  setImages,
  onAuthData,
  // banners,
  // setBanners,
}) => {
  const [selected, setSelected] = useState('');
  const [banner, setBanner] = useState('');
  const isFocused = useIsFocused();

  useEffect(() => {
    onAuthData()
  }, [isFocused])
  
  const data = [
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];

  // businessName:"",
  // headline:"",
  // action:"",
  // template:"",
  // category:""

  const FormList = [
    {
      id: 1,
      name: 'Name of Business',
      form: (
        <CustomTextInput
          placeholder={'Name of Business'}
          backgroundColor={colors.grey1}
          placeholderTextColor={colors.black}
          height={55}
          onChangeText={nam => {
            setDesignState({...designState, businessName: nam});
          }}
          value={designState.businessName}
          borderRadius={1}
          shadowOpacity={0.1}
        />
      ),
    },
    {
      id: 2,
      name: 'Headline',
      form: (
        <CustomTextInput
          placeholder={'headline to display in ad'}
          backgroundColor={colors.grey1}
          placeholderTextColor={colors.black}
          height={55}
          value={designState.headline}
          onChangeText={nam => {
            setDesignState({...designState, headline: nam});
          }}
          borderRadius={1}
          shadowRadius={0}
          shadowOpacity={0.1}
        />
      ),
    },
    {
      id: 1,
      name: 'Call to Action',
      //   form: (
      //     <CustomTextInput
      //       placeholder={'Get Now'}
      //       backgroundColor={colors.grey1}
      //       placeholderTextColor={colors.black}
      //       height={55}
      //       borderRadius={1}
      //       shadowOpacity={0.1}
      //     />
      //   ),
    },
  ];

  //   const onClickImage = async () => {
  //     try {
  //       const result = await launchImageLibrary({
  //         mediaType: 'photo',
  //         quality: 0.8,
  //       });
  //       if (!result.cancelled) {
  //         console.log('ImagesDetail✌', result.assets[0].uri);
  //         // setUri(result);
  //         setUri(result.assets[0].uri);
  //         const itemIndex = images.findIndex(item => item.index === index);
  //         if (itemIndex === -1) {
  //           setImages([
  //             ...images,
  //             {
  //               index,
  //               uri: result.assets[0].uri,
  //             },
  //           ]);
  //         } else {
  //           const temp = [...images];
  //           temp[itemIndex] = {...temp[itemIndex], uri: result.assets[0].uri};
  //           setImages(temp);
  //         }
  //       } else {
  //         setUri('');
  //       }
  //     } catch (error) {
  //       console.log('Error reading an image', error);
  //     }
  //   };

  return (
    <View style={{width: '100%', paddingHorizontal: 25}}>
      {FormList.map((list, index) => (
        <View key={index}>
          <CustomText
            label={list.name}
            fontSize={15}
            marginBottom={7}
            marginTop={15}
          />
          <View>{list.form}</View>
        </View>
      ))}
      <SelectList
        setSelected={val => setDesignState({...designState, action: val})}
        data={data}
        save="value"
        placeholder="Get Now"
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
      <Spacer height={20} />
      <View
        style={{
          width: '100%',
          padding: verticalScale(banner ? 0 : 25),
          borderWidth: 1,
          height: verticalScale(110),
          borderColor: colors.grey,
        }}>
        <TouchableOpacity
          onPress={() => {
            OpenImageLib().then(img => {
              setImages({...images, image1: img});
              // if (banners.length < 9) {
              //   banners.push(img);
              // }else{
              //   alert('You have reached The Limit');
              // }
            });
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={
                images?.image1 ? {uri: images?.image1} : icons.uploadImage
              }
              resizeMode={images?.image1 ? 'cover' : 'contain'}
              style={{
                // height: verticalScale(banner ? "100%" : 30),
                height: images?.image1 ? '100%' : verticalScale(30),
                width: '100%',
                marginBottom: images?.image1 ? 0 : 5,
              }}
            />
            {images?.image1 ? (
              <></>
            ) : (
              <>
                <Spacer height={5} />
                <CustomText label={'Upload Video or Photo'} />
              </>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DesignForm;
