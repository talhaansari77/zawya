import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {Montserrat} from '../../../../utils/Fonts';
import {Spacer} from '../../../../components/Spacer';
import commonStyles from '../../../../utils/CommonStyles';
import {scale, verticalScale} from 'react-native-size-matters';
import {images} from '../../../../assets/images';

const CategoriesItem = ({onCategory,item}) => {
  console.log('ItemData', item);
  return (
    <TouchableOpacity
    onPress={onCategory}
     activeOpacity={0.6} >
      <View style={{marginHorizontal:scale(15)}}>
        <View style={styles.circleImage}>
          <Image style={commonStyles.img} source={{uri:item.image}} />
        </View>
        <CustomText
          label={item.txt}
          color={colors.black}
          fontSize={10}
          alignSelf="center"
          fontFamily={Montserrat.Regular}
          marginTop={5}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CategoriesItem;

const styles = StyleSheet.create({
  circleImage: {
    width: 60,
    height: 60,
    borderRadius: 99,
    borderWidth: 1.5,
    borderColor: colors.primary,
    overflow: 'hidden',
    marginTop: verticalScale(10),
    alignSelf: 'center',
  },
});
