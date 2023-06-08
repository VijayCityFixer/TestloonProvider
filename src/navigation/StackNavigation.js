import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../blocks/Home';
import SplashScreen from '../blocks/SplashScreen';
import Login from '../blocks/Login';
import { Black, PlaceSilver } from '../common/colors';
import { fontFamily } from '../common/Fonts';
import Profile from '../blocks/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/MaterialIcons';
import NewArrival from '../blocks/NewArrival';
import TotalOrder from '../blocks/TotalOrder';
import BookSlot from '../blocks/BookSlot';
import Revenue from '../blocks/Revenue';
import PendingOrders from '../blocks/PendingOrders';
import CancelOrders from '../blocks/CancelOrders';
import NewArrivalDetails from '../blocks/NewArrivalDetails';
import TotalOrderDetail from '../blocks/TotalOrderDetail';
import PendingOrderDetails from '../blocks/PendingOrderDetails';
import CancelOrdersDetails from '../blocks/CancelOrdersDetails';
import OrderSummary from '../blocks/OrderSummary';
import Schedule from '../blocks/Schedule';
import OrderConfirm from '../blocks/OrderConfirm';
import EditProfile from '../blocks/EditProfile';
import ChangePassword from '../blocks/ChangePassword';
import ChangeNumber from '../blocks/ChangeNumber';
import VerifyOTP from '../blocks/VerifyOTP';


const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="BottomTab" component={BottomTab} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

 const HomeStackNavigation=()=> {
  return (
    
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <HomeStack.Screen name="Newarrival" component={NewArrival} options={{headerShown:false}}/>
        <HomeStack.Screen name="Totalorders" component={TotalOrder} options={{headerShown:false}}/>
        <HomeStack.Screen name="TotalOrderDetail" component={TotalOrderDetail} options={{headerShown:false}}/>
        <HomeStack.Screen name="Bookslot" component={BookSlot} options={{headerShown:false}}/>
        <HomeStack.Screen name="Revenue" component={Revenue} options={{headerShown:false}}/>
        <HomeStack.Screen name="Pendingorders" component={PendingOrders} options={{headerShown:false}}/>
        <HomeStack.Screen name="PendingOrderDetails" component={PendingOrderDetails} options={{headerShown:false}}/>
        <HomeStack.Screen name="Cancelorders" component={CancelOrders} options={{headerShown:false}}/>
        <HomeStack.Screen name="CancelOrdersDetails" component={CancelOrdersDetails} options={{headerShown:false}}/>
        <HomeStack.Screen name="NewArrivalDetails" component={NewArrivalDetails} options={{headerShown:false}}/>
        <HomeStack.Screen name="OrderSummary" component={OrderSummary} options={{headerShown:false}}/>
        <HomeStack.Screen name="Schedule" component={Schedule} options={{headerShown:false}}/>
        <HomeStack.Screen name="OrderConfirm" component={OrderConfirm} options={{headerShown:false}}/>
        <HomeStack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}}/>
        
      </HomeStack.Navigator>
    
  );
}
 const ProfileStackNavigation=()=> {
  return (
    
      <ProfileStack.Navigator>
        
        <ProfileStack.Screen name="ProfileScreen" component={Profile} options={{headerShown:false}}/>
        <ProfileStack.Screen name="EditProfile" component={EditProfile} options={{headerShown:false}}/>
        <ProfileStack.Screen name="ChangePassword" component={ChangePassword} options={{headerShown:false}}/>
        <ProfileStack.Screen name="ChangeNumber" component={ChangeNumber} options={{headerShown:false}}/>
        <ProfileStack.Screen name="VerifyOTP" component={VerifyOTP} options={{headerShown:false}}/>
        
      </ProfileStack.Navigator>
    
  );
}

function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Black,
        tabBarInactiveTintColor: PlaceSilver,
        tabBarLabelStyle: {
          fontSize: RFValue(11),
          // fontFamily: fontFamily.RubikRegular,
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigation}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Entypo
              name="home"
              color={
                focused
                  ? Black
                  : PlaceSilver
              }
              size={RFValue(25)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigation}
        options={{
          headerShown: false,
          
          tabBarIcon: ({focused}) => (
            <Entypo
              name="user"
              color={
                focused
                  ? Black
                  : PlaceSilver
              }
              size={RFValue(25)}
            />
          ),
        }}
      />

     
    </Tab.Navigator>
  );
}