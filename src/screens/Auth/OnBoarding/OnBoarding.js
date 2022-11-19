import {StyleSheet, Text, View, Image, TouchableOpacity,ImageBackground} from 'react-native';
import React, {useState, useRef} from 'react';
import {images} from '../../../assets/images';
import commonStyles from '../../../utils/CommonStyles';
import {colors} from '../../../utils/Colors';
import {OnBoardingData} from '../../../utils/Data';
import {verticalScale, ScaledSheet, scale} from 'react-native-size-matters';
import AppIntroSlider from 'react-native-app-intro-slider';
import CustomText from '../../../components/CustomText';
import {Spacer} from '../../../components/Spacer';
import {Montserrat, Roboto} from '../../../utils/Fonts';
import Icon from 'react-native-vector-icons/Ionicons';
import GradientCircleBtn from '../../../components/GradientCircleBtn';
import SepratorLine from '../../../components/SepratorLine';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnBoarding = ({navigation}) => {
  const [page, setPage] = useState(0);
  const ref = useRef(null);

  const moveBack = () => {
    if (page == 0) {
    } else {
      ref?.current?.goToSlide(page - 1);
      setPage(page - 1);
    }
  };

  const moveForward = () => {
    if (page + 1 <= 2) {
      ref?.current?.goToSlide(page + 1);
      setPage(page + 1);
    }
  };

  const onNextScreen=async()=>{

    
    let response = await AsyncStorage?.getItem('finger');

    console.log("respon",response)
    if(response=="FingerPrint" || response=="Face")
    {
      // navigation.navigate("MainStack",{screen:"DashBoard"})
      navigation.navigate("Welcome")



    }
    else{
      navigation.navigate("SecurityWallet")


    }

   



    // console.log("finger",FingerPrint)
    // FingerPrintScreen

  }
  return (
    <ImageBackground source={images.BackgroundImage} resizeMode="cover" style={{height:"100%"}} >

      <View style={{height: '87%'}}>
        <AppIntroSlider
          showNextButton={false}
          showDoneButton={false}
          ref={ref}
          bottomButton
          showSkipButton={false}
          data={OnBoardingData}
          dotStyle={{backgroundColor: colors.lighBlue}}
          activeDotStyle={{backgroundColor: colors.white}}
          onSlideChange={index => setPage(index)}
          keyExtractor={(item, index) => {
            item?.id + index.toString();
          }}
          renderItem={({item}) => (
            <>
              {/* mainOnBoarding View */}
              <View style={styles.onBoardingContainer}>
                <Spacer height={85} />
                <View style={styles.imgConatiner}>
                  <Image
                    source={item.img}
                    style={styles.img}
                    resizeMode="contain"
                  />
                </View>
                <Spacer height={30} />
                <SepratorLine />
                <Spacer height={30} />

                <CustomText
                  label={item.title}
                  color={colors.white}
                  fontWeight={'600'}
                  fontFamily={Montserrat.SemiBold}
                  fontSize={verticalScale(18)}
                />
                <Spacer height={verticalScale(20)} />
                <View style={{width: '85%'}}>
                  <CustomText
                    label={item.desc}
                    fontFamily={Roboto.SemiBold}
                    color={colors.darkGray}
                    textAlign="center"
                    fontSize={verticalScale(10)}
                    textDecorationColor="black"
                  />
                </View>
              </View>
            </>
          )}
        />
      </View>

      <View
        style={[
          commonStyles.justify,
          {
            padding: scale(20),
          },
        ]}>
        {/* <Text>cdjbcd</Text> */}

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            moveBack();
          }}>
          <Icon name="chevron-back" size={30} color={colors.white} />
        </TouchableOpacity>

        <GradientCircleBtn
          onPress={() => {
            if (page == 2) {
              onNextScreen()
              // navigation.navigate('Welcome');
            } else {
              moveForward();
            }
          }}
        />

        <CustomText
          label={'Skip'}
          onPress={() => {
            navigation.navigate('Welcome');
          }}
          color={colors.white}
          fontFamily={Roboto.SemiBold}
          fontSize={verticalScale(12)}
        />
      </View>
    </ImageBackground>
  );
};

export default OnBoarding;
const styles = ScaledSheet.create({
  onBoardingContainer: {
    alignItems: 'center',
    flex: 1,
  },
  imgConatiner: {
    height: '45%',
    width: '90%',
    paddingRight: 5,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  dotInactive: {
    width: '8@s',
    height: '8@s',
    backgroundColor: colors.white,
    borderRadius: '25@s',
    marginHorizontal: '5@s',
  },
  dotactive1: {
    width: '8@s',
    height: '8@s',
    backgroundColor: colors.white,
    borderRadius: '99@s',
    marginHorizontal: '5@s',
  },
  dotactive2: {
    width: '35@s',
    height: '8@s',
    backgroundColor: colors.white,
    borderRadius: '99@s',
    marginHorizontal: '5@s',
  },
  dotactive3: {
    width: '45@s',
    height: '8@s',
    backgroundColor: colors.white,
    borderRadius: '99@s',
    marginHorizontal: '5@s',
  },
});
