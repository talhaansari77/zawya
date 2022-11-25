import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import { colors } from '../../../../utils/Colors';
import { Spacer } from '../../../../components/Spacer';


const ProgressContainer = () => {
  return (
    <View style={styles.mainContainer} >

<Progress.Bar
        progress={5}
        // width={null}
        height={5}
        color={colors.primary}
        borderColor={"#343a40"}
        backgroundColor={colors.primary}
        borderRadius={20}
        style={{
            width:"19%",
        }}
      />
      <Spacer width={5}/>
      <Progress.Bar
        progress={0}
        // width={null}
        height={5}
        color={colors.primary}
        borderColor={"#343a40"}
        // backgroundColor={colors.primary}
        borderRadius={20}
        style={{
            width:"19%",
        }}
      />
            <Spacer width={5}/>

      <Progress.Bar
        progress={0}
        // width={null}
        height={5}
        color={colors.primary}
        borderColor={colors.black}
        // backgroundColor={colors.primary}
        borderRadius={20}
        style={{
            width:"19%",
        }}
      />
            <Spacer width={5}/>

      <Progress.Bar
        progress={0}
        // width={null}
        height={5}
        color={colors.primary}
        borderColor={"#343a40"}
        // backgroundColor={colors.primary}
        borderRadius={20}
        style={{
width:"19%",
        }}
      />
            <Spacer width={5}/>

      <Progress.Bar
        progress={0}
        // width={null}
        height={5}
        color={colors.primary}
        borderColor={"#343a40"}
        // backgroundColor={colors.primary}
        borderRadius={20}
        style={{
width:"19%",
        }}
      />
    </View>
  )
}

export default ProgressContainer

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:"row",
        alignItems:"center"
    }

})