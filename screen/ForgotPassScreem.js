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
import Back from "../assets/back.png";

export default class ForgotPassScreem extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "ForgotPass",
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.img} source={Logo} />
        </View>
        <View style={styles.all}>
        <Text style={styles.login}>QUÊN MẬT KHẨU</Text>

        <View style={styles.text}>
          <Text style={styles.txt1}>Quên MKC2 soạn:</Text>
          <Text style={styles.txt2}>GO MKC2 &lt; mã tài khoản &gt; </Text>
          <Text style={styles.txt1}>Gửi 8100 &#40; 1500đ/sms &#41;</Text>

          <Text style={styles.txt1}>Quên MK soạn:</Text>
          <Text style={styles.txt2}>GO MK &lt; MKC2 &gt; </Text>
          <Text style={styles.txt1}>Gửi 8100 &#40; 1500đ/sms &#41;</Text>
        </View>

        <View style={styles.column}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={{ color: "blue" }}>Đăng nhập tài khoản GoPlay</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Registration")}
          >
            <Text style={{ color: "blue" }}>
              &bull; Đăng ký tài khoản GoPlay
            </Text>
          </TouchableOpacity>
          
        </View>
         <Text style={{ marginTop: 230, textAlign: 'center' }}>&copy;GoApp</Text>
            </View>
       
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
    marginTop: 11,
    width: 30,
    height: 30,
    marginLeft: 50
  },
  login: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    marginTop: 15,
    color: "#00FFCC", 
    textAlign: 'center'
    
  },
  text: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  txt1: {
    fontSize: 25,
    marginTop: 10
  },
  txt2: {
    fontSize: 25,
    marginTop: 10,
    color: "red"
  },
  column: {
    flexDirection: "row",
    marginTop: 20
  },
  all: {
    marginTop: 10, 
  },
});
