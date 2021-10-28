import React, { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import style from "./style";

const SearchInput = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={style.searchInputContainer}>
      <TextInput
        style={style.searchTextInput}
        placeholder="Search plants"
        placeholderTextColor="#87a29b"
        onChangeText={setSearchText}
      />
      <Pressable
        style={style.searchInputButtonContainer}
        onPress={() => alert(searchText)}
      >
        <View style={style.searchInputButton}>
          <Feather name="search" size={24} color="white" />
        </View>
      </Pressable>
    </View>
  );
};

export default SearchInput;
