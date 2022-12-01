import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {images} from '../../assets/images';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {icons} from '../../assets/icons';

const CustomDrawer = ({...props}) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#FD703B'}}>
        <ImageBackground source={images.drawerBack} style={{padding: 20}}>
          <View style={{padding: 30}}>
            <Image
              source={icons.google}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10,
                // marginLeft: -10,
                top: 40,
                left: -20,
              }}
            />
            <Text
              style={{
                top: 40,
                left: -20,
                fontSize: 20,
                fontWeight: '700',
                color: '#f3f3f3',
              }}>
              {'UserName'}
            </Text>
            <Text
              style={{
                color: '#f3f3f3',
                justifyContent: 'center',
                top: 40,
                left: -20,
              }}>
              {"email"}
            </Text>
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      {/* <View style={{marginBottom: 20}}>
        {status ? (
          <Button
            text="Logout"
            size={20}
            color={appColors.secondary}
            onPress={() => {
              CustomConfirmAlert(
                'Important',
                'Are Your Sure You Want To Logout',
                () => {
                  dispatch({
                    type: 'Logout',
                  });
                },
              );
              // console.log(res);
            }}
          />
        ) : (
          <></>
        )}
      </View> */}
    </View>
  );
};

export default CustomDrawer;
export var userIcon = 'https://cdn-icons-png.flaticon.com/512/149/149071.png';
const CustomConfirmAlert = (title, msg, onConfirm) => {
  alert(title, msg, [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel'),
      style: 'cancel',
    },
    {
      text: 'OK',
      onPress: () => {
        onConfirm();
      },
    },
  ]);
};
