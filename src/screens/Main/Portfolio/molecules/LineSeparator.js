import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../../utils/Colors'

const LineSeparator = (props) => {
  return (
    <View style={{width:props.width,height:props.height,backgroundColor:colors.bluedarkColor}}>
    </View>
  )
}

export default LineSeparator

const styles = StyleSheet.create({})