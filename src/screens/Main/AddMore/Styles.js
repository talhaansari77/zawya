import {StyleSheet} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import {colors} from '../../../utils/Colors';

export const styles = StyleSheet.create({
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
