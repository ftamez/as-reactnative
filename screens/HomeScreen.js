import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";
import {Header, Left, Right, Icon} from 'native-base';


class HomeScreen extends Component{
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
          onPress={() => this.props.navigation.navigate('Registrarte')}
        />
        </View>
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container:{
  flex:1,
  }
})
