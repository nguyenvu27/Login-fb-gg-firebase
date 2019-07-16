import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button,Alert } from 'react-native';


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

  }

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
       <Text style={{color: '#808080', fontSize: 30, fontWeight: "bold"}}>GoPlay SDK</Text>
     
          <Button style={{color: 'black'}} title="LOGIN"  onPress={() => this.props.navigation.navigate('Login')}/>
      
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
    },
 

});


