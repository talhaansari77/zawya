import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../utils/Colors';
import CustomText from './CustomText';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

export default function BottomTabs({navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        // margin: 10,
        // marginHorizontal: 30,
        justifyContent: 'space-between',
        backgroundColor: colors.primary,
        width: '100%',
        paddingVertical: verticalScale(15),
        paddingHorizontal: scale(50),
        zIndex: 10,
      }}>
      <Icon
        name="home"
        color={colors.white}
        size={25}
        screen={'CategoriesScreen'}
        navigation={navigation}
      />
      <Icon
        name="plus"
        color={colors.white}
        size={25}
        screen={'AddDesignScreen'}
        navigation={navigation}
      />
      <Icon
        name="user-alt"
        color={colors.white}
        size={25}
        screen={'SignOutScreen'}
        navigation={navigation}
      />
      {/* <Icon name="receipt" color={'#000'} size={25} text={'Order'} />
      <Icon name="user" color={'#000'} size={25} text={'Account'} /> */}
    </View>
  );
}

const Icon = ({navigation, ...props}) => (
  <TouchableOpacity onPress={() => navigation.navigate(props.screen)}>
    <FontAwesome5
      style={{marginBottom: 3, alignSelf: 'center'}}
      name={props.name}
      size={props.size}
      color={props.color}
    />
  </TouchableOpacity>
);
