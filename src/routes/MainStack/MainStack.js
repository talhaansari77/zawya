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
import Favorites from '../../screens/Main/Favorites';

const MainStack = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName={'FavoritesScreen'}
      >
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Stack.Screen name="SearchScreen" component={Search} />
      <Stack.Screen name="StoreScreen" component={StoreScreen} />
      <Stack.Screen name="AddDesignScreen" component={AddDesignScreen} />
      <Stack.Screen name="FavoritesScreen" component={Favorites} />
      <Stack.Screen name="SignOutScreen" component={SignOutScreen} />
      {/* <Stack.Screen name="AddDesignScreen" component={AddDesignScreen} /> */}
    </Stack.Navigator>
  );
};

export default MainStack;
