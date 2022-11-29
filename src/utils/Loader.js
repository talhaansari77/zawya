import {View,ActivityIndicator} from 'react-native';
import LottieView from 'lottie-react-native';
import { color } from 'react-native-elements/dist/helpers';
import { colors } from './Colors';

const Loader = ({loading, file,height}) => {
  return loading ? (
    <View
      style={{
        backgroundColor: 'black',
        position: 'absolute',
        opacity: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}>
      {
        loading?(
          <ActivityIndicator size="large" color={colors.primary} />
          ):<></>
      }
      {/* <LottieView style={{height: height||200}} source={file} autoPlay speed={1} /> */}
    </View>
  ) : (
    <></>
  );
};

export default Loader;
