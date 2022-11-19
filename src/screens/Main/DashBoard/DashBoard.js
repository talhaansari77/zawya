import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Platform,
  ImageBackground,
  Alert,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import AppHeader from '../../../components/AppHeader';
import {images} from '../../../assets/images';
import GradientContainer from '../../../components/GradientContainer';
import commonStyles from '../../../utils/CommonStyles';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {Spacer} from '../../../components/Spacer';
import DashBoardContainer from './molecules/DashBoardContainer';
import BitCoineContainer from './molecules/BitCoineContainer';
import FooterAddContainer from './molecules/FooterAddContainer';
import PortfolioContainer from './molecules/PortfolioContainer';
import ProtfolioModal from './molecules/ProtfolioModal';
import TouchID from 'react-native-touch-id';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import Loader from '../../../utils/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import constants from '../../../redux/constants';

const DashBoard = ({navigation}) => {
  const coinsList = useSelector(state => state.myCoinReducer.coinsList);
  const isFocused = useIsFocused();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [name, setName] = useState("Ali")
  
  const addCoin = async (coin, checkboxValue) =>
    dispatch({
      type: constants.ADD_COIN,
      payload: {
        ...coin,
        checkboxValue: checkboxValue,
      },
    });


  const storeData = async (value) => {
    try {
      await AsyncStorage.setName('@storage_Key', value)
    } catch (e) {
      // saving error
    }
  }

  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };



  useEffect(() => {
    handleBiometric();
  });

  const handleBiometric = () => {
    TouchID.isSupported(optionalConfigObject)
      .then(biometryType => {
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported........--------+++++++++++');
          TouchID.authenticate()
            .then(success => {
              console.log('Success', success);
            })
            .catch(err => {
              console.log('Error', err);
            });
        } else {
          console.log('TouchID is supported........--------+++++++++++');
          TouchID.authenticate('', optionalConfigObject)
            .then(success => {
              console.log('Success', success);
            })
            .catch(err => {
              console.log('Error', err);
            });
        }
      })
      .catch(err => {
        console.log('Errorsss', err);
      });
  };

  const [modalVisible, setModalVisible] = useState(false);

  const CoinRender = ({item, index}) => {
    return (
      // <View style={{flex:1}}>
      <BitCoineContainer
        name={item.name}
        coin={item.symbol.toUpperCase()}
        amount={`$${item.current_price}`}
        number={item.market_cap_rank}
        grading={item.price_change_percentage_24h.toFixed(2)}
        img={item.image}
        onPress={() => navigation.navigate('WalletScreen', {coin: item})}
      />
      // </View>
    );
  };

  useEffect(() => {
    // limit is 250 tokens 
   
    setLoading(true);
    axios
      .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250`)
      .then(response => {
        // console.log(response.data);
        let list = [];
        coinsList?.map(lCoin => {
          let foundCoin = response?.data?.find(sCoin => sCoin.id === lCoin.id);
          list.push(foundCoin);
        });
        // sort coin
        list = list.sort(
          (a, b) =>
            Number(a.market_cap_rank) -
            Number(b.market_cap_rank),
        );
        // default coin list
        list = list.length <= 0 ? response?.data?.slice(0, 3) : list;
        list.map(coin => addCoin(coin, true));
        setData(list);
        setLoading(false);
        console.log('data is ', list);
      })
      .catch(function (error) {
        setLoading(false);
        console.log(error);
      });
    // return ()=>false
  }, [isFocused]);

  return (
    <>
      <ImageBackground
        source={images.BackgroundImage}
        resizeMode="cover"
        style={commonStyles.IosPadding}>
        <AppHeader
          onPress={() => {
            navigation.navigate('ProfileScreen');
          }}
          marginLeft={10}
          img={images.UserImage}
          txt={'Zawya'}
          width={18}
          heigth={20}
          fontSize={18}
          rightImg={images.SettingImage}
          rightOnPress={() => navigation.navigate('SettingScreen')}
        />
        <View style={{height: '80%'}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Spacer height={10} />
            <DashBoardContainer
              onPress={() => {
                navigation.navigate('Portfolio');
              }}
            />
            <PortfolioContainer
              setModalVisible={setModalVisible}
              modalVisible={modalVisible}
            />

            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              renderItem={CoinRender}
            />
          </ScrollView>
        </View>
      </ImageBackground>

      <FooterAddContainer />
      <ProtfolioModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
      <Loader
        file={require('../../../assets/Loaders/loader.json')}
        loading={loading}
        height={100}
      />
    </>
  );
};

export default DashBoard;

const styles = StyleSheet.create({});
