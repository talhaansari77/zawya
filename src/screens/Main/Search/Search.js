import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Spacer } from '../../../components/Spacer'
import { SearchBar } from 'react-native-elements'
import { colors } from '../../../utils/Colors'

const Search = () => {
    const [search, setSearch] = useState('')
    updateSearch = (search) => {
        setSearch({ search });
      };
  return (
    <View>
      <Spacer height={40}/>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    </View>
  )
}

export default Search
