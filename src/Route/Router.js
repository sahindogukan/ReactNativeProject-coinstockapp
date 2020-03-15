import React, { Component } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CoinPage from '../pages/CoinPage';
import CoinDetail from '../pages/CoinDetail';


function ModalScreen({ route,navigation }) {
  const {params} = route;
  const {name} = params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>{name}</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
const Stack = createStackNavigator();

export default class Router extends Component {
  render() {
    return (
      <Stack.Navigator mode="modal">
        <Stack.Screen
          name="CoinPage"
          component={CoinPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MyModal" component={CoinDetail} options={{ headerShown: false}}/>
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
