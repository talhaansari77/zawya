import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomText from '../../../components/CustomText';
import {Spacer} from '../../../components/Spacer';
import DesignForm from './Molecules/DesignForm';
import {colors} from '../../../utils/Colors';
import DesignFormBottom from './Molecules/DesignFormBottom';
import {imageTemplate} from '../../../utils/Data';
import {getAuthId} from '../../../../services/FirebaseAuth';
import {saveUser} from '../../../../services/FirebaseAuth';
import {uploadImage} from '../../../../services/FirebaseAuth';
import Loader from '../../../utils/Loader';

const AddDesignScreen = ({navigation}) => {
  const [images, setImages] = useState(imageTemplate);

  const [authId, setauthId] = useState('');
  const [loading, setLoading] = useState(false);

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

  const getUserId = async () => {
    getAuthId().then(id => {
      setauthId(id);
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
    };

    console.log('djcdbj', data);
    setLoading(true);

    try {
      if (authId) {
          temp2 = {
            image1: await uploadImage(images.image1, authId),
            image2: await uploadImage(images.image2, authId),


          
          };
        
         
        await saveUser(authId, {...data, images: temp2});
        console.log('DataSave');

        setTimeout(() => {
          setLoading(false);
        }, 2000);

        console.log('dataSave');
        navigation.navigate('CategoriesScreen')
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
