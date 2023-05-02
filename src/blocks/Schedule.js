import {
  Button,
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import { Black, KellyGreen, White } from "../common/colors";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { logo } from "../assets/assets";
import LinearGradient from "react-native-linear-gradient";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Headers } from "../common/header";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { PlaceSilver } from "../common/colors";
import { Red } from "../common/colors";
import moment from "moment";
import { Dropdown } from "react-native-element-dropdown";

const Pickerdata = [
  { label: "2 guests", value: "2" },
  { label: "3 guests", value: "3" },
  { label: "4 guests", value: "4" },
  { label: "5 guests", value: "5" },
  { label: "6 or more guests", value: "6" },
];
const Eventdata = [
  { label: "Birthday Party", value: "Birthday" },
  { label: "Engagement Function", value: "Engagement" },
  { label: "Marriage Function", value: "Marriage" },
  { label: "Anniversary Function", value: "Anniversary" },
  { label: "Get To Gather", value: "G2G" },
  { label: "Relax party", value: "Relax" },
];

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ischeckinDatePickerVisible: false,
      ischeckoutDatePickerVisible: false,
      checkinDate: null,
      checkoutDate: null,
      checkinTime: null,
      checkoutTime: null,
      selectedGuests: "",
      SelectedEvent: "",
    };
  }

  render() {
    const showcheckinDatePicker = () => {
      this.setState({ ischeckinDatePickerVisible: true });
    };

    const hidecheckinDatePicker = () => {
      this.setState({ ischeckinDatePickerVisible: false });
    };

    const handlecheckinConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      hidecheckinDatePicker();
    };
    const showcheckoutDatePicker = () => {
      this.setState({ ischeckoutDatePickerVisible: true });
    };

    const hidecheckoutDatePicker = () => {
      this.setState({ ischeckoutDatePickerVisible: false });
    };

    const handlecheckoutConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      hidecheckoutDatePicker();
    };

    const {
      ischeckinDatePickerVisible,
      ischeckoutDatePickerVisible,
      checkinDate,
      checkoutDate,
      checkinTime,
      checkoutTime,
      selectedGuests,
      SelectedEvent,
    } = this.state;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: KellyGreen }}>
        <Image style={styles.logoImg} source={logo} />

        <View
          style={{
            // paddingBottom:RFPercentage(10),
            marginTop: RFPercentage(2),
            flex: 1,
            backgroundColor: White,
            borderTopLeftRadius: RFPercentage(7),
            borderTopRightRadius: RFPercentage(7),
          }}
        >
          <View style={{ marginTop: RFPercentage(2) }}>
            <Headers
              onPress={() => this.props.navigation.goBack()}
              isBack={true}
              title={"Schedule"}
            />
          </View>

          <View
            style={{
              marginTop: RFPercentage(4),
              paddingBottom: RFPercentage(5),
            }}
          >
            <Text
              style={{
                color: Black,
                fontSize: RFValue(15),
                fontWeight: Platform.OS == "ios" ? "500" : "bold",
                paddingLeft: RFPercentage(3),
              }}
            >
              Date of Stay
            </Text>
            <View
              style={{
                borderWidth: 1,
                height: RFPercentage(20),
                width: RFPercentage(45),
                borderRadius: RFValue(10),
                paddingHorizontal: RFPercentage(2),
                paddingTop: RFPercentage(2),
                marginTop: RFPercentage(2),
                alignSelf: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  height: RFPercentage(15),
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: RFPercentage(35),
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          color: Black,
                          fontSize: RFValue(15),
                          fontWeight: "bold",
                        }}
                      >
                        {checkinDate != null
                          ? checkinDate
                          : "Select Date & Time"}
                      </Text>
                      <Text
                        style={{
                          color: PlaceSilver,
                          fontSize: RFValue(12),
                          fontWeight: "bold",
                          paddingLeft: RFPercentage(2),
                        }}
                      >
                        {checkinTime != null ? checkinTime : ""}
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        style={{ paddingTop: RFPercentage(1) }}
                        onPress={showcheckinDatePicker}
                      >
                        <Text
                          style={{
                            color: Red,
                            fontSize: RFValue(15),
                            fontWeight: "500",
                            paddingLeft: RFPercentage(2),
                          }}
                        >
                          Edit
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: RFPercentage(35),
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          color: Black,
                          fontSize: RFValue(15),
                          fontWeight: "bold",
                        }}
                      >
                        {checkoutDate != null
                          ? checkoutDate
                          : "Select Date & Time"}
                      </Text>
                      <Text
                        style={{
                          color: PlaceSilver,
                          fontSize: RFValue(12),
                          fontWeight: "bold",
                          paddingLeft: RFPercentage(2),
                        }}
                      >
                        {checkoutTime != null ? checkoutTime : ""}
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        style={{ paddingTop: RFPercentage(1) }}
                        onPress={showcheckoutDatePicker}
                      >
                        <Text
                          style={{
                            color: Red,
                            fontSize: RFValue(15),
                            fontWeight: "500",
                            paddingLeft: RFPercentage(2),
                          }}
                        >
                          Edit
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <DateTimePickerModal
                  isVisible={ischeckinDatePickerVisible}
                  mode="date"
                  onConfirm={handlecheckinConfirm}
                  onCancel={hidecheckinDatePicker}
                />
                <DateTimePickerModal
                  isVisible={ischeckoutDatePickerVisible}
                  mode="date"
                  onConfirm={handlecheckoutConfirm}
                  onCancel={hidecheckoutDatePicker}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              alignItems: "flex-start",
              paddingBottom: RFPercentage(1),
              paddingLeft: RFPercentage(3),
            }}
          >
            <Text
              style={{
                color: Black,
                fontSize: RFValue(15),
                fontWeight: Platform.OS == "ios" ? "500" : "bold",
              }}
            >
              Guests
            </Text>
            <View
              style={{
                paddingTop: RFPercentage(2),
              }}
            >
              <Dropdown
                style={[styles.dropdown]}
                data={Pickerdata}
                selectedTextStyle={styles.selectedTextStyle}
                maxHeight={300}
                labelField="label"
                valueField="value"
                value={"1"}
                placeholder={"Select Guests"}
                itemTextStyle={{
                  color: Black,
                }}
                onChange={(item) => {
                  this.setState({ selectedGuests: item.value }),
                    console.log(item.value);
                }}
                renderLeftIcon={() => null}
                containerStyle={{ paddingBottom: RFPercentage(8) }}
              />
            </View>
          </View>

          <View
            style={{
              alignItems: "flex-start",
              paddingLeft: RFPercentage(3),
              marginTop: RFPercentage(2),
            }}
          >
            <Text
              style={{
                color: Black,
                fontSize: RFValue(15),
                fontWeight: Platform.OS == "ios" ? "500" : "bold",
              }}
            >
              Event Details
            </Text>
            <View
              style={{
                paddingTop: RFPercentage(2),
              }}
            >
              <Dropdown
                style={[styles.dropdown]}
                data={Eventdata}
                selectedTextStyle={styles.selectedTextStyle}
                maxHeight={300}
                labelField="label"
                valueField="value"
                value={"1"}
                placeholder={"Select Event"}
                itemTextStyle={{
                  color: Black,
                }}
                onChange={(item) => {
                  this.setState({ SelectedEvent: item.value }),
                    console.log(item.value);
                }}
                renderLeftIcon={() => null}
              />
            </View>
          </View>
          <View style={{ alignItems: "center", marginTop: RFPercentage(10) }}>
            <TouchableOpacity
              style={{
                height: RFPercentage(7),
                marginBottom: RFPercentage(10),
                width: RFPercentage(25),
                borderRadius: RFValue(15),
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: KellyGreen,
              }}
              onPress={() => this.props.navigation.navigate("OrderSummary")}
            >
              <Text
                style={{
                  fontSize: RFValue(18),
                  color: White,
                  fontWeight: "bold",
                }}
              >
                Proceed
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  logoImg: {
    height: RFPercentage(7),
    width: RFPercentage(7),
    marginTop: RFPercentage(8),
    alignSelf: "center",
  },
  linearStyle: {
    height: hp(1.3),
    width: wp(100),
    marginVertical: hp(2),
  },
  dropdown: {
    height: RFPercentage(7),
    width: RFPercentage(45),
    borderRadius: RFValue(10),
    borderWidth: 1,
    paddingHorizontal: wp(3),
  },
  selectedTextStyle: {
    color: Black,
    fontSize: RFValue(16),
  },
});
