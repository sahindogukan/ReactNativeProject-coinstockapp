import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/Route/Router';
import {NavigationContainer} from "@react-navigation/native";


export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
