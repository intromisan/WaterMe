import React from "react";
import { Text, View } from "react-native";
import { Shadow } from "react-native-neomorph-shadows";
import DismissKeyboardView from "../../components/hoc/DismissKeyboardView";
import SemiBoldItalicText from "../../components/hoc/SemiBoldItalicText";
import SemiBoldText from "../../components/hoc/SemiBoldText";
import SearchInput from "../../components/SearchInput";
import colors from "../../config/colors";
import globalStyles from "../../config/styles";
import style from "./styles";

const Search = () => {
  return (
    <DismissKeyboardView>
      <View
        style={{
          ...globalStyles.screenContainer,
          backgroundColor: "#ffffff",
        }}
      >
        <View style={style.searchBackground} />
        <View style={style.searchContainer}>
          <SemiBoldText addStyle={{ ...style.searchText }}>
            Find Your{" "}
            <SemiBoldItalicText addStyle={{ color: colors.darkPrimary }}>
              Perfect
            </SemiBoldItalicText>{" "}
            Plants
          </SemiBoldText>
          <Shadow
            inner
            style={{
              shadowOffset: { width: 10, height: 10 },
              shadowOpacity: 1,
              shadowColor: "grey",
              shadowRadius: 10,
              borderRadius: 20,
              backgroundColor: "white",
              width: 100,
              height: 100,
              // ...include most of View/Layout styles
            }}
          />
          <SearchInput />
          <View style={style.searchSubtext}>
            <SemiBoldText>
              Find popular plants, apply filters and more
            </SemiBoldText>
          </View>
        </View>
      </View>
    </DismissKeyboardView>
  );
};

export default Search;
