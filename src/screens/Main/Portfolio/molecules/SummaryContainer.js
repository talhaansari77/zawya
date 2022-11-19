import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import GradientContainer from '../../../../components/GradientContainer';
import {colors} from '../../../../utils/Colors';
import {DashBoardGraphData} from '../../../../utils/Data';
import {PieChart} from 'react-native-svg-charts';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import LineSeparator from './LineSeparator';
import {Spacer} from '../../../../components/Spacer';
import PortfolioCoinPersent from './PortfolioCoinPersent';
import {Montserrat, Roboto} from '../../../../utils/Fonts';
import CustomText from '../../../../components/CustomText';
import CoinProgress from './CoinProgress';
import PortfolioAge from './PortfolioAge';

const SummaryContainer = () => {
  return (
    <View>
      <GradientContainer height={'91%'}
    //   borderWidth={1.5}
    //   borderRadius={20}
    //   borderColor={colors.darkBlue}
      >
        <View style={{width: '100%', height: '100%'}}>
          <View style={styles.graphCon}>
            <PieChart
              style={styles.graph}
              data={DashBoardGraphData}
              outerRadius={50}
              innerRadius={48}>
              <View style={styles.absoluteText}>
                <CustomText
                  label={'Summary'}
                  fontSize={12}
                  fontWeight={'600'}
                  fontFamily={Montserrat.SemiBold}
                  color={colors.white}
                  alignSelf={'flex-end'}
                />
              </View>
            </PieChart>
            <Spacer width={20} />
            <LineSeparator width={moderateScale(1.5)} height={'88%'} />
            <PortfolioCoinPersent />
          </View>
          <Spacer height={5} />

          <LineSeparator width={'100%'} height={1} />

          <View>
            <Spacer height={20} />

            <CustomText
              label={'$1787'}
              fontSize={16}
              fontWeight={'400'}
              fontFamily={Montserrat.SemiBold}
              color={colors.white}
              alignSelf={'center'}
            />
            <Spacer height={5} />

            <CustomText
              label={'Total Balance'}
              fontSize={14}
              fontWeight={'500'}
              fontFamily={Montserrat.SemiBold}
              color={colors.darkGrey}
              alignSelf={'center'}
            />
            <Spacer height={5} />
            <CoinProgress />

            <PortfolioAge />
          </View>
        </View>
      </GradientContainer>
    </View>
  );
};

export default SummaryContainer;

const styles = StyleSheet.create({
  absoluteText: {
    position: 'absolute',
    top: verticalScale(35),
    alignItems: 'center',
  },
  graphCon: {
    flexDirection: 'row',
    width: '100%',
    height: '17%',
  },
  graph: {height: '100%', width: '30%', flexDirection: 'row'},
});
