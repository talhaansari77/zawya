import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomText from '../../../components/CustomText';
import {Spacer} from '../../../components/Spacer';
import DesignForm from './Molecules/DesignForm';
import {colors} from '../../../utils/Colors';
import DesignFormBottom from './Molecules/DesignFormBottom';
import {imageTemplate} from '../../../utils/Data';
import {
  getAuthId,
  getSpecificeUser,
  getUser,
} from '../../../../services/FirebaseAuth';
import {saveUser} from '../../../../services/FirebaseAuth';
import {uploadImage} from '../../../../services/FirebaseAuth';
import Loader from '../../../utils/Loader';
import {useIsFocused} from '@react-navigation/native';

const AddDesignScreen = ({navigation, route}) => {
  const [images, setImages] = useState(imageTemplate);
  // const [banners, setBanners] = useState(route?.params?.banners)
  const [banners, setBanners] = useState([]);
  const [authId, setauthId] = useState('');
  const [loading, setLoading] = useState(false);
  const [authData, setAuthData] = useState([]);
  const [counter, setCounter] = useState(0);
  const isFocused = useIsFocused();

  const [designState, setDesignState] = useState({
    businessName: '',
    headline: '',
    action: '',
    template: 0,
    category: '',
  });

  useEffect(() => {
    getUserId();
  }, []);

  useEffect(() => {
    onAuthData();
  }, []);

  const getUserId = async () => {
    getAuthId().then(id => {
      setauthId(id);
    });
  };
  const onAuthData = async () => {
    await getAuthId().then(id => {
      getSpecificeUser(id).then(data => {
        setBanners(data?.banners || []);
        console.log('✋==>', data?.banners || []);
        console.log('==>', banners || []);
      });
    });
  };

  const onHandleSave = async () => {
    let temp2 = {};

    const data = {
      id: authId,
      businessName: designState.businessName,
      headline: designState.headline,
      action: designState.action,
      category: designState.category,
      template: designState.template,
      banners: banners,
    };

    console.log('Data', data);
    setLoading(true);

    try {
      if (authId) {
        if (banners.length < 9) {
          temp2 = {
            image1: await uploadImage(images.image1, authId),
            image2: await uploadImage(images.image2, authId),
          };
        } else {
          alert('You have Reached The Limit');
          return false;
        }
        console.log('here <<====');
        console.log('newBannersList', banners);
        if (banners.length < 9) banners.push(temp2.image1);

        await saveUser(authId, {
          ...data,
          banners: banners,
          storePic: temp2.image2,
        });
        console.log('DataSave');

        setTimeout(() => {
          setLoading(false);
        }, 2000);

        console.log('dataSave');
        navigation.navigate('CategoriesScreen');
        // navigation.reset({
        //   index: 0,
        //   routes: [{name: 'MainStack'}],
        // });
      }
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <>
      <View style={{backgroundColor: colors.white, flex: 1}}>
        <SafeAreaView>
          <Spacer height={5} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <CustomText
              label={'Design Your Ads'}
              fontSize={15}
              alignSelf={'center'}
            />
            <Spacer height={10} />
            <DesignForm
              designState={designState}
              setDesignState={setDesignState}
              images={images}
              setImages={setImages}
              onAuthData={onAuthData}
              // banners={banners}
              // setBanners={setBanners}
            />
            <DesignFormBottom
              designState={designState}
              setDesignState={setDesignState}
              images={images}
              setImages={setImages}
              onHandleSave={onHandleSave}
            />
            <Spacer height={20} />
          </ScrollView>
        </SafeAreaView>
      </View>
      <Loader loading={loading} />
    </>
  );
};

export default AddDesignScreen;
