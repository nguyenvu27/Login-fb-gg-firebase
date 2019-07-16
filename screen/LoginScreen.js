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
import GoogleImage from "../assets/googleplus.png";
import Main from "../screen/Main";
import { firebaseApp } from "../screen/firebase";
// import { type } from "os";
import * as Facebook from 'expo-facebook';
import * as Expo from 'expo';








export default class LoginScreen extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
  
    };
  }

  static navigationOptions = {
    title: "Login",
    header: null
  };
  

  dangNhap() {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        Alert.alert(
          "Thông báo",
          "Đăng nhập thành công: \n" + this.state.email,
          [
            {
              text: "OK",
              onPress: () => this.props.navigation.navigate("Main")
            }
          ],
          { cancelable: false }
        );
        this.state = {
          email: "",
          password: ""
        };
      })
      .catch(function(error) {
        Alert.alert(
          "Thông báo",
          "Đăng nhập thất bại  !",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      });
  }

  // async loginWithFacebook() {

  //   //ENTER YOUR APP ID 
  //   const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('2834724193266812', { permissions: ['public_profile'] })

  //   if (type == 'success') {

  //     const credential = firebase.auth.FacebookAuthProvider.credential(token)

  //     firebase.auth().signInWithCredential(credential).catch((error) => {
  //       console.log(error)
  //     })
  //   }
  // }

  async  logIn() {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync('2834724193266812', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        Alert.alert('Đăng nhập thành công')
        { this.props.navigation.navigate("Main")}
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  

  // signInWithGoogleAsync = async () => {
  //   try {
  //     const result = await Expo.Google.logInAsync({
  //       // androidClientId: YOUR_CLIENT_ID_HERE,
  //       iosClientId: '469226807266-meubs156g7frdu58hjl7g3ltv241k31q.apps.googleusercontent.com',
  //       scopes: ['profile', 'email'],
  //     });
  //     if (result.type === 'success') {
  //       return result.accessToken;
  //     } else {
  //       return { cancelled: true };
  //     }
  //   } catch (e) {
  //     alert(e)
  //     // return { error: true };
  //   }
  // }
  async  signInWithGoogleAsync() {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: '469226807266-qq4537n48j4n9vpuad7mjdper37dpclp.apps.googleusercontent.com',
        iosClientId: '469226807266-meubs156g7frdu58hjl7g3ltv241k31q.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        this.setState({
          signedIn: true, 
          name: result.user.name,
          photoUrl: result.user.photoUrl,
        })
        { this.props.navigation.navigate("Main")}
        // return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.img} source={Logo} />
        </View>

        <Text style={styles.login}>ĐĂNG NHẬP</Text>

        <View style={styles.input}>
          <View style={styles.user}>
            <Image style={styles.img_user} source={User} />
            <TextInput
              style={styles.user_text}
              placeholder="Tên đăng nhập"
              maxLength={30}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
          </View>
          <View style={styles.user}>
            <Image style={styles.img_user} source={Locked} />
            <TextInput
              style={styles.user_text}
              placeholder="Mật khẩu"
              secureTextEntry={true}
              maxLength={30}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              this.dangNhap();
            }}
          >
            <View style={styles.user_login}>
              <Text
                style={{ textAlign: "center", marginTop: 13, color: "#FFF" }}
              >
                ĐĂNG NHẬP
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.text}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Registration")}
          >
            <Text style={{ color: "blue" }}> Đăng ký &bull;</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ForgotPass")}
          >
            <Text style={{ color: "blue" }}> Quên mật khẩu ?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fb_gg}>
        <TouchableOpacity onPress={() => this.logIn()}>
          <Image
            style={{ width: 50, height: 50, marginRight: 10 }}
            source={Fb}
          /></TouchableOpacity>

          <TouchableOpacity onPress={() => this.signInWithGoogleAsync()}>
          <Image
            style={{ width: 50, height: 50, marginLeft: 10 }}
            source={GoogleImage}
          />
          </TouchableOpacity>
        </View>
            
     

        <Text style={{ marginTop: 280 }}>&copy;GoApp</Text>
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
