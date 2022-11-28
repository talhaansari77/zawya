import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import TopHeader from './Molecules/TopHeader';
import commonStyles, {PH20, PH5} from '../../../utils/CommonStyles';
import CategoriesItem from './Molecules/CategoriesItem';
import {images} from '../../../assets/images';
import {colors} from '../../../utils/Colors';
import {Montserrat} from '../../../utils/Fonts';
import CustomText from '../../../components/CustomText';
import {Spacer} from '../../../components/Spacer';
import StoreItem from './Molecules/StoreItem';
import {useNavigation} from '@react-navigation/core';
import {verticalScale} from 'react-native-size-matters';
import BottomTabs from '../../../components/BottomTabs';
import {ScrollView} from 'react-native-gesture-handler';

const CategoryData = [
  {id: 1, image: images.category1, txt: 'Category'},
  {id: 2, image: images.category2, txt: 'Category'},
  {id: 3, image: images.category3, txt: 'Category'},
  {id: 4, image: images.category4, txt: 'Category'},
  {id: 5, image: images.category5, txt: 'Category'},
];
const storeData = [
  {id: 1, image: images.item1, name: 'Store Name'},
  {id: 2, image: images.item2, name: 'Store Name'},
  {id: 3, image: images.item3, name: 'Store Name'},
  {id: 4, image: images.item4, name: 'Store Name'},
  {id: 5, image: images.item5, name: 'Store Name'},
  {id: 6, image: images.item6, name: 'Store Name'},
];
const CategoriesScreen = ({navigation}) => {
  const renderCategory = ({item, index}) => {
    return <CategoriesItem item={item} />;
  };
  const renderStore = ({item, index}) => {
    return (
      <StoreItem
        item={item}
        onPress={() => navigation.navigate('StoreScreen')}
      />
    );
  };
  return (
    <>
      <View style={{flex: 1}}>
        <PH20>
          <Spacer height={40} />
          <TopHeader />
          <Spacer height={10} />
        </PH20>
          <ScrollView showsHorizontalScrollIndicator={false}>
        <PH20>
          <CustomText
            label="Select Category"
            color={colors.primary}
            fontSize={21}
            fontFamily={Montserrat.SemiBold}
          />
        </PH20>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={CategoryData}
            renderItem={renderCategory}
            keyExtractor={item => item.id}
          />
          <Spacer height={20} />
          <FlatList
            numColumns={2}
            columnWrapperStyle={{
              flex: 1,
              justifyContent: 'space-evenly',
            }}
            data={storeData}
            renderItem={renderStore}
            keyExtractor={item => item.id}
          />
        </ScrollView>
        <BottomTabs navigation={navigation} />
      </View>
    </>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
