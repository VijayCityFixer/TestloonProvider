import React from "react";
import {
  Text,
  TouchableOpacity,
  Appearance,
  View,
  StyleSheet,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Black } from "./colors";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export function Headers({
  title,
  isBack,
  onPress,
  linearViewStyle,
  titleStyle,
}) {
  return (
    <View>
      <TouchableOpacity style={{ flexDirection: "row" }}
      onPress={() => isBack? onPress():null}
      >
        {isBack && (
          <TouchableOpacity
            style={{ position: "absolute", left: wp(6),width:RFPercentage(10) }}
            
          >
            <Ionicons
              style={styles.icon}
              color={"black"}
              name="arrow-back"
              size={wp(8)}
            />
          </TouchableOpacity>
        )}
        <Text style={[styles.mainTitle, titleStyle]}>{title}</Text>
      </TouchableOpacity>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#bcbcbc", "#000"]}
        style={[styles.linearStyle, linearViewStyle]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    color: Black,
    fontSize: RFValue(18),
    alignSelf: "center",
    textAlign: "center",
    flex: 1,
    // marginRight:wp(14)
  },
  linearStyle: {
    height: hp(1.3),
    width: wp(100),
    marginVertical: hp(2),
  },
});
