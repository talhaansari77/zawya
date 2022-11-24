import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const OpenImageLib = async setImageCase => {
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
  setImageCase(result.assets[0].uri);
};
