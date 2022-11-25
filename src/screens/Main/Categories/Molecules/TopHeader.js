import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../../utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import commonStyles from '../../../../utils/CommonStyles';
import {images} from '../../../../assets/images';
import { useNavigation } from '@react-navigation/core';

const TopHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate("AddDesign")} style={styles.circleImage}>
        <Image style={commonStyles.img} source={images.profileImg} />
      </TouchableOpacity>
      
      <TouchableOpacity activeOpacity={0.7} onPress={()=>{}} >
      <AntDesign name="heart" color={colors.primary} size={moderateScale(40)} />
      </TouchableOpacity>

    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circleImage: {
    width: 60,
    height: 60,
    borderRadius: 99,
    borderWidth: 1.5,
    borderColor: colors.primary,
    overflow: 'hidden',
    marginTop: verticalScale(10),
  },
});
