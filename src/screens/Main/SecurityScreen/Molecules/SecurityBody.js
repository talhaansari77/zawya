import {View, Text, Image, Switch, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../../../assets/images';
import GradientContainer from '../../../../components/GradientContainer';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {scale, verticalScale} from 'react-native-size-matters';
import {Spacer} from '../../../../components/Spacer';
import {ListItem} from 'react-native-elements';

const SecurityBody = ({navigation}) => {
  const [isOn, setisOn] = useState({
    withProfile: false,
  });

  const onViewProfile = () => {
    setisOn({...isOn, withProfile: !isOn.withProfile});
  };

  const SecuirtyFlatListData = [
    {
      title: 'Backup',
      subTitle:
        'Lorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit amet',
      image: images.BackupImage,
      blueImage: images.BackupBlueIcon,
      endTitle: 'Lorem, ipsum dolor sit amet',
      status: false,
      onPress: () => {
        navigation.navigate('RecoveryScreen');
      },
    },
    {
      title: 'Secure With a Passcode',
      subTitle:
        'Lorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit ametLorem, ipsum dolor sit amet',
      image: images.LockIconImage,
      blueImage: images.LockBlueIcon,
      onPress:()=>{
        navigation.navigate("AuthStack",{screen:"SecurityWallet"})

      },
      status: (
        <Switch
          value={isOn.withProfile}
          trackColor={{false: colors.white, true: colors.darkGrey}}
          thumbColor={colors.white}
          style={{transform: [{scaleX: 1.1}, {scaleY: 1.1}]}}
          onPress={() => setActive(!active)}
          onValueChange={onViewProfile}
        />
      ),
    },
  ];

  return (
    <View>
      {SecuirtyFlatListData.map((securityArray, index) => (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={securityArray.onPress}
          key={index}>
          <GradientContainer
            style={{}}
            height={120}
            marginBottom={20}
            //   alignItems={"center"}
            flexDirection={'row'}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
                paddingHorizontal: 10,
              }}>
              <View style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <CustomText
                  label={securityArray.title}
                  color={colors.white}
                  fontSize={13}
                  fontFamily={'Montserrat-bold'}
                />
                <View
                  style={{
                    width: '90%',
                    height: 1,
                    backgroundColor: colors.darkGreyBlue,
                  }}></View>
                <CustomText
                  label={securityArray.subTitle}
                  width={'90%'}
                  color={colors.white}
                  //   textAlign={"center"}
                  fontSize={9}
                  fontFamily={'Montserrat-regular'}
                />
              </View>

              <View style={{right: 2, top: 10, marginBottom: 20}}>
                <Image
                  source={securityArray.image}
                  style={{
                    height: verticalScale(30),
                    width: scale(30),
                    resizeMode: 'contain',
                    marginBottom: 12,
                  }}
                />
                <Spacer height={5} />

                {securityArray.status}
              </View>
            </View>
          </GradientContainer>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SecurityBody;
