import { FlatList, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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

export default class OrderSummary extends Component {
  render() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: KellyGreen }}>
          <Image style={styles.logoImg} source={logo} />
  
          <View
            style={{
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
                title={"Order Summary"}
              />
            </View>
  
            <View style={{marginTop:RFPercentage(4),alignItems:'center',paddingBottom:RFPercentage(10)}}>
                <Text style={{color:Black,fontSize:RFValue(15),fontWeight:Platform.OS=="ios"?'500':'bold'}}>Booking Details</Text>
                <View
                    style={{
                      borderWidth: 1,
                      height: RFPercentage(20),
                      width: RFPercentage(45),
                      borderRadius: RFValue(10),
                    paddingHorizontal: RFPercentage(2),
                      paddingTop: RFPercentage(2),
                      marginTop:RFPercentage(2)
                    }}
                   >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "column",
                          height: RFPercentage(15),
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={{fontSize:RFValue(13),color:Black}}>Name</Text>
                        <Text style={{fontSize:RFValue(13),color:Black}}>Contact info</Text>
                        <Text style={{fontSize:RFValue(13),color:Black}}>Email</Text>
                        
                      </View>

                      <View
                        style={{
                          flexDirection: "column",
                          height: RFPercentage(15),
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={{fontSize:RFValue(13),color:Black}}>:</Text>
                        <Text style={{fontSize:RFValue(13),color:Black}}>:</Text>
                        <Text style={{fontSize:RFValue(13),color:Black}}>:</Text>
                       
                      </View>

                      <View
                        style={{
                          flexDirection: "column",
                          height: RFPercentage(15),
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={{fontSize:RFValue(13),color:Black}}>Vijay Sahani</Text>
                        <Text style={{fontSize:RFValue(13),color:Black}}>8980532603</Text>
                        <Text style={{fontSize:RFValue(13),color:Black}}>vijayksahani.vs@gmail.com</Text>
                        
                      </View>
                    </View>
                </View>
            </View>
            <View style={{alignItems:'center',paddingBottom:RFPercentage(3)}}>
                <Text style={{color:Black,fontSize:RFValue(15),fontWeight:Platform.OS=="ios"?'500':'bold'}}>Place & Stay</Text>
                <View
                    style={{
                      borderWidth: 1,
                      height: RFPercentage(20),
                      width: RFPercentage(45),
                      borderRadius: RFValue(10),
                      marginBottom: RFPercentage(5),
                      paddingHorizontal: RFPercentage(2),
                      paddingTop: RFPercentage(2),
                      marginTop:RFPercentage(2)
                    }}
                   >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "column",
                          height: RFPercentage(15),
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={{fontSize:RFValue(13),color:Black}}>Venue</Text>
                        <Text style={{fontSize:RFValue(13),color:Black}}>Check - In</Text>
                        <Text style={{fontSize:RFValue(13),color:Black}}>Check - Out</Text>
                        <Text style={{fontSize:RFValue(13),color:Black}}>Guests</Text>
                        
                      </View>

                      <View
                        style={{
                          flexDirection: "column",
                          height: RFPercentage(15),
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={{fontSize:RFValue(13),color:Black}}>:</Text>
                        <Text style={{fontSize:RFValue(13),color:Black}}>:</Text>
                        <Text style={{fontSize:RFValue(13),color:Black}}>:</Text>
                        <Text style={{fontSize:RFValue(13),color:Black}}>:</Text>
                       
                      </View>

                      <View
                        style={{
                          flexDirection: "column",
                          height: RFPercentage(15),
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={{fontSize:RFValue(13),color:Black}}>Rajwadi Party Plot</Text>
                        <Text style={{fontSize:RFValue(13),color:Black}}>22-10-2023</Text>
                        <Text style={{fontSize:RFValue(13),color:Black}}>23-10-2023</Text>
                        <Text style={{fontSize:RFValue(13),color:Black}}>5 Guests</Text>
                        
                      </View>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: "center", marginTop: RFPercentage(2) }}>
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
              onPress={() => this.props.navigation.navigate("OrderConfirm")}
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
  });