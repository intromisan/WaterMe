import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import style from "./styles";
import colors from "../../config/colors";

const LoginScreen = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={style.loginScreen}>
        <View style={style.loginContainer}>
          <View>
            <Text style={style.loginTitle}>Log In</Text>
            <Text style={style.loginSubtitle}>with your WaterMe account</Text>
          </View>
          <View style={style.inputView}>
            <View style={style.inputWrap}>
              <Feather
                name="mail"
                size={18}
                color={colors.primary}
                style={style.inputIcon}
              />
              <TextInput
                style={style.input}
                keyboardType="email-address"
                value={emailInput}
                onChangeText={setEmailInput}
                placeholder="E-mail"
              />
            </View>
            <View style={style.inputWrap}>
              <Feather
                name="lock"
                size={18}
                color={colors.primary}
                style={style.inputIcon}
              />
              <TextInput
                style={style.input}
                value={passwordInput}
                secureTextEntry={true}
                onChangeText={setPasswordInput}
                placeholder="Password"
              />
            </View>
          </View>
          <Text style={style.noAccount}>
            Don't have an account? <Text style={style.linkText}>Sign up</Text>
          </Text>
          <Text style={style.linkText}>Forgot password?</Text>
          <Pressable
            onPress={() =>
              console.log({ email: emailInput, password: passwordInput })
            }
          >
            <View style={style.button}>
              <Text style={style.buttonText}>Log In</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
