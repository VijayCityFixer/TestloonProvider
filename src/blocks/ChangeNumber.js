import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { KellyGreen, PlaceSilver, White } from '../common/colors'
import { MyStatusBar } from '../common/Statusbar'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { logo } from '../assets/assets'
import { InputText } from '../common/txtinput'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Button } from '../common/Button'
import Ionicons from "react-native-vector-icons/Ionicons";
export default class ChangeNumber extends Component {
  constructor(props){
    super(props)
    this.state={
      current:'',
      password:'',
    }
  }
  render() {
    return (
      <View style={{flex:1,backgroundColor:KellyGreen, alignItems: 'center',justifyContent: 'center',}}>
        <MyStatusBar backgroundColor={KellyGreen} barStyle="light-content" />
        <SafeAreaView>
        <View style={styles.mainView}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'60%',paddingLeft:RFPercentage(5),}}>
          <TouchableOpacity
          onPress={()=>this.props.navigation.goBack()}
          >
          <Ionicons
              style={styles.icon}
              color={"black"}
              name="arrow-back"
              size={wp(8)}
            />
            </TouchableOpacity>
          <Image style={styles.logoImg} source={logo} />
          </View>
      
        <View style={{marginTop:RFPercentage(13),alignItems:'center'}}>
        <InputText
            placeholder={'Enter your number'}
            inputstyle={{fontSize:RFValue(16)}}
            placeholderTextColor={
              PlaceSilver
            }
            inputtextstyle={{
              marginBottom: hp(1),
              width: wp(80),
            }}
            onChangeText={t => this.setState({password: t})}
            secureTextEntry
          />
          </View>

          <View style={{alignItems:'center',marginTop:RFPercentage(5)}}>
          <Button
            onPress={() =>
              this.props.navigation.navigate('VerifyOTP')
            }
            style={{width: wp(55), marginBottom: hp(4), marginTop: hp(6),height:hp(6)}}
            title={'Next'}
          />
          </View>
        </View>
        </SafeAreaView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  mainView: {
    width: RFPercentage(52),
    backgroundColor: White,
    borderTopRightRadius: RFValue(160),
    borderTopLeftRadius: RFValue(50),
    borderBottomLeftRadius: RFValue(160),
    borderBottomRightRadius: RFValue(0),
    height:RFPercentage(70)
  },
  logoImg: { 
    height: RFPercentage(10),
     width: RFPercentage(10) ,
     marginTop:RFPercentage(4),
     alignSelf:'center'
    },
})