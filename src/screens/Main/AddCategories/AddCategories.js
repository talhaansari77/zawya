import {View, Text, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PH20} from '../../../utils/CommonStyles';
import CustomText from '../../../components/CustomText';
import {colors} from '../../../utils/Colors';
import {Montserrat} from '../../../utils/Fonts';
import {Spacer} from '../../../components/Spacer';
import {SearchBar} from 'react-native-screens';
import {scale, verticalScale} from 'react-native-size-matters';
import CustomButton from '../../../components/CustomButton';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {images} from '../../../assets/images';
import {ScrollView} from 'react-native-gesture-handler';
import {getCategories, saveCategories} from '../../../../services/FirebaseAuth';
import Loader from '../../../utils/Loader';

const AddCategories = () => {
  const [search, setSearch] = useState('');
  const [newCat, setNewCat] = useState('');
  const [CategoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const [AuthData, setAuthData] = useState(AuthData);

  const getAuthData = async () => {
    const responseData = await AsyncStorage.getItem('userEmail');
    setAuthData(responseData);
  };
  const onAdd = async txt => {
    const res = CategoryData.find(cat => cat.txt === txt);
    if (res) {
      alert('Category Already Exist');
      setNewCat('')
    } else {
      let newCat ={id:Math.random(), image: images.category1, txt: txt}
      CategoryData.push(newCat);
      saveCategories({CategoryData: CategoryData});
      setCounter(counter+1);
      setNewCat('')
    }
  };
  const onDelete = async id => {
    const newList = CategoryData.filter(cat => cat.id !== id);
    // setCategoryData(newList);
    // console.log(CategoryData)
    return newList;
  };

  useEffect(() => {
    setLoading(true);

    const res = getCategories();
    res
      .then(data => {
        setCategoryData(data.CategoryData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [counter]);

  // [
  //   {id: 1, image: images.category1, txt: 'Restaurant'},
  //   {id: 2, image: images.category2, txt: 'Food'},
  //   {id: 3, image: images.category3, txt: 'Coffee'},
  //   {id: 4, image: images.category4, txt: 'Perfume'},
  // ]

  const CatItem = ({name, id}) => (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: colors.grey,
        paddingHorizontal: scale(15),
        marginHorizontal: scale(15),
      }}>
      <View style={{flex: 8}}>
        <View
          style={{
            paddingHorizontal: scale(15),
            paddingVertical: verticalScale(12),
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: verticalScale(16),
              fontFamily: Montserrat.SemiBold,
              color: colors.black,
            }}>
            {name}
          </Text>
        </View>
      </View>
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <CustomButton
          height={40}
          width={100}
          title={'Delete'}
          backgroundColor={colors.red}
          fontSize={12}
          onPress={() =>
            onDelete(id).then(data => {
              console.log(data);
              saveCategories({CategoryData: data});
              setCategoryData(data);
              setCounter(counter + 1);
            })
          }
        />
      </View>
    </View>
  );
  return (
    <View style={{flex: 1}}>
      <Spacer height={Platform.OS == 'ios' ? 40 : 5} />
      <PH20>
        <CustomText
          label="Add Category"
          color={colors.primary}
          fontSize={20}
          alignSelf={'center'}
          fontFamily={Montserrat.SemiBold}
        />
      </PH20>
      <Spacer height={10} />

      <View
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 50,
          borderColor: colors.grey,
          paddingHorizontal: scale(15),
          marginHorizontal: scale(15),
        }}>
        <View style={{flex: 8}}>
          <TextInput
            placeholder="Add Categories..."
            value={newCat}
            onChangeText={text => {
              setNewCat(text);
            }}
            style={{
              fontSize: verticalScale(16),
              paddingHorizontal: scale(15),
              paddingVertical: verticalScale(12),
              fontFamily: Montserrat.SemiBold,
            }}
          />
        </View>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <CustomButton
            height={40}
            title={'Add'}
            fontSize={12}
            onPress={() => onAdd(newCat)}
          />
        </View>
      </View>

      <Spacer height={20} />
      <Divider
        width={1}
        color={colors.grey}
        style={{
          marginHorizontal: scale(30),
        }}
      />
      <Spacer height={20} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {CategoryData.map(item => (
          <View key={item.id}>
            <CatItem name={item.txt} id={item.id} />
            <Spacer height={10} />
          </View>
        ))}
      </ScrollView>
      <Loader loading={loading} />
    </View>
  );
};

export default AddCategories;
