import React from "react";
import { Pressable, Text, View } from "react-native";
import style from "./styles";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../config/colors";

const ScreenTitle = ({ wishlist, subtitle, title }) => {
  return (
    <View style={style.screenTitleContainer}>
      <View>
        <Text style={style.screenSubtitle}>{subtitle}</Text>
        <Text style={style.screenTitle}>{title}</Text>
      </View>
      {wishlist && (
        <View>
          <Pressable style={style.wishlist}>
            <AntDesign name="heart" color={colors.red} size={14} />
            <Text style={style.wishlistText}>Wishlist</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ScreenTitle;
