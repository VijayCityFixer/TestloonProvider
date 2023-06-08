import React, {Component, Profiler} from 'react';
import {
  View,
  Appearance,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {logo, Hotal, user} from '../assets/assets';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Headers} from '../common/header';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Black, KellyGreen, Red, White } from '../common/colors';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: KellyGreen,
        }}>
        <Image style={styles.logoStyle} source={logo} />
        <View style={styles.container}>
          <Headers title={'Profile'} />

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={user}
              style={{height: wp(15), width: wp(15), marginStart: wp(5)}}
            />
            <View>
              <Text style={styles.normalText}>Vishal Parmar</Text>
              <Text style={styles.normalText}>8460300912</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('EditProfile')}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#bcbcbc', '#000']}
            style={[styles.linearStyle]}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ChangePassword')}>
            <View style={styles.btnView}>
              <Text style={styles.normalText}>Change password</Text>
              <FontAwesome5
                style={styles.icon}
                color={'black'}
                name="arrow-right"
                size={30}
              />
            </View>
          </TouchableOpacity>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#bcbcbc', '#000']}
            style={[styles.linearStyle, {height: hp(0.5)}]}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ChangeNumber')}>
            <View style={styles.btnView}>
              <Text style={styles.normalText}>Change number</Text>
              <FontAwesome5
                style={styles.icon}
                color={'black'}
                name="arrow-right"
                size={30}
              />
            </View>
          </TouchableOpacity>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#bcbcbc', '#000']}
            style={[styles.linearStyle, {height: hp(0.5)}]}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <View style={styles.btnView}>
              <Text style={styles.editText}>Logout</Text>
              <FontAwesome5
                style={styles.icon}
                color={'black'}
                name="arrow-right"
                size={30}
              />
            </View>
          </TouchableOpacity>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#bcbcbc', '#000']}
            style={[styles.linearStyle, {height: hp(0.5)}]}
          />
        
         
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    marginLeft: wp(6),
  },
  logoStyle: {
    height: hp(7),
    width: hp(7),
    alignSelf: 'center',
    marginVertical: hp(2),
  },
  container: {
    backgroundColor:White,
    flex: 1,
    borderTopLeftRadius: hp(5),
    borderTopRightRadius: hp(5),
    paddingTop: hp(2),
  },
  titleText: {
    color: Black,
    fontSize: RFValue(18),
    // fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
    alignSelf: 'center',
    width: wp(80),
    textAlign: 'center',
  },
  editText: {
    color: Red,
    fontSize: RFValue(12),
    paddingHorizontal: wp(3)
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
    color:Black,
    fontSize: RFValue(20),
    // fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
    textAlign: 'center',
    paddingVertical: hp(1),
  },
  linearStyle: {
    height: hp(1.3),
    width: wp(100),
    marginVertical: hp(2),
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(95),
    paddingHorizontal: wp(5),
    alignItems: 'center',
    paddingVertical: hp(1),
  },
});