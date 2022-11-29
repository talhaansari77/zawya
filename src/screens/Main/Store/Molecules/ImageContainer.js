import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {images} from '../../../../assets/images';
import commonStyles from '../../../../utils/CommonStyles';

const ImageContainer = ({storeImages}) => {
  return (
    <>
      <View style={{width: '100%', height: '74%'}}>
        <Image source={{uri: storeImages?.image1}} style={commonStyles.img} />
      </View>
    </>
  );
};

export default ImageContainer;

const styles = StyleSheet.create({});
