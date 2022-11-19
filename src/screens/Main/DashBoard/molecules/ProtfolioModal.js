import { StyleSheet, Text, View,Modal,TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import { PortFolioModalData } from '../../../../utils/Data'
import CustomText from '../../../../components/CustomText'
import { Montserrat, Roboto } from '../../../../utils/Fonts'
import { colors } from '../../../../utils/Colors'
import { moderateScale } from 'react-native-size-matters'

const ProtfolioModal = ({modalVisible,setModalVisible}) => {
  return (

    <Modal
    animationType={'fade'}
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(false);
    }}>
    <TouchableOpacity

      activeOpacity={6}
      onPress={() => {
        setModalVisible(false);
      }}
      style={styles.popupModal}>
      <TouchableOpacity activeOpacity={1} style={styles.popupView}>
        <View style={styles.flatListModalView}>
            <View style={{borderRadius:10,borderWidth:0.5,borderColor:colors.normallightGrey,paddingHorizontal:moderateScale(30)}}>

          <FlatList
            bounces={false}
            showsVerticalScrollIndicator={false}
            data={PortFolioModalData}
            renderItem={({ item, index }) => (
              <View style={styles.modalTextView}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    // this.setState({ selectedModalText: item.name });
                  }}>
                        <CustomText
                label={item.name}
                fontSize={14}
                fontWeight={"600"}
                fontFamily={Montserrat.SemiBold}
                color={colors.black}
                marginBottom={20}
                marginTop={20}


              />
                  {/* <Text style={styles.modalText}>{item.name}</Text> */}
                </TouchableOpacity>
                {PortFolioModalData.length > 0 &&
                index === PortFolioModalData.length - 1 ? null : (
                  <View style={styles.modalSeparator} />
                )}
              </View>
            )}
          />
                      </View>

        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  </Modal>
    
  )
}

export default ProtfolioModal

const styles = StyleSheet.create({

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
        borderRadius: 20
      },
      flatListModalView: {
        width: '100%',
        padding:8,
        // paddingHorizontal: 30,
        borderRadius:20,
      },
      modalTextView: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between'
      },
      modalSeparator: {
        width: '100%',
        height: 0.5,
        backgroundColor: '#C0C0C0'
      },

})