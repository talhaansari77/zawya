import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import styled from 'react-native-styled-components';
import {colors} from '../../../../utils/Colors';
import CustomText from '../../../../components/CustomText';
import GradientContainer from '../../../../components/GradientContainer';
import {Spacer} from '../../../../components/Spacer';
import CustomGradientButton from '../../../../components/CustomGradientButton';
import {moderateScale, verticalScale} from 'react-native-size-matters';

const RecoveryScreenBody = () => {
  const RecoveryFlatListPhrase = [
    {
      title: 'plastic',
    },
    {
      title: 'Inhale',
    },
    {
      title: 'Thunder',
    },
    {
      title: 'Monster',
    },
    {
      title: 'Cradle',
    },
    {
      title: 'Practies',
    },
    {
      title: 'plastic',
    },
    {
      title: 'plastic',
    },
    {
      title: 'Inhale',
    },
    {
      title: 'Thunder',
    },
    {
      title: 'Monster',
    },
    {
      title: 'Cradle',
    },
  ];
  const RecoveryFlatListBlankPhrase = [
    {
      title: '----------',
    },
    {
      title: '----------',
    },
    {
      title: '----------',
    },
    {
      title: '----------',
    },
    {
      title: '----------',
    },
    {
      title: '----------',
    },
    {
      title: '----------',
    },
    {
      title: '----------',
    },
    {
      title: '----------',
    },
    {
      title: '----------',
    },
    {
      title: '----------',
    },
    {
      title: '----------',
    },
  ];

  const [active, setActive] = useState(true);
  return (
    <View>
      <Container>
        <GradientContainer height={400}>
          <View style={{width: '100%', paddingHorizontal: 40}}>
            <CustomText
              color={colors.darkGray}
              fontSize={12}
              textAlign={'center'}
              fontWeight={'400'}
              fontFamily={'Montserrat-regular'}
              alignSelf={'center'}
              label={
                'Write down your 12 words recovery phrase in correct order'
              }
            />
          </View>

          <FlatList
            data={active ? RecoveryFlatListBlankPhrase : RecoveryFlatListPhrase}
            renderItem={({item, index}) => (
              <View>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingVertical: 4,
                    top: 10,
                    marginTop: 5,
                    paddingBottom: 10,
                  }}>
                  <CustomText
                    label={index + 1}
                    fontSize={12}
                    color={colors.white}
                    width={'7%'}
                    fontWeight={'400'}
                    fontFamily={'Montserrat-regular'}
                  />
                  <CustomText
                    label={item.title}
                    fontSize={12}
                    color={colors.white}
                    fontFamily={'Montserrat-regular'}
                  />
                </View>
              </View>
            )}
          />
        </GradientContainer>
      </Container>
      <Spacer height={20} />
      <View style={{width: '100%', paddingHorizontal: 60}}>
        <CustomText
          color={colors.darkGray}
          fontSize={11}
          textAlign={'center'}
          fontWeight={'400'}
          fontFamily={'Montserrat-regular'}
          alignSelf={'center'}
          label={
            'Lorem Ipsum is simply dummy text of text of the printing lorem ipsum is good suprem and typesetting industry.'
          }
        />
      </View>

      <Spacer height={25} />

      <CustomGradientButton
        x1={0.0}
        y1={0.25}
        x2={0.8}
        y2={0.0}
        title="Press and Hold to Reveal"
        width="90%"
        fontSize={14}
        height={verticalScale(35)}
        // justifyContent={'center'}
        borderRadius={moderateScale(10)}
        // alignSelf={'center'}
        fontFamily={'Montserrat-bold'}
        onPress={() => setActive(!active)}
      />
    </View>
  );
};

const Container = styled(View, {
  shadowColor: colors.black,
  width: '100%',
  padding: 15,
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.36,
  shadowRadius: 6.68,
  elevation: 11,
});

export default RecoveryScreenBody;
