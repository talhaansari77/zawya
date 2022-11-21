import {StyleSheet, Text, View, Platform, Image} from 'react-native';
import React from 'react';
import {colors} from '../../../../utils/Colors';
import CustomText from '../../../../components/CustomText';
import {Montserrat} from '../../../../utils/Fonts';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Spacer} from '../../../../components/Spacer';
import {icons} from '../../../../assets/icons';


const AuthDate=[
    {id:1,img:icons.google},
    {id:2,img:icons.facebook},
    {id:3,img:icons.linkend},

]

const AuthOption = () => {
  return (
    <View>
      <View style={styles.OrContainer}>
        <View style={styles.lineSeprator}></View>
        <CustomText
          label="OR"
          fontFamily={Montserrat.SemiBold}
          fontSize={15}
          marginLeft={10}
          marginRight={10}
        />
        <View style={styles.lineSeprator}></View>
      </View>
      <Spacer height={20} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
            {
                AuthDate.map(item=>{
                    return(
                        <View style={styles.authContainer}>
                        <Image
                          style={{width: scale(18), height: verticalScale(18)}}
                          source={item.img}
                        />
                      </View>
                    
                    )
                })
            }
       
      </View>
    </View>
  );
};

export default AuthOption;

const styles = StyleSheet.create({
  OrContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lineSeprator: {
    width: '40%',
    backgroundColor: colors.black,
    height: 1,
  },
  authContainer: {
    width: 55,
    height: 55,
    borderRadius: 99,
    shadowColor: Platform.OS == 'ios' ? '#ced4da' : colors.black,
    shadowRadius: 8,
    backgroundColor: colors.white,
    elevation: 5,
    alignItems: 'center',
    shadowOpacity: 0.5,
    justifyContent: 'center',

    shadowOffset: {width: 3, height: 5},
  },
});
