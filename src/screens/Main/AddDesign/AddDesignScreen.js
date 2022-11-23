import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../../components/CustomText'
import { Spacer } from '../../../components/Spacer'
import DesignForm from './Molecules/DesignForm'
import { colors } from '../../../utils/Colors'
import DesignFormBottom from './Molecules/DesignFormBottom'

const AddDesignScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{backgroundColor:colors.white, flex:1}}>
      <SafeAreaView>
        <Spacer height={5} />
        <CustomText label={"Design Your Ads"} fontSize={15} alignSelf={"center"}/>
        <Spacer height={10} />
        <DesignForm />
        <DesignFormBottom />
      </SafeAreaView>
    </View> 
    </ScrollView>
  )
}

export default AddDesignScreen

const styles = StyleSheet.create({})