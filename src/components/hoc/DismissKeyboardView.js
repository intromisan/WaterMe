import React from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Dimensions,
} from "react-native";

const windowHeight = Dimensions.get("window").height;

const DismissKeyboardHOC = (Comp) => {
  return ({ children, ...props }) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp style={{ height: windowHeight }} {...props}>
        {children}
      </Comp>
    </TouchableWithoutFeedback>
  );
};
const DismissKeyboardView = DismissKeyboardHOC(View);

export default DismissKeyboardView;
