import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Domensions, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'
import Inicio from './screens/Inicio'
import Eventos from './screens/Eventos'
import Galeria from './screens/Galeria'
import SeguidoresVip from './screens/SeguidoresVip'
import Contacto from './screens/Contacto'
import Ingresar from './screens/Ingresar'
import Registrate from './screens/Registrate'

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex:1 }}>
  <View style={{height:150,backgroundColor:'white', alignItems: 'center', justifyContent: 'center' }}>
    <Image source={require('./assets/logo.jpg')} style={{ height: 120, width: 120, borderRadius: 60 }} />
  </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Inicio:Inicio,
  Eventos:Eventos,
  Galeria:Galeria,
  SeguidoresVip:SeguidoresVip,
  Contacto:Contacto,
  Ingresar:Ingresar,
  Registrate:Registrate,
}, {
  contentComponent: CustomDrawerComponent
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
