import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Spacer} from '../../../../components/Spacer';
import CustomText from '../../../../components/CustomText';
import {Roboto} from '../../../../utils/Fonts';
import {colors} from '../../../../utils/Colors';
import {icons} from '../../../../assets/icons';
import {combineReducers} from 'redux';
import commonStyles from '../../../../utils/CommonStyles';

import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/core';

const TopHeader = ({storeName,storeImages,no}) => {
  // const imagesList = Object.values(storeImages);
  const navigation = useNavigation();
  return (
    <View>
      <Spacer height={10} />

      <CustomText
        label={storeName}
        color={colors.black}
        fontSize={18}
        alignSelf={'center'}
        fontFamily={Roboto.SemiBold}
      />
      <Spacer height={10} />

      <View style={styles.mainProgress}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CustomText
            label={no}
            color={colors.black}
            fontSize={15}
            alignSelf={'center'}
            fontFamily={Roboto.SemiBold}
          />
          <CustomText
            label="of"
            color={colors.black}
            fontSize={15}
            alignSelf={'center'}
            fontFamily={Roboto.SemiBold}
          />
          <CustomText
            label={storeImages.length}
            color={colors.black}
            fontSize={15}
            alignSelf={'center'}
            fontFamily={Roboto.SemiBold}
            marginLeft={2}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            resizeMode="contain"
            style={commonStyles.iconContainer}
            source={icons.cancel}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  mainProgress: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
