import {StyleSheet, Text, View, Image,Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../../../assets/images';
import commonStyles from '../../../../utils/CommonStyles';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {Montserrat, Roboto} from '../../../../utils/Fonts';
import {moderateScale, verticalScale} from 'react-native-size-matters';

import AntDesign from 'react-native-vector-icons/AntDesign';

const Width = Dimensions.get('window').width;
const StoreItem = ({item,onPress}) => {

  console.log("ItemStoreData",item)

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.mainContainer}>
      <Image source={item.image}
      resizeMode="contain"
       style={{width: '100%', height: '100%',}} />

      {/* <View style={styles.cover}></View> */}

      {/* <View
        style={styles.storeContainer}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <CustomText
            label={item.name}
            color={colors.white}
            fontSize={15}
            fontWeight="400"
            fontFamily={Roboto.Regular300}
          />
          <View style={{marginRight: verticalScale(15)}}>
            <AntDesign
              name="hearto"
              size={moderateScale(20)}
              color={colors.primary}
            />
          </View>
        </View>
      </View>  */}
    </TouchableOpacity>
  );
};

export default StoreItem;

const styles = StyleSheet.create({
  mainContainer: {
    width: Width/2.2,
    height: verticalScale(150),
    flexDirection: 'row',
  },
  cover: {
    position: 'absolute',
    width: Width/2.2,
    height: verticalScale(150),
    bottom: 0,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: 'black',
    opacity: 0.3,
    marginLeft: verticalScale(6),
    borderRadius: 10,
  },
  storeContainer:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: verticalScale(5),
    paddingHorizontal: verticalScale(5),
    flexDirection: 'row',
    marginLeft: verticalScale(6),
    zIndex: 1,
    alignItems: 'flex-end',
  }
});
