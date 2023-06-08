import { Image, Platform, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { logo } from "../assets/assets";
import { Title } from "../common/texts";
import { KellyGreen, White } from "../common/colors";
import { MyStatusBar } from '../common/Statusbar'
export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      return this.props.navigation.replace("Login");
    }, 2000);
  }
  render() {
    return (
      <View style={styles.container}>
                <MyStatusBar backgroundColor={KellyGreen} barStyle="light-content" />
        <Image style={styles.logoImg} source={logo} />
        <Text style={styles.titleText}>{Title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImg: { height: RFPercentage(25), width: RFPercentage(25) },
  titleText: {
    marginTop: RFPercentage(10),
    fontSize: RFPercentage(5),
    color: White,
    fontWeight: Platform.OS == "ios" ? "500" : "bold",
  },
});
