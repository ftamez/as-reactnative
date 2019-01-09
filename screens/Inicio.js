import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image
} from "react-native";
import {Header, Left, Right, Icon} from 'native-base';

class Inicio extends Component{
  static navigationOptions = {
    drawerLabel: 'Inicio',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/home.png')}
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
        <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Ingresar"
          onPress={() => this.props.navigation.navigate('Ingresar')}
        />
        <Button
          title="Registrarte"
          onPress={() => this.props.navigation.navigate('Registrate')}
        />
        </View>
      </View>
    );
  }
}
export default Inicio;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container:{
  flex:1,
  }
})

