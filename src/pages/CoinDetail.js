import React, { Component } from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Button } from 'react-native';

export default class CoinDetail extends Component {
  render() {
    const {params} = this.props.route;
    const {item} = params;
    return (
      <View style={styles.container}>
        <View style={styles.headerName}>
          <Text style={styles.headerNameText}>CoinStockApp</Text>
        </View>
        <View style={styles.coinDetail}>
          <Image source={{uri: `https://www.coinlore.com/img/${item.nameid}.png`}} style={{width:128,height:128}} />
          <View style={styles.flexDirection}>
            <Text style={styles.textHeader}>{item.name}</Text>
            <Text style={styles.textSymbol}>{item.symbol}</Text>
          </View>
          <View style={styles.flexDirection}>
            <Text style={{fontSize:35, fontWeight:"bold"}}>${item.price_usd}</Text>
          </View>
          <View style={styles.flexDirection}>
            <Text style={[styles.header, {color: "#ee8400"}]}>BTC Değeri:</Text>
            <Text style={styles.headerValue}>{item.price_btc}</Text>
          </View>
          <View style={styles.flexDirection}>
            <Text style={styles.header}>Market Piyasa Sıralaması:</Text>
            <Text style={styles.headerValue}>{item.rank}</Text>
          </View>
          <View style={styles.flexDirection}>
            <Text style={styles.header}>Değişim % (Son 24 Saat):</Text>
            <Text style={[styles.headerValue, {color: item.percent_change_24h < 0 ? "red" : "green"}]}>{item.percent_change_24h}</Text>
          </View>
          <View style={styles.flexDirection}>
            <Text style={styles.header}>Değişim % (Son 1 Saat):</Text>
            <Text style={[styles.headerValue, {color: item.percent_change_1h < 0 ? "red" : "green"}]}>{item.percent_change_1h}</Text>
          </View>
          <View style={styles.flexDirection}>
            <Text style={styles.header}>Değişim % (Son 1 Hafta):</Text>
            <Text style={[styles.headerValue, {color: item.percent_change_7d < 0 ? "red" : "green"}]}>{item.percent_change_7d}</Text>
          </View>
          <View style={styles.flexDirection}>
            <Text style={styles.header}>Piyasa Değeri:</Text>
            <Text style={[styles.headerValue, {color: "#004cee"}]}>$ {item.market_cap_usd}</Text>
          </View>
          <View style={styles.flexDirection}>
            <Text style={styles.header}>Hacim (24 saat):</Text>
            <Text style={[styles.headerValue, {color: "#004cee"}]}>$ {item.volume24}</Text>
          </View>
          <View style={styles.flexDirection}>
            <Text style={styles.header}>Dolaşan Arz:</Text>
            <Text style={[styles.headerValue, {color: "#004cee"}]}>$ {item.csupply}</Text>
          </View>
          <View style={styles.flexDirection}>
            <Text style={styles.header}>Maksimum Arz:</Text>
            <Text style={[styles.headerValue, {color: "#004cee"}]}>$ {item.msupply}</Text>
          </View>
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{marginVertical: 10, flexDirection:"row"}}>
            <Image style={{width:25, height:25}} source={require("../assets/close.png")}/>
            <Text style={{fontSize:20, fontWeight:"bold", marginHorizontal: 5}}>Kapat</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container:
      {
        flex: 1,
        backgroundColor: "white"
      },
    coinDetail:
      {
        width: "100%",
        flex: 18,
        justifyContent: "center",
        alignItems: "center"
      },
    headerName:
      {
        flex: 1,
        width: "100%",
        backgroundColor: "#68b5d1",
        paddingVertical: 10,
        justifyContent: "center",
        flexDirection: "row"
      },
    headerNameText:
      {
        fontSize: 20,
        textAlign: "center",
        fontWeight:"bold",
        color: "white"
      },
    flexDirection:
      {
        flexDirection: "row",
        marginVertical: 5,
      },
    textHeader:
      {
        fontWeight: "bold",
        fontSize: 30
      },
    textSymbol:
      {
        color: "#8a8c89",
        fontWeight: "bold",
        fontSize: 30,
        marginHorizontal: 10
      },
    header:
      {
        fontSize: 17,
        fontWeight: "bold",
        color: "#535552",
      },
    headerValue:
      {
        fontWeight:"bold",
        fontSize: 17,
        marginHorizontal: 10,
        color: "#3d3d3d"
      }
  }
  );
