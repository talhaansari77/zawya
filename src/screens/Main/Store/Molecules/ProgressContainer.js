import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Progress from 'react-native-progress';
import {colors} from '../../../../utils/Colors';
import {Spacer} from '../../../../components/Spacer';

const ProgressContainer = () => {
  const useProgress = (maxTimeInSeconds = 300) => {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        if (progress < 1) {
          setElapsedTime(t => t + 1);
        }
      }, 100);
      return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
      setProgress(elapsedTime / maxTimeInSeconds);
    }, [elapsedTime]);

    return progress;
  };

  const progress = useProgress(30);
  console.log(progress);
  return (
    <View style={styles.mainContainer}>
      <Progress.Bar
        progress={progress}
        // width={null}
        height={5}
        color={colors.primary}
        borderColor={'#343a40'}
        borderRadius={20}
        style={{
          width: '19%',
        }}
      />
      <Spacer width={5} />
      <Progress.Bar
        progress={0}
        // width={null}
        height={5}
        color={colors.primary}
        borderColor={'#343a40'}
        // backgroundColor={colors.primary}
        borderRadius={20}
        style={{
          width: '19%',
        }}
      />
      <Spacer width={5} />

      <Progress.Bar
        progress={0}
        // width={null}
        height={5}
        color={colors.primary}
        borderColor={colors.black}
        // backgroundColor={colors.primary}
        borderRadius={20}
        style={{
          width: '19%',
        }}
      />
      <Spacer width={5} />

      <Progress.Bar
        progress={0}
        // width={null}
        height={5}
        color={colors.primary}
        borderColor={'#343a40'}
        // backgroundColor={colors.primary}
        borderRadius={20}
        style={{
          width: '19%',
        }}
      />
      <Spacer width={5} />

      <Progress.Bar
        progress={0}
        // width={null}
        height={5}
        color={colors.primary}
        borderColor={'#343a40'}
        // backgroundColor={colors.primary}
        borderRadius={20}
        style={{
          width: '19%',
        }}
      />
    </View>
  );
};

export default ProgressContainer;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
