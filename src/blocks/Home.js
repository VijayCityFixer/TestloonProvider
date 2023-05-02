import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import { KellyGreen, White } from "../common/colors";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { logo } from "../assets/assets";
import LinearGradient from "react-native-linear-gradient";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Headers } from "../common/header";

const renderData =[
  {
    id:'1',
    title1:'New',
    title2:'arrival',
    bordercolor:'#FF0303',
    color:'#FFEDED',
    component:'Newarrival'
  },
  {
    id:'2',
    title1:'Total',
    title2:'Orders',
    bordercolor:'#FFD703',
    color:'#FFFCF1',
    component:'Totalorders'
  },
  {
    id:'3',
    title1:'Book',
    title2:'Slot',
    bordercolor:'#71E200',
    color:'#F6FFF1',
    component:'Schedule'
  },
  {
    id:'4',
    title1:'Revenue',
    title2:'',
    bordercolor:'#03CCB4',
    color:'#F1FFF8',
    component:'Revenue'
  },
  {
    id:'5',
    title1:'Pending',
    title2:'Orders',
    bordercolor:'#035FCC',
    color:'#F1FAFF',
    component:'Pendingorders'
  },
  {
    id:'6',
    title1:'Cancelled',
    title2:'Orders',
    bordercolor:'#CC03C4',
    color:'#FFF9FF',
    component:'Cancelorders'
  },
]
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: KellyGreen }}>
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
              isBack={false}
              title={"Dashboard"}
            />
          </View>

          <View style={{marginTop:RFPercentage(5),alignItems:'center',paddingBottom:RFPercentage(10)}}>
              <FlatList 
              data={renderData}
              renderItem={(item)=>{return(
                <TouchableOpacity style={{height:RFPercentage(17),borderWidth:1.5,width:RFPercentage(17),margin:RFPercentage(2),borderRadius:RFValue(15),borderColor:item?.item?.bordercolor,backgroundColor:item.item.color,alignItems:'center',justifyContent:'center'}}
                onPress={()=>this.props.navigation.navigate(item?.item?.component)}
                >   
                      <Text style={{fontSize:RFValue(19),fontStyle:'italic',fontWeight:'500'}}>{item?.item?.title1}</Text>
                      <Text style={{fontSize:RFValue(19),fontStyle:'italic',fontWeight:'500'}}>{item?.item?.title2}</Text>
                </TouchableOpacity>
              )}}
              numColumns={2}
              style={{flexWrap:'wrap',paddingBottom:RFPercentage(5)}}
              />
          </View>
        </View>
      </View>
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
