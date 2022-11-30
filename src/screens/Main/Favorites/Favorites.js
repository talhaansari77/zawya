import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../../utils/Colors';
import {Montserrat} from '../../../utils/Fonts';
import {Spacer} from '../../../components/Spacer';
import CustomText from '../../../components/CustomText';
import {getAuthId, getUser} from '../../../../services/FirebaseAuth';
import StoreItem from '../Categories/Molecules/StoreItem';
import Loader from '../../../utils/Loader';
import {useSelector} from 'react-redux';

const Favorites = ({navigation}) => {
  const favoriteList = useSelector(
    state => state.myFavoriteReducer.favoriteList,
  );
  const [authData, setAuthData] = useState(favoriteList);
  const [filerData, SetFilerData] = useState(favoriteList);
  const [loading, setLoading] = useState(false);

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
          label="Empty"
          color={colors.primary}
          fontSize={21}
          fontFamily={Montserrat.SemiBold}
        />
      </View>
    );
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
  //   useEffect(() => {
  //     onAuthData();
  //   }, []);
  useEffect(() => {
    SetFilerData(favoriteList);
  }, [favoriteList]);

  return (
    <View style={{flex: 1}}>
      <Spacer height={Platform.OS == 'ios' ? 40 : 5} />

      <CustomText
        label="Favorites"
        color={colors.primary}
        fontSize={21}
        fontFamily={Montserrat.SemiBold}
        alignSelf={'center'}
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
      <Loader loading={loading} />
    </View>
  );
};

export default Favorites;
