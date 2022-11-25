import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import TopHeader from './Molecules/TopHeader';
import commonStyles, {PH5} from '../../../utils/CommonStyles';
import CategoriesItem from './Molecules/CategoriesItem';
import {images} from '../../../assets/images';
import {colors} from '../../../utils/Colors';
import {Montserrat} from '../../../utils/Fonts';
import CustomText from '../../../components/CustomText';
import {Spacer} from '../../../components/Spacer';
import StoreItem from './Molecules/StoreItem';
import { useNavigation } from '@react-navigation/core';

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
const CategoriesScreen = () => {
  const navigation = useNavigation();
  const renderCategory = ({item, index}) => {
    return <CategoriesItem item={item} />;
  };

  const renderStore = ({item, index}) => {
    return (
      <View style={{flex: 1}}>
        <StoreItem item={item} onPress={()=>navigation.navigate("Store")}/>
      </View>
    );
  };
  return (
    <View style={commonStyles.IosPadding}>
      <PH5>
        <TopHeader />
        <Spacer height={10} />

        <CustomText
          label="Select Category"
          color={colors.primary}
          fontSize={21}
          fontFamily={Montserrat.SemiBold}
        />
        <View style={{height: '15%'}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={CategoryData}
            renderItem={renderCategory}
            keyExtractor={item => item.id}
          />
        </View>

        {/* <View style={{height:"20%",backgroundColor:"red"}}> */}

        {/* <FlatList
          data={storeData}
          renderItem={renderStore}
          keyExtractor={item => item.id}
        /> */}
        {/* </View> */}
        <View>
          <FlatList
            numColumns={2}
            data={storeData}
            renderItem={renderStore}
            keyExtractor={item => item.id}
          />
        </View>

        {/* <StoreItem /> */}
      </PH5>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
