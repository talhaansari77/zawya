import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {PortfolioCoinData} from '../../../../utils/Data';
import CustomText from '../../../../components/CustomText';
import {Roboto} from '../../../../utils/Fonts';
import {colors} from '../../../../utils/Colors';
import {moderateScale} from 'react-native-size-matters';

const PortfolioCoinPersent = () => {
  return (
    <>
      <FlatList
        data={PortfolioCoinData}
        renderItem={({item, index}) => (
          <>
            <View style={styles.flatListInnerView}>
              <Image source={item.image} style={{width: 15, height: 15}} />

              <View style={styles.itemDetailsView}>
                <CustomText
                  label={item.name}
                  fontSize={13}
                  fontWeight={'400'}
                  fontFamily={Roboto.SemiBold}
                  color={colors.darkGrey}
                  marginLeft={10}
                />

                <CustomText
                  label={item.percentage}
                  fontSize={13}
                  fontWeight={'500'}
                  fontFamily={Roboto.SemiBold}
                  color={colors.white}
                  alignSelf={'flex-end'}
                />
              </View>
            </View>
          </>
        )}
      />
    </>
  );
};

export default PortfolioCoinPersent;

const styles = StyleSheet.create({
  flatListInnerView: {
    flexDirection: 'row',
    padding: 6,
    paddingLeft: 20,
  },
  itemDetailsView: {
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  flatListInnerShortTitle: {
    paddingLeft: 10,
    marginBottom: 10,
  },
});
