import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  input,
  Button,
  Alert,
  TouchableOpacity
} from "react-native";
import Logo from "../assets/logo.png";
import Cancel from "../assets/cancel.png";
import User from "../assets/user.png";
import Locked from "../assets/locked.png";
import Fb from "../assets/facebook.png";
import Google from "../assets/googleplus.png";
import {firebaseApp} from '../screen/firebase' ;


export default class Registration extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      email: '',
      password: ''
    }
  }

  static navigationOptions = {
    title: "Sign Up",
    header: null
  };
dangKy(){
  firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then(()=>{
    Alert.alert(
      'Thông báo',
      'Đăng ký thành công: \n' + this.state.email,
      [
      
       
        {text: 'OK', onPress: () => this.props.navigation.navigate("Login")},
      ],
      {cancelable: false},
    )
    this.setState({
      email: '',
      password: ''
    })
  })
  .catch(function(error) {
    Alert.alert(
      'Thông báo',
      'Đăng ký thất bại',
      [
        
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
       
      ],
      {cancelable: false},
    )
  });
}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.img} source={Logo} />
    
        </View>

        <Text style={styles.login}>ĐĂNG KÝ</Text>
     



        <View style={styles.input}>
          <View style={styles.user}>
            <Image style={styles.img_user} source={User} />
            <TextInput
              style={styles.user_text}
              placeholder="Tên đăng nhập"
              maxLength={30} onChangeText={(email) => this.setState({email})} 
              value={this.state.email}
            />
          </View>
          <View style={styles.user}>
            <Image style={styles.img_user} source={Locked} />
            <TextInput
              style={styles.user_text}
              placeholder="Mật khẩu"
              secureTextEntry={true}
              maxLength={30}  onChangeText={(password) => this.setState({password})} 
              value={this.state.password}
            />
          </View>

        

          <TouchableOpacity onPress={(()=> {this.dangKy()})}>
            <View style={styles.user_login}>
              <Text
                style={{ textAlign: "center", marginTop: 13, color: "#FFF" }}
              >
                ĐĂNG KÝ
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate("Login")}>
          <Text style={{ color: "blue", marginTop: 10,  }}>Đăng nhập</Text>
        </TouchableOpacity>

        <Text style={{ marginTop: 340 }}>&copy;GoApp</Text>
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
  img_cancel: {
    width: 30,
    height: 30,
    marginLeft: 130,
    marginTop: 11
  },

  login: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    marginTop: 15,
    color: "#00FFCC"
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  user: {
    flexDirection: "row",
    marginTop: 10,
    width: 300,
    height: 45,
    borderRadius: 10,
    borderColor: "#9999FF",
    borderWidth: 1
  },
  img_user: {
    marginTop: 5,
    width: 25,
    height: 30,
    marginLeft: 3
  },
  user_text: {
    marginTop: 5,
    width: 250,
    height: 30,
    marginLeft: 10
  },

  user_login: {
    marginTop: 10,
    width: 300,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#33CCFF",
    borderWidth: 1
  },
  text: {
    flexDirection: "row",
    marginTop: 10
  },

  fb_gg: {
    flexDirection: "row",
    marginTop: 10
  }
});
