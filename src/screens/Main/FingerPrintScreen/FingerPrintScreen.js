import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import TouchID from 'react-native-touch-id';

const FingerPrintScreen = () => {
  const [isAuth, setIsAuth] = useState(false);

  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };



  useEffect(() => {
    handleBiometric();
  });

  const handleBiometric = () => {
    TouchID.isSupported(optionalConfigObject)
      .then(biometryType => {
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported........--------+++++++++++');
          TouchID.authenticate()
            .then(success => {
              console.log('Success', success);
            })
            .catch(err => {
              console.log('Error', err);
            });
        } else {
          console.log('TouchID is supported........--------+++++++++++');
          TouchID.authenticate('', optionalConfigObject)
            .then(success => {
              console.log('Success', success);
            })
            .catch(err => {
              console.log('Error', err);
            });
        }
      })
      .catch(err => {
        console.log('Errorsss', err);
      });
  };

  // const handleBiometric = () => {
  //   TouchID.authenticate()
  //   .then(success => {
  //     // Success code
  //   })
  //   .catch(error => {
  //     // Failure code
  //   });
  // };

  return (
    <View>
      <Text>FingerPrintScreen</Text>
    </View>
  );
};

export default FingerPrintScreen;