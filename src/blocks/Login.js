import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
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

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      username:'',
      password:'',
    }
  }
  render() {
    return (
      <View style={{flex:1,backgroundColor:KellyGreen, alignItems: 'center',justifyContent: 'center',}}>
        <MyStatusBar backgroundColor={KellyGreen} barStyle="light-content" />
        <SafeAreaView>
        <View style={styles.mainView}>
        <Image style={styles.logoImg} source={logo} />
        <View style={{marginTop:RFPercentage(4),alignItems:'center'}}>
        <InputText
            placeholder={'Enter Username'}
            inputstyle={{fontSize:RFValue(16)}}
            placeholderTextColor={
              PlaceSilver
            }
            inputtextstyle={{
              marginBottom: hp(1),
              width: wp(80),
            }}
            onChangeText={t => this.setState({username: t})}
          />
          </View>
        <View style={{marginTop:RFPercentage(3),alignItems:'center'}}>
        <InputText
            placeholder={'Enter Password'}
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

          <View style={{alignItems:'center'}}>
          <Button
            onPress={() =>
              this.props.navigation.push('BottomTab', {screen: 'HomeStack'})
            }
            style={{width: wp(55), marginBottom: hp(4), marginTop: hp(6),height:hp(6)}}
            title={'Login'}
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
    height:RFPercentage(60)
  },
  logoImg: { 
    height: RFPercentage(10),
     width: RFPercentage(10) ,
     marginTop:RFPercentage(4),
     alignSelf:'center'
    },
})