import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image
} from "react-native";
import {Header, Left, Right, Icon} from 'native-base'

class Ingresar extends Component{
  static navigationOptions = {
    drawerLabel: 'Ingresar',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/ingresa.png')}
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
            <Text>Introduce tu usuario y contraseña:</Text>
            <Button
              title="Regresar"
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
      </View>
    );
  }
}
export default Ingresar;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container:{
  flex:1,
  }
})
