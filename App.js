import React from 'react';
import { Text, View,Image } from 'react-native';
import firebase from 'firebase';
//import WelcomeScreen from './screen/WelcomeScreen';
import BalanceScreen from './screen/BalanceScreen';
import RegisterScreen from './screen/RegisterScreen';
//import RegisterScreen from './screen/RegisterScreen';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDaY9hbGQOr41ljQeZgX26NTd_SqKwH4oQ",
      authDomain: "studentloan-7fbce.firebaseapp.com",
      databaseURL: "https://studentloan-7fbce.firebaseio.com",
      projectId: "studentloan-7fbce",
      storageBucket: "studentloan-7fbce.appspot.com",
      messagingSenderId: "1016135551882"
    });
  }
  state = {
    currentScreen: "register"
  }
  switchScreen = (screen) => {
    this.setState({currentScreen: screen})
  }
  renderScreen = () =>{
    if(this.state.currentScreen === "register"){
      return(
        <RegisterScreen switchScreen={this.switchScreen}/>
      )
    }
    if(this.state.currentScreen === "balance"){
      return(
        <BalanceScreen switchScreen={this.switchScreen}/>
      )
    }
  }
  render() {
    return (
      <View style={{flex:1,
        alignItems:'center',
        justifyContent:'center'}}>
        {this.renderScreen()}
      </View>
    );
  }
}