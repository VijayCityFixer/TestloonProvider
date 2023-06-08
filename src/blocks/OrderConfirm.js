import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { KellyGreen, White } from "../common/colors";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { CommonActions } from '@react-navigation/native';
import { confirmGif } from "../assets/assets";

const OrderConfirm = (props) => {
  useEffect(() => {
    props.navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    // setTimeout(() => {
    //     props.navigation.dispatch(
    //         CommonActions.reset({
    //           index: 1,
    //           routes: [
    //             { name: 'Home' },
    //             ],
    //         })
    //       );
    // }, 3000);
    return () =>
      props.navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
  }, [props.navigation]);
  return (
    <View style={{flex:1,backgroundColor:'#003241',alignItems:'center',justifyContent:'center'}}>
      <Image 
        source={confirmGif}  
        style={{width: RFPercentage(48), height: RFPercentage(48) }}
        resizeMode="cover"
    />
    <View style={{marginTop:RFPercentage(10)}}>
      <Text style={{fontSize:RFPercentage(7),color:White,fontWeight:'500'}}>  Order</Text>
      <Text style={{fontSize:RFPercentage(7),color:White,fontWeight:'500'}}>Confirm</Text>

    </View>
    </View>
  );
};

export default OrderConfirm;
