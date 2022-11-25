import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import commonStyles, {PH10, PH5} from '../../../utils/CommonStyles';
import {colors} from '../../../utils/Colors';
import CustomText from '../../../components/CustomText';
import {Roboto} from '../../../utils/Fonts';
import {Spacer} from '../../../components/Spacer';
import TopHeader from './Molecules/TopHeader';
import ProgressContainer from './Molecules/ProgressContainer';
import ImageContainer from './Molecules/ImageContainer';
import BottomContainer from './Molecules/BottomContainer';

const StoreScreen = () => {
  return (
    <View style={commonStyles.IosPadding}>
      <PH5>
        <TopHeader />
        <Spacer height={15} />
        <ProgressContainer />
        <Spacer height={15} />
        <ImageContainer />
        <Spacer height={3} />

        <BottomContainer />
      </PH5>
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({});
