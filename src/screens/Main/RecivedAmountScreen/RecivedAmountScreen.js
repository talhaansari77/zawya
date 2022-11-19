import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AppHeader from '../../../components/AppHeader';
import styled from 'react-native-styled-components';
import {scale} from 'react-native-size-matters';
import {images} from '../../../assets/images';
import {colors} from '../../../utils/Colors';
import CustomGradientButton from '../../../components/CustomGradientButton';
import QRCode from 'react-native-qrcode-svg';
import { Spacer } from '../../../components/Spacer';

const RecivedAmountScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PH20>
        <AppHeader
          img={images.BackArrow}
          txt={'Receive Bitcoin'}
          fontSize={18}
          rightImg={images.SettingImage}
          onPress={()=>navigation.navigate("MainStack",{screen:"WalletScreen"})}

        />
        <Spacer height={10}/>

        <View style={styles.bitcoinImageView}>
          <Image source={images.BitCoinImage} style={styles.bitcoinImage} />
          <View style={styles.squareShapeView}>
            <QRCode
              logoSize={50}
              size={150}
              value="1JAGtoJz5QFzys4H1PgokinKg748codsi"
            />
          </View>
          <Text style={styles.squareShapeBottomText}>Your BTC Address</Text>
          <View style={styles.qrCodeUrlTextView}>
            <View style={styles.qrCodeTextWidth}>
              <Text numberOfLines={1} style={styles.qrCodeUrlText}>
                1JAGtoJz5QFzys4H1PgokinKg748codsi
              </Text>
            </View>
            <TouchableOpacity style={styles.copyUrlIconView}>
              <Image
                source={
                   images.CopyUrlIcon
                }
                style={styles.copyUrlIconStyle}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.qrCodeTextBottomText}>
            Tab Bitcoin Address To Copy
          </Text>
          {/* <Button
            shadowRadius={15}
            buttonStyle={styles.shareBtn}
            title={'Share'}
          /> */}
          <CustomGradientButton
            title={'Share'}
            {...styles.shareBtn}
            fontSize={13}
          />
        </View>
      </PH20>
    </SafeAreaView>
  );
};

export default RecivedAmountScreen;

const PH10 = styled(View, {
  paddingHorizontal: scale(10),
});
const PH20 = styled(View, {
  paddingHorizontal: scale(20),
});

const styles = StyleSheet.create({
  bitcoinImageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bitcoinImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  squareShapeView: {
    width: 180,
    height: 180,
    borderRadius: 15,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  squareShapeBottomText: {
    marginTop: 15,
    fontSize: 18,
    //...Fonts.style.semiBoldWhite
    color:colors.white,
    fontWeight:'bold'

  },
  copyUrlIconStyle: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  copyUrlIconView: {
    right: 10,
    position: 'absolute',
  },
  qrCodeUrlTextView: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkTwo,
    marginTop: 15,
  },
  qrCodeUrlText: {
    fontSize: 14,
    //...Fonts.style.mediumCloudyBlue
    color:colors.cloudyBlue,
    fontWeight:'400'

  },
  qrCodeTextWidth: {
    width: '80%',
    left: 20,
    position: 'absolute',
  },
  qrCodeTextBottomText: {
    fontSize: 12,
    //...Fonts.style.regularCloudyBlue,
    color:colors.cloudyBlue,

    marginTop: 15,
  },
  shareBtn: {
    height: 35,
    width: 100,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
