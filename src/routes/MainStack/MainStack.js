import {View, Text, Image, Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AddDesignScreen from '../../screens/Main/AddDesign/AddDesignScreen';
import SignOutScreen from '../../screens/Main/SignOut/SignOutScreen';
import CategoriesScreen from '../../screens/Main/Categories/CategoriesScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import {colors} from '../../utils/Colors';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {images} from '../../assets/images';
import {icons} from '../../assets/icons';
import StoreScreen from '../../screens/Main/Store/StoreScreen';

const MainStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
          height: verticalScale(45),
          paddingHorizontal: scale(10),
          paddingTop: Platform.OS == 'ios' ? 10 : 0,
        },
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Categories') {
            iconName = icons.category;
            // size = focused ? 27 : 25;
          } else if (route.name === 'Store') {
            iconName = icons.store;
            // size = focused ? 27 : 25;
            return (
              <Image
                resizeMode="contain"
                source={iconName}
                style={{width: moderateScale(15), height: verticalScale(15)}}
              />
              
            );
          } else if (route.name === 'AddDesign') {
            iconName = icons.adddesign;
            size = focused ? 27 : 25;
          }

          return (
            <Image
              resizeMode="contain"
              source={iconName}
              style={{width: moderateScale(15), height: verticalScale(15)}}
            />
          );
        },
      })}
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#694fad'}}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: '#000',
        // activeBackgroundColor: '#fff',
        showIcon: true,
      }}
      initialRouteName="Categories">
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Store" component={StoreScreen} />

      <Tab.Screen name="AddDesign" component={AddDesignScreen} />

      {/* <Tab.Screen name="Categories" component={SettingStack} /> */}
      {/* <Tab.Screen name="Favorite" component={favorite} />
    <Tab.Screen name="Home" component={base} /> */}

      {/* <Tab.Screen
      options={{
        tabBarItemStyle: { display: "none" },
      }}
      name="EditProfile"
      component={EditProfile}
    /> */}
      {/* <Tab.Screen name="Profile" component={interests} /> */}
    </Tab.Navigator>
    // <Stack.Navigator
    //   screenOptions={{headerShown: false}}
    //   initialRouteName={"Categories"}
    // >
    //   <Stack.Screen name="AddDesign" component={AddDesignScreen} />
    //   <Stack.Screen name="Signout" component={SignOutScreen} />
    //   <Stack.Screen name="Categories" component={CategoriesScreen} />

    // </Stack.Navigator>
  );
};

export default MainStack;
