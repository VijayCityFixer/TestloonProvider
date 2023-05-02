import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { KellyGreen } from "../common/colors";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { CommonActions } from '@react-navigation/native';

const OrderConfirm = (props) => {
  useEffect(() => {
    props.navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    setTimeout(() => {
        props.navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                { name: 'Home' },
                ],
            })
          );
    }, 3000);
    return () =>
      props.navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
  }, [props.navigation]);
  return (
    <View style={{flex:1,backgroundColor:KellyGreen,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:RFPercentage(7)}}>Order</Text>
      <Text style={{fontSize:RFPercentage(7)}}>Confirm</Text>
    </View>
  );
};

export default OrderConfirm;
