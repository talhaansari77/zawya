import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Switch,
  ImageBackground,
  ScrollView,
  //   Switch,
} from 'react-native';
import React from 'react';
import styled from 'react-native-styled-components';
import AppHeader from '../../../components/AppHeader';
import {scale, verticalScale} from 'react-native-size-matters';
import {images} from '../../../assets/images';
import {colors} from '../../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react';
import {Spacer} from '../../../components/Spacer';
import commonStyles from '../../../utils/CommonStyles';
// import {SwitchToggle} from '../../../components/Switch'

const ProfileScreen = ({navigation}) => {
  const [checked, setChecked] = useState({
    btn1: false,
    btn2: false,
    btn3: false,
  });

  const btn1 = () => {
    setChecked({...checked, btn1: !checked.btn1});
  };
  const btn2 = () => {
    setChecked({...checked, btn2: !checked.btn2});
  };
  const btn3 = () => {
    setChecked({...checked, btn3: !checked.btn3});
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [state, setState] = useState({
    searchText: '',
  });
  // const [checked, setChecked] = useState(false);

  const FlatListProfileData = [
    {
      title: 'Secuirty',
      subTitle: 'Lorem, ipsum dolor sit amet',
      image: images.Security,
      blueImage: images.SecurityBlueIcon,
      onPress: () => {
        navigation.navigate('SecurityScreen');
      },
    },
    {
      title: 'Support',
      subTitle: 'Lorem, ipsum dolor sit amet',
      image: images.HoursSupport,
      blueImage: images.SupportBlueIcon,
      onPress: () => {
        navigation.navigate('SupportScreen');
      },
    },
  ];

  const ProfileFlatListData = [
    {
      subtitle: 'BTC',
      name: 'Bitcoin',
      image: images.BitCoinImage,
    },
    {
      subtitle: 'DASH',
      name: 'Dash',
      image: images.dashLogo,
    },
    {
      subtitle: 'USDT',
      name: 'Tether Usd  ',
      image: images.UsdtLogo,
    },
  ];
  return (
    <ImageBackground
      source={images.BackgroundImage}
      resizeMode="cover"
      style={commonStyles.IosPadding}>
      {/* <PH20> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppHeader
          img={images.BackArrow}
          txt={'Profile'}
          fontSize={18}
          rightImg={images.SettingImage}
          onPress={() => navigation.goBack()}
          rightOnPress={() => navigation.navigate('SettingScreen')}
        />
        <Spacer height={10} />
        <View style={styles.container}>
          <View style={styles.circleShapeView}>
            <View style={styles.shadowLogoContainer}>
              <Image source={images.AppLogo} style={styles.qrCodeImage} />
            </View>
          </View>
          <View style={styles.QrCodeTextView}>
            <Text style={styles.QrCodeVersionNameText}>Zawya 2.1.03</Text>
            <Text style={styles.QrCodeSubText}>
              Lorem, ipsum dolor sit amet
            </Text>
          </View>
        </View>
        {FlatListProfileData.map((item, index) => {
          return (
            <View style={[styles.shadowContainer, styles.securityMarginTop]}>
              <LinearGradient
                start={{x: 0.0, y: 0.25}}
                end={{x: 0.8, y: 0.0}}
                colors={[
                  colors.darkGreyBlueThired,
                  colors.darkGreyBlueThired,
                  colors.duskSecond,
                ]}
                style={styles.securityFlatListView}>
                <TouchableOpacity activeOpacity={0.7} onPress={item.onPress}>
                  <View style={styles.flatListInnerTextView}>
                    <Text style={styles.flatListInnerTitleText}>
                      {item.title}
                    </Text>
                    <Image
                      source={item.image}
                      style={styles.securityInnerImage}
                    />
                  </View>
                  <View style={styles.separatorLine} />
                  <View style={styles.securitySubTitleView}>
                    <Text style={styles.flatListInnersubTitleText}>
                      {item.subTitle}
                    </Text>
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          );
        })}

        {/* <FlatList
          data={FlatListProfileData}
          contentContainerStyle={styles.paddingBottomSecond}
          renderItem={({item, index}) => (
            <View style={[styles.shadowContainer, styles.securityMarginTop]}>
              <LinearGradient
                start={{x: 0.0, y: 0.25}}
                end={{x: 0.8, y: 0.0}}
                colors={[
                  colors.darkGreyBlueThired,
                  colors.darkGreyBlueThired,
                  colors.duskSecond,
                ]}
                style={styles.securityFlatListView}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    {
                      index === 1 && navigation.navigate('ContactUs');
                    }
                    {
                      index === 0 && navigation.navigate('Security');
                    }
                  }}>
                  <View style={styles.flatListInnerTextView}>
                    <Text style={styles.flatListInnerTitleText}>
                      {item.title}
                    </Text>
                    <Image
                      source={item.image}
                      style={styles.securityInnerImage}
                    />
                  </View>
                  <View style={styles.separatorLine} />
                  <View style={styles.securitySubTitleView}>
                    <Text style={styles.flatListInnersubTitleText}>
                      {item.subTitle}
                    </Text>
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          )}
        />  */}
        <Spacer height={10} />

        <View style={styles.shadowContainer}>
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.8, y: 0.0}}
            colors={[
              colors.darkGreyBlueThired,
              colors.darkGreyBlueThired,
              colors.duskSecond,
            ]}
            style={[styles.enableAssetView]}>
            <View style={styles.enableView}>
              <Text style={styles.enableText}>selectedModalText</Text>
              <Text style={styles.enableNumberText}>(5/59)</Text>
              <TouchableOpacity
                onPress={() => this.toggleModal(true)}
                style={styles.enableMenuIcon}>
                <Image source={images.menu} style={styles.enableMenuIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.enablesubText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              vitae commodi voluptates repellendus reiciendis, magni amet
            </Text>
          </LinearGradient>
        </View>
        <Spacer height={5} />

        <View style={styles.searchView}>
          <TextInput
            style={styles.searchTxtInput}
            placeholder={'Search'}
            onChangeText={searchText => setState({...state})}
            value={state.searchText}
            placeholderTextColor={colors.white}
          />

          {state.searchText.length > 0 ? (
            <TouchableOpacity
              onPress={() =>
                setState({
                  searchText: '',
                })
              }
              style={styles.serachButtonView}>
              <Image source={images.CrossIcon} style={styles.cancelIcon} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.serachButtonView}>
              <Image source={images.SerachProfile} style={styles.searchIcon} />
            </TouchableOpacity>
          )}
        </View>
        <Spacer height={20} />

        {ProfileFlatListData.map((item, index) => {
          return (
            <View style={[styles.shadowContainer, styles.marginTop]}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.8, y: 0.0}}
                colors={[
                  colors.darkGreyBlueThired,
                  colors.darkGreyBlueThired,
                  colors.duskSecond,
                ]}
                style={styles.flatListView}>
                <View style={styles.flatListInnerView}>
                  <Image
                    source={item.image}
                    style={styles.flatListInnerImage}
                  />

                  <View style={styles.itemDetailsView}>
                    <Text style={styles.flatListInnerShortTitle}>
                      {item.subtitle}
                    </Text>
                    <View style={styles.switchToggleView}>
                      {index === 0 && (
                        <View style={styles.toggleView}>
                          <Switch
                            // trackColor={{false: colors.black, true: '#f4f3f4'}}
                            // thumbColor={isEnabled ? colors.primary : colors.white}
                            ios_backgroundColor={colors.primary}
                            onValueChange={btn1}
                            value={checked.btn1}
                          />
                        </View>
                      )}
                      {index === 1 && (
                        <View style={styles.toggleView}>
                          {/* <Switch
                              switchOn={this.state.switchOnSecondButton}
                              onPress={() =>
                                this.setState({
                                  switchOnSecondButton: !this.state
                                    .switchOnSecondButton
                                })
                              }
                            /> */}
                          <Switch
                            //  trackColor={{false: colors.black, true: '#f4f3f4'}}
                            //  thumbColor={isEnabled ? colors.primary : colors.white}
                            ios_backgroundColor={colors.primary}
                            onValueChange={btn2}
                            value={checked.btn2}
                          />
                        </View>
                      )}
                      {index === 2 && (
                        <View style={styles.toggleView}>
                          {/* <Switch
                              switchOn={this.state.switchOnThiredButton}
                              onPress={this.switchOnThiredPress}
                            /> */}
                          <Switch
                            // trackColor={{false: colors.black, true: '#f4f3f4'}}
                            // thumbColor={isEnabled ? colors.primary : colors.white}
                            ios_backgroundColor={colors.primary}
                            onValueChange={btn3}
                            value={checked.btn3}
                          />
                        </View>
                      )}
                    </View>

                    <Text style={styles.flatListInnerFullTextTitle}>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </View>
          );
        })}

        {/* <FlatList
          style={styles.flatList}
          contentContainerStyle={styles.paddingBottom}
          data={ProfileFlatListData}
          renderItem={({item, index}) => (
            <View style={[styles.shadowContainer, styles.marginTop]}>
              <LinearGradient
                start={{x: 0.0, y: 0.0}}
                end={{x: 0.8, y: 0.0}}
                colors={[
                  colors.darkGreyBlueThired,
                  colors.darkGreyBlueThired,
                  colors.duskSecond,
                ]}
                style={styles.flatListView}>
                <View style={styles.flatListInnerView}>
                  <Image
                    source={item.image}
                    style={styles.flatListInnerImage}
                  />

                  <View style={styles.itemDetailsView}>
                    <Text style={styles.flatListInnerShortTitle}>
                      {item.subtitle}
                    </Text>
                    <View style={styles.switchToggleView}>
                      {index === 0 && (
                        <View style={styles.toggleView}>
                          <Switch
                            trackColor={{false: colors.blueWithPurple, true: '#f4f3f4'}}
                            thumbColor={isEnabled ? colors.niceBlue : colors.white}
                            ios_backgroundColor={colors.blueWithPurple}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                          />
                        </View>
                      )}
                      {index === 1 && (
                        <View style={styles.toggleView}>
                        
                            <Switch
                            trackColor={{false: colors.blueWithPurple, true: '#f4f3f4'}}
                            thumbColor={isEnabled ? colors.niceBlue : colors.white}
                            ios_backgroundColor={colors.blueWithPurple}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                          />
                        </View>
                      )}
                      {index === 2 && (
                        <View style={styles.toggleView}>
                       
                            <Switch
                            trackColor={{false: colors.blueWithPurple, true: '#f4f3f4'}}
                            thumbColor={isEnabled ? colors.niceBlue : colors.white}
                            ios_backgroundColor={colors.blueWithPurple}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                          />
                        </View>
                      )}
                    </View>

                    <Text style={styles.flatListInnerFullTextTitle}>
                      {item.name}
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </View>
          )}
        /> */}
        {/* </PH20> */}
      </ScrollView>
    </ImageBackground>
  );
};

export default ProfileScreen;

const PH10 = styled(View, {
  paddingHorizontal: scale(10),
});
const PH20 = styled(View, {
  paddingHorizontal: scale(20),
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  circleShapeView: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.lightBlueGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  QrCodeTextView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  QrCodeVersionNameText: {
    fontSize: 18,
    fontWeight: '600',
    //...Fonts.style.semiBoldWhite
    color: colors.white,
    fontWeight: 'bold',
  },
  QrCodeSubText: {
    //...Fonts.style.mediumLightBlue,
    color: colors.lighBlue,
    fontWeight: '400',

    fontSize: 14,
    marginTop: 10,
  },
  qrCodeImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  securityFlatListView: {
    padding: 15,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.darkGreyBlue,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  securityMarginTop: {
    marginTop: 10,
  },
  enableAssetView: {
    padding: 15,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.darkGreyBlue,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  separatorLine: {
    width: '84%',
    height: 1,
    backgroundColor: colors.darkGreyBlue,
    top: 7,
  },
  enableText: {
    //...Fonts.style.boldWhite
    color: colors.white,
    fontWeight: 'bold',
  },
  enableNumberText: {
    color: colors.white,
    fontSize: 15,
    left: 15,
  },
  enablesubText: {
    fontSize: 13,
    marginTop: 10,
    //...Fonts.style.regularBluegrey
    color: colors.bluegrey,
  },
  enableView: {
    flexDirection: 'row',
  },
  enableMenuIcon: {
    width: 15,
    height: 15,
    right: 0,
    position: 'absolute',
    resizeMode: 'contain',
  },
  flatList: {
    paddingTop: 23,
  },
  searchView: {
    height: verticalScale(35),
    width: 330,
    backgroundColor: colors.darkTwo,
    flexDirection: 'row',
    borderRadius: 55,
    alignSelf: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    top: 15,
  },
  searchTxtInput: {
    //...Fonts.style.mediumLightBlueGrey,
    color: colors.lightBlueGrey,
    fontWeight: '400',

    fontSize: 14,
    width: '100%',
    height: 45,
    alignSelf: 'center',
    left: 20,
  },
  serachButtonView: {
    right: 20,
    position: 'absolute',
  },
  searchIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  cancelIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  flatListView: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderTopLeftRadius: 28,
    borderBottomLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomRightRadius: 28,
    // borderRadius: '13',
    borderColor: colors.darkGreyBlue,
  },
  marginTop: {
    marginTop: 15,
  },
  flatListInnerView: {
    flexDirection: 'row',
  },
  flatListInnerImage: {
    height: 50,
    width: 60,
    resizeMode: 'contain',
    right: 3,
  },
  itemDetailsView: {
    width: '100%',
    justifyContent: 'center',
  },
  flatListInnerText: {
    width: '82%',
    flexDirection: 'row',
  },
  flatListInnerShortTitle: {
    width: '50%',
    fontSize: 16,
    //...Fonts.style.boldWhite,
    color: colors.white,
    fontWeight: 'bold',
    paddingLeft: 8,
    top: 2,
  },
  paddingBottom: {
    paddingBottom: 90,
  },
  paddingBottomSecond: {
    paddingBottom: 10,
  },
  flatListInnerFullTextTitle: {
    width: '50%',
    //...Fonts.style.regularBluegrey,
    color: colors.bluegrey,

    paddingLeft: 8,
    marginBottom: 2,
    marginTop: 3,
  },
  flatListInnerTextView: {
    flexDirection: 'row',
  },
  securityInnerImage: {
    width: 35,
    height: 35,
    right: 0,
    position: 'absolute',
    top: 5,
    resizeMode: 'contain',
  },
  securitySubTitleView: {
    width: '80%',
  },
  flatListInnerTitleText: {
    //...Fonts.style.boldWhite
    color: colors.white,
    fontWeight: 'bold',
  },
  flatListInnersubTitleText: {
    //...Fonts.style.regularBluegrey,
    color: colors.bluegrey,

    fontSize: 13,
    marginTop: 13,
  },
  profileContainerStyle: {
    width: 30,
    height: 10,
    borderRadius: 8,
    backgroundColor: '#ccc',
    padding: 0,
    bottom: 3,
  },
  profileCircleStyle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.lightBlueGrey,
  },
  switchToggleView: {
    // bottom: 30,
    justifyContent: 'center',
  },
  shadowLogoContainer: {
    width: 50,
    height: 50,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupModal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupView: {
    width: '80%',
    flexDirection: 'column',
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  flatListModalView: {
    width: '100%',
    paddingHorizontal: 30,
  },
  modalSeparator: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#C0C0C0',
  },
  modalText: {
    fontSize: 18,
    //...Fonts.style.semiBoldBlack,
    color: colors.black,
    fontWeight: 'bold',

    paddingVertical: 25,
  },
  modalTextView: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  toggleView: {
    right: 80,
    position: 'absolute',
  },
});
