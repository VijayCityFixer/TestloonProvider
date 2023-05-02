import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import { Black, KellyGreen, Red, White } from "../common/colors";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { logo } from "../assets/assets";
import LinearGradient from "react-native-linear-gradient";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Headers } from "../common/header";

export default class PendingOrderDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Data: [
        {
          orderId: 1,
          name: 'Vishal Parmar',
          startDate: '28/11/2023',
          EndDate: '28/11/2023',
          venue: 'Rajwadi party plot',
          tokenamount :'$ 5000',
          Dueamount :'$ 5000',
          guest:'5 Guests',

        }
      ],
      };
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
              isBack={true}
              title={"Pending Order "}
              titleStyle={{color:Red}}
            />
          </View>

          <View style={{marginTop:RFPercentage(5),alignItems:'center',paddingBottom:RFPercentage(10)}}>
              <FlatList 
              data={this.state.Data}
              renderItem={(item)=>{
                return(
                  <TouchableOpacity style={{borderWidth:1,height:RFPercentage(60),width:RFPercentage(45),borderRadius:RFValue(15),marginBottom:RFPercentage(5),paddingHorizontal:RFPercentage(2),paddingTop:RFPercentage(2)}}
                  onPress={()=>this.props.navigation.navigate("NewArrivalDetails")}
                  >

                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>

                    <View style={{flexDirection:'column',height:RFPercentage(50),justifyContent:'space-between'}}>
                    <Text style={{fontSize:RFValue(13),color:Black}}>Order id</Text>
                    <Text style={{fontSize:RFValue(13),color:Black}}>Name</Text>
                    <Text style={{fontSize:RFValue(13),color:Black}}>Venue</Text>
                    <Text style={{fontSize:RFValue(13),color:Black}}>Check-in</Text>
                    <Text style={{fontSize:RFValue(13),color:Black}}>Check-out</Text>
                    <Text style={{fontSize:RFValue(13),color:Black}}>Guests</Text>
                    <Text style={{fontSize:RFValue(13),color:Black}}>Token amount</Text>
                    <Text style={{fontSize:RFValue(13),color:Black}}>Due amount</Text>
                    </View>
                    
                    <View style={{flexDirection:'column',height:RFPercentage(50),justifyContent:'space-between'}}>
                    <Text style={{fontSize:RFValue(13),color:Black}}>:</Text>
                    <Text style={{fontSize:RFValue(13),color:Black}}>:</Text>
                    <Text style={{fontSize:RFValue(13),color:Black}}>:</Text>
                    <Text style={{fontSize:RFValue(13),color:Black}}>:</Text>
                    <Text style={{fontSize:RFValue(13),color:Black}}>:</Text>
                    <Text style={{fontSize:RFValue(13),color:Black}}>:</Text>
                    <Text style={{fontSize:RFValue(13),color:Black}}>:</Text>
                    <Text style={{fontSize:RFValue(13),color:Black}}>:</Text>
                    </View>

                    <View style={{flexDirection:'column',height:RFPercentage(50),justifyContent:'space-between'}}>
                    <Text style={{fontSize:RFValue(13),color:Black}}>{item.item?.orderId}</Text>
                    <Text style={{fontSize:RFValue(13),color:Black}}>{item.item?.name}</Text>
                    <Text style={{fontSize:RFValue(13),color:KellyGreen}}>{item.item?.venue}</Text>
                    <Text style={{fontSize:RFValue(13),color:Black}}>{item.item?.startDate}</Text>
                    <Text style={{fontSize:RFValue(13),color:Black}}>{item.item?.EndDate}</Text>
                    <Text style={{fontSize:RFValue(13),color:Black}}>{item.item?.guest}</Text>
                    <Text style={{fontSize:RFValue(13),color:KellyGreen}}>{item.item?.tokenamount}</Text>
                    <Text style={{fontSize:RFValue(13),color:KellyGreen}}>{item.item?.Dueamount}</Text>
                    </View>

                    </View>
                      <Text style={{alignSelf:'flex-end',color:KellyGreen,marginTop:RFPercentage(2)}}>{item?.item?.tokenStatus}</Text>
                  </TouchableOpacity>
                )
              }}
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