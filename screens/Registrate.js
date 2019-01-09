import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image
} from "react-native";
import {Header, Left, Right, Icon} from 'native-base'

class Registrate extends Component{
  static navigationOptions = {
    drawerLabel: 'Registrate',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/registrate.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render(){
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
          </Left>
          </Header>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Registrate:</Text>
            <Button
              title="Regresar"
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
      </View>
    );
  }
}
export default Registrate;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container:{
  flex:1,
  }
})
