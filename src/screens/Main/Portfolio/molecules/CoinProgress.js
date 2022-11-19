import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../../utils/Colors';
import CustomText from '../../../../components/CustomText';
import {Montserrat} from '../../../../utils/Fonts';
import {Spacer} from '../../../../components/Spacer';
import {BitCoinGraphData, xdata} from '../../../../utils/Data';
import * as shape from 'd3-shape';
import {AreaChart} from 'react-native-svg-charts';

import {
  Defs,
  LinearGradient as LinearGradientSvg,
  Stop,
  Circle,
  G,
  Path,
  Grid,
  Line as LineHorizantol,
} from 'react-native-svg';
import {verticalScale} from 'react-native-size-matters';

const CoinProgress = () => {
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

  return (
    <View style={{width: '100%'}}>
      <View style={styles.xAxisTop}>
        <CustomText
          label="$5,341.68"
          fontSize={14}
          color={colors.bluegrey}
          fontWeight={'400'}
          fontFamily={Montserrat.SemiBold}
        />
        <View style={styles.xAxisTopHr} />
      </View>
      <AreaChart
        style={styles.areaChart}
        data={BitCoinGraphData}
        numberOfTicks={0}
        curve={shape.curveNatural}
        svg={{fill: 'url(#gradient)'}}>
        {/* <Grid/> */}
        <Line />
        <Gradient />
      </AreaChart>

      <Spacer height={1} />

      <View style={{flexDirection: 'row'}}>
        <CustomText
          label="$5,341.68"
          fontSize={14}
          color={colors.bluegrey}
          fontWeight={'400'}
          fontFamily={Montserrat.SemiBold}
          // marginTop={10}
          marginRight={20}
        />
        <View style={styles.xAxisTopHr} />
      </View>
      <Spacer height={7} />

      <View style={{flexDirection: 'row', width: '100%'}}>
        {xdata.map(item => {
          return (
            <CustomText
              label={item}
              fontSize={14}
              color={colors.white}
              fontWeight={'600'}
              fontFamily={Montserrat.SemiBold}
              // marginTop={10}
              marginRight={28}
              marginLeft={4}
            />
          );
        })}
      </View>

      <Spacer height={30} />
    </View>
  );
};

export default CoinProgress;

const styles = StyleSheet.create({
  xAxisTop: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  xAxisTopHr: {
    width: '70%',
    height: 1,
    marginBottom: 3,
    backgroundColor: colors.bluegrey,
  },
  areaChart: {
    height: verticalScale(160),
    width: '105%',
    right: 7,
  },
});
