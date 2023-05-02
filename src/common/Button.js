import React from 'react';
import {
    StyleSheet,
    Text, 
    TouchableOpacity,
    
  } from "react-native";
import { KellyGreen, White } from './colors';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

export function Button({ onPress, title, style ,Txtstyle}) {
  return (
    <TouchableOpacity style={[styles.button,style ]} onPress={onPress}>
        <Text style={[{...styles.TxtTitle,...Txtstyle}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:KellyGreen,
      paddingVertical: wp(2.5),
      borderRadius: wp(2.6),
    },
    TxtTitle: {
      color:White,
      fontSize: RFValue(18),
      fontWeight:'bold'
    }
  });