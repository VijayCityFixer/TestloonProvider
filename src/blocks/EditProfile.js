import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { Black, KellyGreen, PlaceSilver, Red, White } from '../common/colors';
import { logo, user } from '../assets/assets';
import { Headers } from '../common/header';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { InputText } from '../common/txtinput';
import { Button} from '../common/Button';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };
  }
  render() {
    return (
      <ScrollView>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: KellyGreen,
        }}>
        <Image style={styles.logoStyle} source={logo} />
        <View style={styles.container}>
          <Headers
            onPress={() => this.props.navigation.goBack()}
            isBack={true}
            title={'Edit Profile'}
          />
          <View style={styles.editBtnView}>
            <Image source={user} style={{height: hp(10), width: hp(10)}} />
            <TouchableOpacity
              style={styles.editBtn}
              onPress={() => this.props.navigation.goBack()}>
              <MaterialIcons color={'white'} name="edit" size={wp(5)} />
            </TouchableOpacity>
          </View>
          <InputText
            placeholder={'Enter your first name'}
            inputstyle={{fontSize: RFValue(16)}}
            placeholderTextColor={
             PlaceSilver
            }
            inputtextstyle={{
              marginBottom: hp(4),
              marginLeft: wp(12),
              marginRight: wp(6),
            }}
            onChangeText={t => this.setState({firstName: t})}
          />
          <InputText
            placeholder={'Enter your last name'}
            inputstyle={{fontSize: RFValue(16)}}
            placeholderTextColor={
              PlaceSilver
            }
            inputtextstyle={{
              marginBottom: hp(3),
              marginLeft: wp(12),
              marginRight: wp(6),
            }}
            onChangeText={t => this.setState({lastName: t})}
          />
         
          <Button
            style={{
              width: wp(45),
              marginBottom: hp(4),
              alignSelf: 'center',
              marginVertical: hp(4),
            }}
            title={'Update'}
          />
        </View>
      </SafeAreaView>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    marginLeft: wp(6),
  },
  logoStyle: {
    height: hp(5),
    width: hp(5),
    alignSelf: 'center',
    marginVertical: hp(2),
  },
  container: {
    backgroundColor: White,
    flex: 1,
    borderTopLeftRadius: hp(5),
    borderTopRightRadius: hp(5),
    paddingTop: hp(2),
    paddingBottom:RFPercentage(20)
  },
  titleText: {
    color: Black,
    fontSize:RFValue(18),
    // fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
    alignSelf: 'center',
    width: wp(80),
    textAlign: 'center',
  },
  editText: {
    color: Red,
    fontSize: RFValue(12),
    // fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
  },
  normalText: {
    color: Black,
    fontSize: RFValue(12),
    // fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
    width: wp(65),
    paddingHorizontal: wp(3),
  },
  detailsView: {
    borderWidth: 1,
    borderRadius: hp(2),
    paddingVertical: hp(2),
    paddingLeft: wp(5),
    marginBottom: hp(2),
  },
  headerView: {
    flexDirection: 'row',
    width: wp(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: Black,
    fontSize: RFValue(20),
    // fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
    textAlign: 'center',
    paddingVertical: hp(1),
  },
  linearStyle: {
    height: hp(1.3),
    width: wp(100),
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(95),
    paddingHorizontal: wp(5),
    alignItems: 'center',
    paddingVertical: hp(1),
  },
  editBtn: {
    position: 'absolute',
    bottom: 5,
    right: 0,
    borderRadius: hp(2),
    backgroundColor: KellyGreen,
    padding: 3,
  },
  editBtnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: hp(4),
  },
});