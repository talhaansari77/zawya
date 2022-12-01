import React, {useState, useEffect} from 'react';

import {SafeAreaView, Text, StyleSheet, View, FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {getAuthId, getUser} from '../../../../services/FirebaseAuth';
import CustomText from '../../../components/CustomText';
import {Spacer} from '../../../components/Spacer';
import {colors} from '../../../utils/Colors';
import {Montserrat} from '../../../utils/Fonts';
import Loader from '../../../utils/Loader';
import StoreItem from '../Categories/Molecules/StoreItem';

const App = ({navigation, route}) => {
  const [search, setSearch] = useState('');
  const [authData, setAuthData] = useState(route?.params?.authData);
  const [filerData, SetFilerData] = useState(route?.params?.authData);
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
          label="Nothing"
          color={colors.primary}
          fontSize={21}
          fontFamily={Montserrat.SemiBold}
        />
      </View>
    );
  };
  // const onAuthData = async () => {
  //   setLoading(true);
  //   try {
  //     await getAuthId().then(id => {
  //       getUser(setAuthData, id);
  //       getUser(SetFilerData, id);
  //     });

  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //   } catch (error) {
  //     setLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   onAuthData();
  // }, []);

  const onFilterData = text => {
    if (text) {
      const responseData = authData.filter(data => {
        return data.businessName.toUpperCase().includes(text.toUpperCase());
      });
      SetFilerData(responseData);
      setSearch(text);
    } else {
      SetFilerData(authData);
      setSearch(text);
    }

    // setAuthData(responseData);
    // SetFilerData(responseData);
  };

  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
        <View style={styles.container}>
          <SearchBar
            round
            searchIcon={{size: 30}}
            onChangeText={text => onFilterData(text)}
            onClear={text => onFilterData('')}
            placeholder="Search Here..."
            value={search}
            inputStyle={{backgroundColor: colors.grey}}
            containerStyle={{
              backgroundColor: colors.white,
              // height:100,
              // borderWidth: 1,
              borderRadius: 5,
            }}
            inputContainerStyle={{backgroundColor: colors.grey}}
            placeholderTextColor={'#g5g5g5'}
            lightTheme
            cancelIcon
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
        </View>
      </SafeAreaView>
      <Loader loading={loading} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
});

export default App;
