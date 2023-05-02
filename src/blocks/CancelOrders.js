import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
import DateRangePicker from "react-native-daterange-picker";
import moment from "moment";

export default class CancelOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1,
      viewData: [
        {
          id: 1,
          orderid: 101,
          name: "Sumit Patel",
          venue: " Rajwadi party plot",
          status: "Cancelled",
        },
        {
          id: 2,
          orderid: 1001,
          name: "Vishal Patel",
          venue: " Rajwadi party plot",
          status: "Cancelled",
        },
        {
          id: 3,
          orderid: 201,
          name: "Vijay Patel",
          venue: " Rajwadi party plot",
          status: "Cancelled",
        },
        {
          id: 4,
          orderid: 105,
          name: "Harshit Patel",
          venue: " Rajwadi party plot",
          status: "Cancelled",
        },
      ],
      isCustomActive: false,
      isReadyforDisplay: false,
      startDate: null,
      endDate: null,
      today: moment(),
      week:moment().week(),
      month:moment().month(),
      year:moment().year(),
      weekFirstDay:null,
      weekLastDay:null,
      monthFirstDay:null,
      monthLastDay:null,
      yearFirstDay:null,
      yearLastDay:null
    };
  }
  componentDidMount(){
    const {week,month,year} = this.state
    firstDate = moment(moment().day("Sunday").week(week)).format('DD/MM/yyyy')
    lastDate = moment(moment().day("Saturday").week(week)).format('DD/MM/yyyy')
    monthfirstDate = moment().startOf('month').format('DD/MM/YYYY');
    monthlastDate = moment().endOf('month').format('DD/MM/YYYY');
    yearfirstDate = moment().startOf('year').format('DD/MM/YYYY');
    yearlastDate = moment().endOf('year').format('DD/MM/YYYY');
    this.setState({
      weekFirstDay:firstDate,
      weekLastDay:lastDate,
      monthFirstDay:monthfirstDate,
      monthLastDay:monthlastDate,
      yearFirstDay:yearfirstDate,
      yearLastDay:yearlastDate
    })
  }
  setDates = (dates) => {
    this.setState({
      ...dates,
    });
    if(dates?.endDate!=null){
      this.setState({isCustomActive:false})
    }
  };

  render() {
    const { startDate, endDate, today, isCustomActive,weekFirstDay,weekLastDay,selectedTab,monthFirstDay,monthLastDay,yearFirstDay,yearLastDay } = this.state;
    return (
      <ScrollView style={{ flex: 1, backgroundColor: KellyGreen }}>
        {this.state.isCustomActive && !this.state.isReadyforDisplay ? (
            <View
              style={{
                backgroundColor: "#fff",
                alignItems: "center",
                }}
            >
              <DateRangePicker
                onChange={this.setDates}
                endDate={endDate}
                startDate={startDate}
                displayedDate={today}
                range
                open={isCustomActive}
              >
                <Text>Click me!</Text>
              </DateRangePicker>
            </View>
          ) : (
            <>
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
          <View style={{ marginTop: RFPercentage(2)}}>
            <Headers
              onPress={() => this.props.navigation.goBack()}
              isBack={true}
              title={"Cancelled Orders"}
              titleStyle={{color:Red}}
            />
          </View>
          
            <View
              style={{
                marginTop: RFPercentage(5),
                alignItems: "center",
                paddingBottom: RFPercentage(10),
              }}
            >
              <View style={{ borderWidth: 1, flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderRightWidth: 0,
                    paddingHorizontal: RFPercentage(1.5),
                    paddingVertical: RFPercentage(1),
                    backgroundColor:
                      this.state.selectedTab == 1 ? KellyGreen : White,
                  }}
                  onPress={() => this.setState({ selectedTab: 1 })}
                >
                  <Text>This week</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderRightWidth: 0,
                    paddingHorizontal: RFPercentage(1.5),
                    paddingVertical: RFPercentage(1),
                    backgroundColor:
                      this.state.selectedTab == 2 ? KellyGreen : White,
                  }}
                  onPress={() => this.setState({ selectedTab: 2 })}
                >
                  <Text>This Month</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderRightWidth: 0,
                    paddingHorizontal: RFPercentage(1.5),
                    paddingVertical: RFPercentage(1),
                    backgroundColor:
                      this.state.selectedTab == 3 ? KellyGreen : White,
                  }}
                  onPress={() => this.setState({ selectedTab: 3 })}
                >
                  <Text>This Year</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    paddingHorizontal: RFPercentage(1.5),
                    paddingVertical: RFPercentage(1),
                    backgroundColor:
                      this.state.selectedTab == 4 ? KellyGreen : White,
                  }}
                  onPress={() =>
                    this.setState({ selectedTab: 4, isCustomActive: true })
                  }
                >
                  <Text>Custom</Text>
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: RFPercentage(2) }}>
                {
                  selectedTab==1?
                  <Text style={{color:Black,fontWeight:'bold'}}>{weekFirstDay} To {weekLastDay}</Text>
                  :selectedTab==2?
                  <Text style={{color:Black,fontWeight:'bold'}}>{monthFirstDay} To {monthLastDay}</Text>
                  :selectedTab==3?
                  <Text style={{color:Black,fontWeight:'bold'}}>{yearFirstDay} To {yearLastDay}</Text>
                  :
                  <Text style={{color:Black,fontWeight:'bold'}}>{moment(startDate).format('DD/MM/yyyy')} To {moment(endDate).format('DD/MM/yyyy')}</Text>
                }
              </View>
              <View style={{ marginTop: RFPercentage(4) }}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={this.state.viewData}
                  renderItem={(item) => {
                    return (
                      <TouchableOpacity
                        style={{
                          borderWidth: 1,
                          width: RFPercentage(45),
                          height: RFPercentage(18),
                          marginBottom: RFPercentage(3),
                          borderRadius: RFValue(15),
                          paddingHorizontal: RFPercentage(2),
                          paddingTop: RFPercentage(2),
                        }}
                        onPress={()=>this.props.navigation.navigate("CancelOrdersDetails")}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <View style={{ alignItems: "center" }}>
                            <Text>Order id</Text>
                            <Text>{item?.item?.orderid}</Text>
                          </View>
                          <Text
                            style={{
                              color:
                                item?.item?.status == "Completed"
                                  ? KellyGreen
                                  : item?.item?.status == "Cancelled"
                                  ? Red
                                  : Black,
                              fontWeight: "500",
                            }}
                          >
                            {item?.item?.status}
                          </Text>
                          <View>
                            <Text>Name</Text>
                          </View>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop: RFPercentage(2),
                          }}
                        >
                          <Text>Venue</Text>
                          <Text>:</Text>
                          <Text>{item?.item?.venue}</Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                  style={{ marginBottom: RFPercentage(20) }}
                />
              </View>
            </View>
        </View>
        </>
          )}
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
