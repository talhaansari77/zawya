import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {images} from '../../../../assets/images';
import commonStyles, {PH20} from '../../../../utils/CommonStyles';
import CustomText from '../../../../components/CustomText';
import {scale} from 'react-native-size-matters';
import TopHeader from './TopHeader';
import {Spacer} from '../../../../components/Spacer';
import ProgressContainer from './ProgressContainer';

const ImageContainer = ({storeImages, storeName}) => {
  const imagesList = Object.values(storeImages);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const sliderRef = useRef(null);
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const viewItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const scrollTo = pointer => {
    if (currentIndex < imagesList.length - 1 && pointer === 'right') {
      console.log('right', currentIndex);
      sliderRef.current.scrollToIndex({index: currentIndex + 1});
    } else if (currentIndex > 0 && pointer === 'left') {
      console.log('left', currentIndex);
      sliderRef.current.scrollToIndex({index: currentIndex - 1});
    } else {
      console.log('The End', currentIndex);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      scrollTo('right')
    }, 3000); 
  }, [currentIndex])
  
  return (
    <>
      {/* <View style={{width: '100%', height: '74%'}}> */}

      <PH20>
        <TopHeader
          storeName={storeName}
          storeImages={storeImages}
          no={currentIndex + 1}
        />
        {/* <Spacer height={15} /> */}
        <ProgressContainer storeImages={storeImages} />
      </PH20>
      {/* <Spacer height={15} /> */}
      <FlatList
        data={imagesList}
        keyExtractor={item => String(item)}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        onViewableItemsChanged={viewItemsChanged}
        viewabilityConfig={viewConfig}
        ref={sliderRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        // snapToAlignment={"start"}
        // scrollEventThrottle={16}
        scrollEnabled={false}
        bounces={false}
        pagingEnabled
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              scrollTo('right');
            }}
            activeOpacity={1}
            style={{
              width: Dimensions.get('window').width / 1.1,
              // height: 610,
              // backgroundColor: 'red',
              alignSelf: 'center',
              marginHorizontal: scale(17),
            }}>
            {/* <Text>ads</Text> */}
            <Image
              source={{
                uri: item,
              }}
              style={commonStyles.img}
              resizeMode={'cover'}
            />
            <TouchableOpacity
              style={{
                height: "100%",
                // backgroundColor: 'red',
                width: "100%",
                position: 'absolute',
                top: 0,
                zIndex: 1,
                opacity:0.5
              }}
              onPress={() => {
                scrollTo('right');
              }}
            />
            <TouchableOpacity
              style={{
                height: "100%",
                // backgroundColor: 'white',
                width: "50%",
                position: 'absolute',
                top: 0,
                zIndex: 2,
                opacity:0.5
              }}
              onPress={() => {
                scrollTo('left');
              }}
            />
          </TouchableOpacity>
        )}
      />

      {/* </View> */}
    </>
  );
};

export default ImageContainer;

const styles = StyleSheet.create({});
