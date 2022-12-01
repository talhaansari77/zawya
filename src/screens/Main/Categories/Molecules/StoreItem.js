import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React,{useState} from 'react';
import {images} from '../../../../assets/images';
import commonStyles from '../../../../utils/CommonStyles';
import CustomText from '../../../../components/CustomText';
import {colors} from '../../../../utils/Colors';
import {Montserrat, Roboto} from '../../../../utils/Fonts';
import {moderateScale, verticalScale} from 'react-native-size-matters';

import AntDesign from 'react-native-vector-icons/AntDesign';

const Width = Dimensions.get('window').width;
const StoreItem = ({item, onPress}) => {
  const [heart, setHeart] = useState(false)
  console.log('ItemStoreData', item);

  return item.status==true?

    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.mainContainer}>
      <Image
        source={{uri:item.images.image1}}
        // resizeMode="contain"
        style={{width: '100%', height: '100%'}}
      />

      <View style={styles.cover}></View>

      <View style={styles.storeContainer}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <View style={{width:"80%"}}>
            <CustomText
            label={item.businessName}
            color={colors.white}
            numberOfLines={1}
            
            fontSize={15}
            fontWeight="400"
            fontFamily={Roboto.Regular300}
          />

            </View>
       
          <TouchableOpacity 
          activeOpacity={0.6}
          onPress={()=>{
            setHeart(!heart)

          }}
          style={{marginRight: verticalScale(10)}}
          >
            <AntDesign
              name={heart?"heart":"hearto"}
              size={moderateScale(20)}
              color={heart? colors.primary: colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
    :<></>

};

export default StoreItem;

const styles = StyleSheet.create({
  mainContainer: {
    width: Width / 2.4,
    height: verticalScale(190),
    flexDirection: 'row',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: verticalScale(20),
    marginRight:20,
    // paddingRight:
  },
  cover: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    // bottom: 0,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: 'black',
    opacity: 0.3,
    // marginLeft: verticalScale(6),
  },
  storeContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: verticalScale(10),
    paddingHorizontal: verticalScale(5),
    flexDirection: 'row',
    marginLeft: verticalScale(6),
    zIndex: 1,
    alignItems: 'flex-end',
  },
});
