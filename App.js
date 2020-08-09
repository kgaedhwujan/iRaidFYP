import React,{Component} from 'react';
import{StyleSheet, StatusBar,Text, View,Image,Button,TextInput,TouchableOpacity} from 'react-native';
import {createBottomTabNavigator,createSwitchNavigator,createAppContainer,createDrawerNavigator,createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/screens/Home'
import Ride from './src/screens/Ride'
import History from './src/screens/History'
import Inbox from './src/screens/Inbox'
import Account from './src/screens/Account'
import Map from './src/screens/Map';
import Carpool from './src/screens/Carpool';
import BookRide from './src/screens/BookRide';
import BottomDrawer from 'rn-bottom-drawer';
import Emergency from './src/screens/Emergency';
import HelpCentre from './src/screens/HelpCentre';
import OfferRideOptions from './src/screens/OfferRideOptions';
import OfferRideOptions2 from './src/screens/OfferRideOptions2';
import AddModal from './src/screens/AddModal';
import modal from './src/screens/modal';
import OfferRide from './src/screens/OfferRide';
import DatePicker from './src/screens/DatePicker';
import Timepicker from './src/screens/Timepicker';
import Profile from './src/screens/Profile';
import LostnFound from './src/screens/LostnFound';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Invoice from './src/screens/Invoice';
import  List  from "./src/screens/List";
import  Promotion  from "./src/screens/Promotion";
import  ChatHome from "./src/screens/ChatHome";
import  ChatwDriver from "./src/screens/ChatwDriver";
import  Ongoing from "./src/screens/Ongoing";
import  Past from "./src/screens/Past";
import  ChatGifted from "./src/screens/ChatGifted";









 class App extends Component {
  render() {
    return (<AppContainer />);
  }
}
export default App;

class WelcomeScreen extends Component {
  render(){
    return(
     

      <View style={styles.container}>    
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text style={{color: 'white',  fontSize: 45,textAlign:'center',letterSpacing:5,  fontWeight: '800'}}>i-RAID</Text>
      <Text></Text>
      <Text></Text>

      <View style={{height:50}}></View>

      <View style={{borderRadius:40,height:200,width:300,backgroundColor:'white',elevation:40}}>
<View style={{height:50}}/>
                <Text style={{color: 'black',  fontSize: 18,textAlign:'center', fontWeight: '800'}}>Ridesharing Apps for IIUM District</Text>
                <View style={{height:50}}/>

      <Button style={{ width: 550, backgroundColor: '#FF7F50', borderRadius: 25, marginVertical: 10, paddingVertical: 12 }}
          title="START NOW"
          color="#FF7F50"
          width= '50'
          borderRadius= '25'
          marginVertical= '10' 
          paddingVertical= '12'
          onPress={() => this.props.navigation.navigate('Login')}
        />
</View>
  </View>
     
    );
  }
}



const BottomTabNavigator = createBottomTabNavigator({
Home:{
  screen:Home,
  navigationOptions:{
    tabBarLabel:'HOME',
    tabBarIcon: ({tintColor}) =>(
      <Icon name="md-home" color={tintColor} size={24}/>
    )
  }

},
History:{
  screen:History,
  navigationOptions:{
    tabBarLabel:'JOURNEY',
    tabBarIcon: ({tintColor}) =>(
      <Icon name="md-list-box" color={tintColor} size={24}/>
    )
  }
},
Inbox:{
  screen:Inbox,
  navigationOptions:{
    tabBarLabel:'CHAT',
    tabBarIcon: ({tintColor}) =>(
      <Icon name="md-chatboxes" color={tintColor} size={24}/>
    )
  }
},
Account:{
  screen:Account,
  navigationOptions:{
    tabBarLabel:'ACCOUNT',
    tabBarIcon: ({tintColor}) =>(
      <Icon name="md-person" color={tintColor} size={24}/>
    )
  }
}
},{
  tabBarOptions:{
    activeTintColor:'orange',
    inactiveTintColor:'grey',
    style:{
      backgroundColor:'white',
      borderTopWidth:0,
      elevation:5
    }
  }
});
const AppStack = createStackNavigator({
  ChatHome:ChatHome,
  ChatwDriver:ChatwDriver,
  

});



const StackNavigator = createStackNavigator({
    BottomTabNavigator: BottomTabNavigator,
  
});

/*const AppDrawerNavigation = createDrawerNavigator({
  Dashboard:{
    screen: StackNavigator
  }
});*/

//use stacknavigator in(AccountS: screen) or these below to navigate back button from carpool to home or emergency or any pages in account to account page
/*let HomeS = createStackNavigator({ Home });*/
/*let AccountS = createStackNavigator({ Account });*/


const AppSwitchNavigator = createSwitchNavigator(
  {
    Welcome:{screen:WelcomeScreen},
    Login:{screen:Login},
    Register:{screen:Register},
    HomeS:{screen:BottomTabNavigator},
     //Dashboard:{screen:AppDrawerNavigation},
    Carpool: {screen:Carpool},
    BookRide:{screen:BookRide},
    Emergency:{screen:Emergency},
    HelpCentre:{screen:HelpCentre},
    AccountS:{screen:StackNavigator},
    Profile:{screen:Profile},
    LostnFound:{screen:LostnFound},
    OfferRideOptions:{screen:OfferRideOptions},
    OfferRideOptions2:{screen:OfferRideOptions2},
    AddModal:{screen:AddModal},
    modal:{screen:modal},
    Map:{screen:Map},
    OfferRide:{screen:OfferRide},
    DatePicker:{screen:DatePicker},
    Timepicker:{screen:Timepicker},
    Invoice:{screen:Invoice},
    List:{screen:List},
    Ride:{screen:Ride},
    Promotion:{screen:Promotion},  
    Ongoing:{screen:Ongoing},   
    Past:{screen:Past},   
    ChatGifted:{screen:ChatGifted},   

  App:AppStack,
    


    
  }
  
  );

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container:{
    height:470,
     backgroundColor:'#FF7F50',
     borderBottomLeftRadius:40,
     borderBottomRightRadius:40,
      alignItems:'center',
      justifyContent:'center'
  },
  input: {
    width: 300,
    backgroundColor: '#eeeeee', 
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#002f6c',
    marginVertical: 10
},
button: {
    width: 300,
    backgroundColor: '#FBCEB1',
    borderRadius: 25,
    marginVertical: 30,
    paddingVertical: 12
},
buttontext: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
},
  signupTextCont: {
  
  justifyContent: 'center',
  alignItems: 'flex-end',

  flexDirection: 'row',
},
signupText: {
  color: '#000000', 
  fontSize:16,
},
signupButton: {
    color: '#FBCEB1',
    fontSize:16,
    fontWeight: '500',
}
  });
  