import {Modal, Platform, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import commonStyles, {PH10, PH20, PH5} from '../../../utils/CommonStyles';
import {colors} from '../../../utils/Colors';
import CustomText from '../../../components/CustomText';
import {Roboto} from '../../../utils/Fonts';
import {Spacer} from '../../../components/Spacer';
import TopHeader from './Molecules/TopHeader';
import ProgressContainer from './Molecules/ProgressContainer';
import ImageContainer from './Molecules/ImageContainer';
import BottomContainer from './Molecules/BottomContainer';
import BottomTabs from '../../../components/BottomTabs';

const StoreScreen = ({navigation, route}) => {
  const [visible, setVisible] = useState(false);
  console.log('RotesData', route?.params?.userData);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 2000);
  }, [])
  
  return (
    <>
      <View style={{flex: 1}}>
        <Spacer height={Platform.OS === 'ios' ? 40 : 5} />
        {/* <PH20>
          <TopHeader storeName={route?.params?.userData?.businessName} storeImages={route?.params?.userData?.images} />
          <Spacer height={15} />
          <ProgressContainer storeImages={route?.params?.userData?.images} />
        </PH20> */}
        {/* <Spacer height={15} /> */}
        <ImageContainer
          storeImages={route?.params?.userData?.banners||[]}
          storeName={route?.params?.userData?.businessName}
        />
        <Spacer height={3} />
        <Modal
          animationType="slide"
          visible={visible}
          onRequestClose={() => setVisible(false)}
          transparent={true}>
         
            <BottomContainer setVisible={setVisible}/>
          
        </Modal>
      </View>
      <BottomTabs navigation={navigation} />
    </>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({});
