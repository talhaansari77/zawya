import {View, Text, Image, Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AddDesignScreen from '../../screens/Main/AddDesign/AddDesignScreen';
import SignOutScreen from '../../screens/Main/SignOut/SignOutScreen';
import CategoriesScreen from '../../screens/Main/Categories/CategoriesScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';
import {colors} from '../../utils/Colors';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {images} from '../../assets/images';
import {icons} from '../../assets/icons';
import StoreScreen from '../../screens/Main/Store/StoreScreen';
import Search from '../../screens/Main/Search';

const MainStack = () => {
  const Tab = createBottomTabNavigator();
  // const Stack = createStackNavigator();

  // const stack = ()=>(
  //   <Stack.Navigator
  //     screenOptions={{headerShown: false}}
  //   >
  //     <Stack.Screen name="store" component={StoreScreen} />

  //   </Stack.Navigator>
  // )
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
            return <Foundation name={'home'} size={25} color={colors.white} />;
            // size = focused ? 27 : 25;
          } else if (route.name === 'SignOutScreen') {
            iconName = icons.store;
            // size = focused ? 27 : 25;
            return (
              <FontAwesome name={'user'} size={25} color={colors.white} />
            );
          } else if (route.name === 'AddDesign') {
            iconName = icons.adddesign;
            size = focused ? 27 : 25;
          }

          return <FontAwesome name={'plus'} size={25} color={colors.white} />;
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
      initialRouteName="StoreScreen">
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="AddDesign" component={AddDesignScreen} />
      <Tab.Screen name="SignOutScreen" component={SignOutScreen} />
      <Tab.Screen
      options={{
        tabBarItemStyle: { display: "none" },
      }}
      name="Store"
      component={StoreScreen}
    />
      <Tab.Screen
      options={{
        tabBarItemStyle: { display: "none" },
      }}
      name="Search"
      component={Search}
    />


    </Tab.Navigator>
    
  );
};

export default MainStack;