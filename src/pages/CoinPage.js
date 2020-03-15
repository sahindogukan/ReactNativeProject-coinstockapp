import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Modal,
    Button,
    TextInput, ActivityIndicator,
} from 'react-native';
import axios from 'axios';

export default class CoinList  extends Component {
    state = {
        data: [],
        allData: [],
        text: "",
        loading: true,
        refreshing: false
    };

    async componentDidMount() {
        this.getCoinList();
    }

    async getCoinList ()
    {
        const {data:{data}} = await axios.get("https://api.coinlore.net/api/tickers/");
        this.setState({
            data: data,
            allData:data,
            loading: false,
            refreshing: false
        })
    };
    getCoinDetail = ()=>
    {

    };
    onRefresh =()=>
    {
        this.setState({
            refreshing: true
        }, ()=>{
            this.getCoinList();
        } )
    };
    searchFilter = (text)=>
    {
        const searchedWord = this.state.allData.filter(item => {
            return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1
        });
        this.setState({
            data: searchedWord
        })
    };
    renderFooter = () =>
    {
        if (!this.state.loading) {
            return null
        }
        return(
            <ActivityIndicator style={styles.loading} size={"large"}/>
        )
    };
    searchHeader = ()=>
    {
        return(

            <View style={styles.searchInput}>
                <View style={styles.headerName}>
                    <Text style={styles.headerNameText}>CryptoStockMarket</Text>
                    <Text style={styles.headerNameText2}>sahindogukan.github.io</Text>
                </View>
                <TextInput
                    onChangeText = {text =>
                    {
                        this.setState({
                            text,
                        });
                        this.searchFilter(text)
                    }}
                    value={this.state.text}
                    style={styles.searchText}
                    placeholder={"Bir kripto para ismi girin"} />

            </View>
        )
    };
    listCoins = ({item})=>
    {
        return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("MyModal", {item})} style={styles.itemDetail}>
                <View style={{flexDirection: "row"}}>
                    <View style={styles.rankValue}>
                        <Text style={styles.rankNum}>{item.rank}.</Text>
                    </View>
                    <View style={styles.coinName}>
                        <Image source={{uri: `https://c1.coinlore.com/img/25x25/${item.nameid}.png`}} style={{width:25,height:25}} />
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemSymbolName}>{item.symbol}</Text>
                    </View>
                </View>
                <View style={styles.coinValues}>
                    <Text style={styles.change}>24h %:</Text>
                    <Text style={[styles.changeValue, {color: item.percent_change_24h < 0 ? "red" : "green"}]}>{item.percent_change_24h}</Text>
                    <Text style={styles.price}>${item.price_usd}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.listCoins}
                    keyExtractor={(item)=>item.id}
                    ListHeaderComponent={this.searchHeader()}
                    ListFooterComponent={this.renderFooter}
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create(
    {
        container:
            {
                flex:1,
                backgroundColor: "white"
            },
        itemDetail:
            {
                flex: 1,
                borderBottomWidth: 1,
                borderBottomColor: "#eee",
                padding: 10,
            },
        rankValue: {
            justifyContent: "center",
            width: 25,
            marginHorizontal: 5
        },
        rankNum:{
            fontSize: 15,
        },
        coinName:{
            marginHorizontal: 5,
            flexDirection: "row",
        },
        itemSymbolName:
            {
                fontSize: 17,
            },
        itemName:
            {
                fontSize: 18,
                fontWeight: "bold",
                marginHorizontal: 10

            },
        coinValues:
            {
                marginHorizontal: 40,
                flexDirection: "row",
                marginVertical: 10,
            },
        change:
            {
                width: 50,
            },
        changeValue:
            {
                fontSize: 15,
                fontWeight: "bold"
            },
        price:
            {
                fontSize:18,
                position:"absolute",
                right:0,
                fontWeight:"bold"
            },
        searchInput:
            {
                padding: 10,
                /*borderRadius: 50,*/
                backgroundColor: "#68b5d1"
            },
        searchText:
            {
                fontSize: 16,
                backgroundColor: "white",
                padding: 5,
                borderRadius: 10
            },
        text:
            {
                margin:10,
                fontSize: 15,
            },
        headerName:
            {
                marginVertical: 5,
                borderRadius: 10
            },
        headerNameText:
            {
                fontSize: 25,
                textAlign: "center",
                fontWeight:"bold",
                color:"white"
            },
      headerNameText2:
        {
          fontSize: 15,
          textAlign: "center",
          fontWeight:"bold",
          color:"white"
        }

    }
);
