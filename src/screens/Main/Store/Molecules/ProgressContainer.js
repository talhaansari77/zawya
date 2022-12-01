import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Progress from 'react-native-progress';
import {colors} from '../../../../utils/Colors';
import {Spacer} from '../../../../components/Spacer';
import {ProgressBar} from 'rn-multi-progress-bar';

const ProgressContainer = ({storeImages}) => {
  const imagesList = Object.values(storeImages);
  // const [progress, setProgress] = useState(5000);
  // console.log(storeImages)
  // console.log('imageCount',imageCount)
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
      // console.log(progress,elapsedTime)
      if (progress === 1) {
        setElapsedTime(0)
      }
    }, [elapsedTime]);
    
    return progress;
  };
  
  
  const progress = useProgress(50);
  // console.log(progress);

  // useEffect(() => { 
  //   setInterval(() => {
  //     // console.log('first')
  //   }, 3000); 
  // }, [progress])
  
  return (
    <View style={styles.mainContainer}>
      {[1].map(index => (
        <>
          <Progress.Bar
            progress={progress}
            width={ (Dimensions.get("window").width/[1].length)-26}
            color={colors.primary}
          />
          {/* <Spacer width={5} /> */}
        </>
      ))}
    </View>
  );
};

export default ProgressContainer;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
