import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomText from '../../../components/CustomText';
import {moderateScale, scale} from 'react-native-size-matters';
import styled from 'react-native-styled-components';
import {images} from '../../../assets/images';
import {colors} from '../../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomGradientButton from '../../../components/CustomGradientButton';
import {Spacer} from '../../../components/Spacer';
import AppHeader from '../../../components/AppHeader';
import {XAxis, AreaChart, Grid, Path} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {
  Defs,
  LinearGradient as LinearGradientSvg,
  Stop,
  Circle,
  G,
  Line as LineHorizantol,
} from 'react-native-svg';

const WalletScreen = ({navigation, route}) => {
  const percent =
    route?.params?.coin?.price_change_percentage_24h?.toFixed(2);

  const Data = [
    {
      date: '26 march,2020',
      action: 'Recived',
      image: images.LeftArrow,
      blueImage: images.RecivedBlueIcon,
      time: '11:50 AM',
      point: '+0.054',
      doller: '$3.39',
    },
    {
      date: '26 march,2020',
      action: 'send',
      image: images.RightArrow,
      blueImage: images.SendBlueIcon,
      time: '11:50 AM',
      point: '+0.054',
      doller: '$3.39',
    },
  ];
  const BitCoinGraphData = [
    55, 50, 60, 70, 90, 80, 65, 25, 30, 5, 40, 30, 47, 70, 55, 99, 55, 65, 40,
    45, 45,
  ];
  const xdata = ['24H', '7D', '1M', '3M', '6M', '1Y'];

  const Line = ({line}) => (
    <Path
      key={'line'}
      stroke={colors.orange}
      d={line}
      strokeWidth={2}
      fill={'none'}
      clipPath={'url(#clip-path)'}
    />
  );
  const Gradient = ({index}) => (
    <Defs key={index}>
      <LinearGradientSvg
        id={'gradient'}
        x1={'10%'}
        y1={'10%'}
        x2={'10%'}
        y2={'80%'}>
        <Stop offset={'0%'} stopColor={'rgb(95, 94, 108)'} stopOpacity={1} />
        <Stop offset={'100%'} stopColor={'rgb(71, 80, 109)'} stopOpacity={1} />
      </LinearGradientSvg>
    </Defs>
  );

  const Tooltip = ({x, y}) => (
    <G x={x(5) - 75 / 2} key={'tooltip'}>
      <G x={75 / 2}>
        <LineHorizantol
          y1={50 + 40}
          y2={y(BitCoinGraphData[5])}
          stroke={'white'}
          strokeWidth={1}
        />
        <Circle
          cy={y(BitCoinGraphData[5])}
          r={6}
          stroke={colors.white}
          strokeWidth={2}
        />
      </G>
    </G>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <PH20>
        <AppHeader
          img={images.wallet}
          txt={route?.params?.coin?.name}
          fontSize={18}
          rightImg={images.SettingImage}
          rightOnPress={() => navigation.navigate('SettingScreen')}
        />
      </PH20>
      <PH20>
        <View style={[styles.shadowContainer, styles.marginTop]}>
          <LinearGradient
            colors={[colors.darkGreyBlueThired, colors.duskSecond]}
            style={styles.flatList}>
            <View style={styles.bitcoinView}>
              <View style={styles.bitcoinLeftView}>
                <Image
                  source={{uri: route?.params?.coin?.image}}
                  style={styles.bitcoinImage}
                />
                <Text style={styles.leftDollerPrice}>
                  ${route?.params?.coin?.current_price}
                </Text>

                <Text style={styles.leftBTCPrice}>
                  BTC price{' '}
                  <Text
                    style={{
                      ...styles.leftBTCPercentage,
                      color: percent.includes('-')
                        ? colors.red
                        : colors.frogGreen,
                    }}>
                    {!percent.includes('-') ? '+' : ''}
                    {percent}
                  </Text>
                </Text>
              </View>
              <View style={styles.bitcoinRightView}>
                <Text style={styles.rightSideText}>20</Text>
                <Text style={styles.rightSideBalanceText}>Balance</Text>
                <View style={styles.separatorLineRight}></View>
                <Text style={styles.rightDollerPrice}>${route?.params?.coin?.current_price}</Text>
                <Text style={styles.rightSideValueText}>Value</Text>
              </View>
            </View>
            <View style={styles.separatorLine}></View>
            <View style={styles.linemarginTop}>
              <View style={styles.xAxisTop}>
                <Text style={styles.xAxisAmt}>$5,341.68</Text>
                <View style={styles.xAxisTopHr} />
              </View>
              <AreaChart
                style={styles.areaChart}
                data={BitCoinGraphData}
                numberOfTicks={0}
                curve={shape.curveNatural}
                svg={{fill: 'url(#gradient)'}}>
                <Grid />
                <Line />
                <Tooltip />
                <Gradient />
              </AreaChart>
              <View style={styles.xAxisBottom}>
                <Text style={styles.xAxisAmt}>$4,341.68</Text>
                <View style={styles.xAxisBottomHr} />
              </View>
              {/* //! Bug To Fix Here >>>> */}
              {/* <XAxis
                data={xdata}
                formatLabel={value => xdata[value]}
                contentInset={{left: 20, right: 10}}
                svg={{
                  ...styles.xAxisSvg,
                  fill: 'white',
                }}
              /> */}
              {/* //! <<<< Bug To Fix Here */}
            </View>
          </LinearGradient>
        </View>

        <View>
          <View style={styles.activityView}>
            <Text style={styles.activityText}>ACTIVITY</Text>
            <View style={styles.separatorWhiteLine}></View>
          </View>

          <FlatList
            data={Data}
            contentContainerStyle={styles.paddingBottomSecond}
            renderItem={({item, index}) => (
              <View style={[styles.shadowContainer, styles.securityMarginTop]}>
                <Text style={styles.flatListInnerDate}>{item.date}</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('TransactionDetails');
                  }}
                  activeOpacity={0.9}>
                  <LinearGradient
                    start={{x: 0.0, y: 0.25}}
                    end={{x: 0.8, y: 0.0}}
                    colors={[
                      colors.darkGreyBlueThired,
                      colors.darkGreyBlueThired,
                      colors.duskSecond,
                    ]}
                    style={styles.securityFlatListView}>
                    <View style={styles.flatListInnerView}>
                      <Image
                        source={item.image}
                        style={styles.flatListInnerImage}
                      />
                      <View style={styles.itemDetailsView}>
                        <View style={styles.flatListInnerText}>
                          <Text style={styles.flatListInnerActionTitle}>
                            {item.action}
                          </Text>
                          <Text style={styles.flatListInnerRightTitle}>
                            {item.point}
                          </Text>
                        </View>
                        <View style={styles.flatListInnerText}>
                          <Text style={styles.flatListInnerFullTextTitle}>
                            {item.time}
                          </Text>
                          <Text style={styles.flatListInnerRightDollerTitle}>
                            {item.doller}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </PH20>
      <View style={styles.footer}>
        <View style={styles.bottomButtonView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SendAmountScreen')}
            style={styles.bottomButtonInnerView}>
            <LinearGradient
              start={{x: 0.3, y: 1.3}}
              end={{x: 0.8, y: 0.0}}
              colors={[colors.niceBlue, colors.blueWithPurple]}
              locations={[0.1, 0.7, 1]}
              style={styles.buttonStyle}>
              <View style={styles.circleShapeView}>
                <Image
                  source={images.SendRight}
                  style={styles.circleInnerImage}
                />
              </View>
              <Text style={styles.sendText}>SEND</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.middleLine} />
          <TouchableOpacity
            onPress={() => navigation.navigate('RecivedAmountScreen')}
            style={styles.bottomButtonInnerView}>
            <LinearGradient
              start={{x: 0.3, y: 1.3}}
              end={{x: 0.5, y: 0.25}}
              locations={[0.3, 0.7, 1]}
              colors={[colors.blueWithPurple, colors.niceBlue]}
              style={styles.buttonStyle}>
              <View style={styles.circleShapeView}>
                <Image source={images.RecieveLeft} style={styles.qrCodeImage} />
              </View>
              <Text style={styles.sendText}>RECEIVE</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WalletScreen;

const PH10 = styled(View, {
  paddingHorizontal: scale(10),
});
const PH20 = styled(View, {
  paddingHorizontal: scale(20),
});

const styles = StyleSheet.create({
  shadowContainer: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  marginTop: {},
  flatList: {
    padding: 20,
    width: '100%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.blueBorder,
  },
  bitcoinImage: {
    height: 50,
    width: 60,
    left: 10,
    resizeMode: 'contain',
  },
  bitcoinView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  bitcoinLeftView: {
    width: '40%',
  },
  bitcoinRightView: {
    left: 20,
    width: '40%',
  },
  leftDollerPrice: {
    fontSize: 18,
    //...Fonts.style.boldFontWhite,
    color: colors.white,
    fontWeight: 'bold',
    top: 5,
  },
  leftBTCPrice: {
    fontSize: 12,
    //...Fonts.style.mediumBluegrey,
    color: colors.bluegrey,

    top: 7,
  },
  leftBTCPercentage: {
    fontSize: 12,
    left: 5,
    //...Fonts.style.mediumFrogGreen
    color: colors.frogGreen,
  },
  rightSideText: {
    fontSize: 18,
    //...Fonts.style.boldFontOrange
    color: colors.orange,
    fontWeight: 'bold',
  },
  rightSideBalanceText: {
    fontSize: 14,
    //...Fonts.style.mediumBluegrey,
    color: colors.bluegrey,

    marginTop: 5,
  },
  rightDollerPrice: {
    fontSize: 18,
    //...Fonts.style.boldFontWhite,
    color: colors.white,
    fontWeight: 'bold',
    marginTop: 5,
  },
  rightSideValueText: {
    fontSize: 14,
    //...Fonts.style.mediumBluegrey,
    color: colors.bluegrey,

    marginTop: 5,
  },
  separatorLine: {
    width: '100%',
    height: 1,
    backgroundColor: colors.darkGreyBlue,
    marginTop: 10,
  },
  separatorLineRight: {
    width: '100%',
    height: 1,
    backgroundColor: colors.darkGreyBlue,
    marginTop: 5,
  },
  separatorWhiteLine: {
    width: '65%',
    height: 1,
    backgroundColor: colors.darkBlueSeparator,
    left: 8,
    top: 18,
  },
  activityView: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  activityText: {
    fontSize: 18,
    //...Fonts.style.boldFontWhite
    color: colors.white,
    fontWeight: 'bold',
  },
  securityFlatListView: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.darkGreyBlue,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  securityMarginTop: {
    marginTop: 25,
  },
  flatListInnerDate: {
    fontSize: 16,
    //...Fonts.style.semiBoldWhite,
    color: colors.white,
    fontWeight: '600',
    left: 20,
    // bottom: isIphoneX() ? '5' : '6'
  },
  recivedTextView: {
    flexDirection: 'row',
  },
  reciveText: {
    right: 0,
    position: 'absolute',
  },
  flatListInnerImage: {
    height: 15,
    width: 15,
    top: 10,
    resizeMode: 'contain',
  },
  flatListInnerView: {
    flexDirection: 'row',
    padding: 10,
  },
  itemDetailsView: {
    width: '100%',
    justifyContent: 'center',
  },
  flatListInnerText: {
    width: '100%',
    flexDirection: 'row',
  },
  flatListInnerActionTitle: {
    fontSize: 14,
    paddingLeft: 10,
    marginBottom: 2,
    //...Fonts.style.mediumBluegrey
    color: colors.bluegrey,
    fontWeight: '400',
  },
  flatListInnerRightTitle: {
    right: 18,
    position: 'absolute',
    //...Fonts.style.mediumFontOrange
    fontWeight: '400',
    color: colors.orange,
  },
  flatListInnerRightDollerTitle: {
    right: 18,
    position: 'absolute',
    fontWeight: '400',
    //...Fonts.style.mediumWhite
    color: colors.white,
  },
  flatListInnerFullTextTitle: {
    //...Fonts.style.mediumWhite,
    color: colors.white,

    fontWeight: '400',
    paddingLeft: 10,
    fontSize: 14,
    marginBottom: 2,
    top: 3,
  },
  bottomSideImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  graphView: {
    height: 150,
    flexDirection: 'row',
  },
  linearChartView: {
    flex: 1,
    marginLeft: 10,
  },
  flatListFooterContainer: {
    width: '100%',
    paddingHorizontal: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
    position: 'absolute',
  },
  roundShapeBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#000000',
    opacity: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paddingBottomSecond: {paddingBottom: 25},

  hBtn: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },

  flatListButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendText: {
    fontSize: 14,
    //...Fonts.style.semiBoldWhite
    color: colors.white,
    fontWeight: '600',
  },
  recivedText: {
    fontSize: 14,
    top: 10,
    //...Fonts.style.mediumWhite
    color: colors.white,
    fontWeight: '400',
  },
  linemarginTop: {
    marginTop: 10,
  },
  gText: {
    fontSize: 14,
    //...Fonts.style.regularBluegrey
    color: colors.bluegrey,
  },
  contentInset: {
    top: 20,
    bottom: 20,
  },
  contentInsetXaxis: {left: 10, right: 10},
  xAxis: {
    marginHorizontal: -10,
    height: 20,
    marginTop: 20,
  },
  lineChart: {
    height: 230,
  },
  chartWidget: {
    marginTop: 20,
  },
  chart: {
    width: '100%',
    height: 124,
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
  },
  view: {
    width: '50%',
  },

  middleLine: {
    width: 2,
    height: 44,
    backgroundColor: colors.white,
  },
  bottomButtonView: {
    width: '100%',
    flexDirection: 'row',
  },
  bottomButtonInnerView: {
    width: '50%',
  },
  buttonStyle: {
    flexDirection: 'row',
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleShapeView: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
  },
  circleInnerImage: {
    width: 12,
    height: 12,
  },
  xAxisTop: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  xAxisTopHr: {
    width: '80%',
    height: 1,
    marginBottom: 3,
    backgroundColor: colors.bluegrey,
  },
  xAxisAmt: {
    //...Fonts.style.regularBluegrey,
    color: colors.bluegrey,

    fontSize: 14,
  },
  areaChart: {
    height: 157,
    width: '114%',
    right: 20,
  },
  xAxisBottom: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  xAxisBottomHr: {
    width: '80%',
    height: 1,
    marginTop: 3,
    backgroundColor: colors.bluegrey,
  },
  xAxisSvg: {
    //...Fonts.style.boldFontBlue,
    color: colors.blue,
    fontWeight: 'bold',

    fontSize: 16,
  },
});
