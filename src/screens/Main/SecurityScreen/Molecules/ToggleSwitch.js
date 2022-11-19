import { View, Text } from 'react-native'
import React from 'react'
import CustomTextInput from '../../../../components/CustomTextInput';

const ToggleSwitch = () => {
    const [isToggled, setIsToggled] = useState(true);
    const onToggle = () => setIsToggled(!isToggled);
  return (
    <View>
      <label >
        <CustomTextInput />
        <span  />
      </label>
    </View>
  )
}

export default ToggleSwitch