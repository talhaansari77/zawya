import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const OpenImageLib = async () => {
  let result = '';
  try {
    result = await launchImageLibrary({
      mediaType: 'mixed',
      quality: 0.8,
    });
  } catch (error) {
    console.log('Error reading an image', error);
  }
  console.log(result.assets[0].uri);
  return result.assets[0].uri;
};
export const OpenImageLibWithSetter = async set => {
  let result = '';
  try {
    result = await launchImageLibrary({
      mediaType: 'image',
      quality: 0.8,
    });
  } catch (error) {
    console.log('Error reading an image', error);
  }
  console.log(result.assets[0].uri);
  set(result.assets[0].uri);
};
