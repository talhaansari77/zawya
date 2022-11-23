import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../../../../components/CustomTextInput';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {SelectList} from 'react-native-dropdown-select-list';
import {icons} from '../../../../assets/icons';
import {scale, verticalScale} from 'react-native-size-matters';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Spacer} from '../../../../components/Spacer';

const DesignForm = () => {
  const [selected, setSelected] = useState('');

  const data = [
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];

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
        setSelected={val => setSelected(val)}
        data={data}
        save="value"
        placeholder="Get Now"
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
        }}
      />
      <Spacer height={20} />
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
            <CustomText label={'Upload Video or Photo'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DesignForm;
