import {StyleSheet, Text, View, FlatList, Platform} from 'react-native';
import React, {useState, useEffect} from 'react';
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
import {getAuthId, getUser} from '../../../../services/FirebaseAuth';
import {getSpecificeUser} from '../../../../services/FirebaseAuth';
import Loader from '../../../utils/Loader';
const CategoryData = [
  {id: 1, image: images.category1, txt: 'Restaurant'},
  {id: 2, image: images.category2, txt: 'Food'},
  {id: 3, image: images.category3, txt: 'Coffee'},
  {id: 4, image: images.category4, txt: 'Perfume'},
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
  const [authData, setAuthData] = useState([]);
  const [filerData, SetFilerData] = useState([]);
  const [loading, setLoading] = useState(false);

  

  useEffect(() => {
    onAuthData();
  }, []);

  console.log('AuthDataIs', authData);

  const onFilterData = item => {
    const responseData = authData.filter(data => {
      return data.category == item.txt;
    });

    // setAuthData(responseData);
    SetFilerData(responseData);
  };

  const onAuthData = async () => {
    setLoading(true);
    try {
      await getAuthId().then(id => {
        getUser(setAuthData, id);
        getUser(SetFilerData, id);
      });

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } catch (error) {
      setLoading(false);
    }
  };

  const renderCategory = ({item, index}) => {
    return (
      <CategoriesItem
        onCategory={() => {
          onFilterData(item);

          console.log('ItemData', index);
        }}
        item={item}
      />
    );
  };
  const renderStore = ({item, index}) => {
    return (
      <StoreItem
        item={item}
        onPress={() => navigation.navigate('StoreScreen', {userData: item})}
      />
    );
  };

  const showEmptyData = () => {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <View style={{height: '10%'}}></View>
        <CustomText
          label="Nothing"
          color={colors.primary}
          fontSize={21}
          fontFamily={Montserrat.SemiBold}
        />
      </View>
    );
  };
  return (
    <>
      <View style={{flex: 1}}>
        <PH20>
          <Spacer height={Platform.OS == 'ios' ? 40 : 5} />
          <TopHeader authData={authData} />
          <Spacer height={10} />
        </PH20>
        <ScrollView showsVerticalScrollIndicator={false}>
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
              marginHorizontal: 20,

              // justifyContent: 'space-evenly',
            }}
            data={filerData}
            renderItem={renderStore}
            keyExtractor={item => item.id}
            ListEmptyComponent={showEmptyData}
          />
        </ScrollView>
        <BottomTabs navigation={navigation} />
      </View>

      <Loader loading={loading} />
    </>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
