import {View, Text, Image, Switch} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PH20} from '../../../../utils/CommonStyles';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../Styles';
import {colors} from '../../../../utils/Colors';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

const CoinView = ({coin, addCoin, searchText}) => {
  console.log(coin);
  const coinsList = useSelector(state => state.myCoinReducer.coinsList);
  const [checked, setChecked] = useState({
    btn1: false,
  });

  const btnSwitch = async () => {
    setChecked({...checked, btn1: !checked.btn1});
  };
  const btnSwitchTrue = async () => {
    setChecked({...checked, btn1: true});
  };
  const btnSwitchFalse = async () => {
    setChecked({...checked, btn1: false});
  };

  useEffect(() => {
    // setTimeout(() => {
    let ExistingCoin = coinsList.find(lCoin => lCoin.id === coin.id);
    if (ExistingCoin?.checkboxValue) btnSwitchTrue();
    else btnSwitchFalse();
  }, [searchText]);

  return (
    <PH20>
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
              source={{uri: coin.image}}
              style={styles.flatListInnerImage}
            />

            <View style={styles.itemDetailsView}>
              <Text style={styles.flatListInnerShortTitle}>
                {coin.symbol.toUpperCase()}
              </Text>
              <View style={styles.switchToggleView}>
                <View style={styles.toggleView}>
                  <Switch
                    // trackColor={{false: colors.black, true: '#f4f3f4'}}
                    // thumbColor={isEnabled ? colors.primary : colors.white}
                    ios_backgroundColor={colors.primary}
                    onValueChange={value => {
                      console.log(value);
                      btnSwitch().then(() => addCoin(coin, value));
                    }}
                    value={checked.btn1}
                  />
                </View>
              </View>

              <Text style={styles.flatListInnerFullTextTitle}>{coin.name}</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </PH20>
  );
};

export default CoinView;
