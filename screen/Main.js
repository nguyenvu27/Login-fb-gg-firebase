import React from "react";
import { StyleSheet, Platform, Image, Text, View, LoginPage } from "react-native";
import Logo from "../assets/logo.png";
export default class Main extends React.Component {
  


  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
  
    };
   
  }
  static navigationOptions = {
    title: "Main",
    header: null
  };


  render() {
    return (
      <View style={styles.container}>
         <View style={styles.header}>
          <Image style={styles.img} source={Logo} />
    
        </View>
        <Text style={{fontSize:30, color:'red'}}>Hello </Text>
        {/* <Text>
        {this.state.signedIn ? (
          <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
        ) : (
          <LoginPage signIn={this.signIn} />
        )}
       </Text> */}
    
    
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 24,
    flexDirection: "column"
  },
  header: {
    backgroundColor: "#33CCFF",
    width: 900,
    height: 50,
    flexDirection: "row"
  },
  img: {
    marginTop: 15,
    width: 55,
    height: 20,
    marginLeft: 425
  },
});
