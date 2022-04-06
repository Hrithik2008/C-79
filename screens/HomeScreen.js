import React,{Component} from 'react'
import {Text,View,StyleSheet,SafeAreaView,TouchableOpacity,Platform,StatusBar,ImageBackground,Image} from 'react-native'

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"black"}}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require('../assets/bg.png')} style={styles.bgImage}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>ISS Tracker App</Text>
                </View>
                <TouchableOpacity style={styles.routeCard} onPress={() =>this.props.navigation.navigate("ISS")}>
                    <Text style={styles.routeText}>ISS Location</Text>
                    <Text style={styles.knowMore}>{"Know More --->"}</Text>
                    <Text style={styles.bgDigit}>1</Text>
                    <Image source={require("../assets/iss_icon.png")} style={styles.iconImage}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard} onPress={() =>this.props.navigation.navigate("Meteor")}>
                    <Text style={styles.routeText}>Meteors</Text>
                    <Text style={styles.knowMore}>{"Know More --->"}</Text>
                    <Text style={styles.bgDigit}>2</Text>
                    <Image source={require("../assets/meteor_icon.png")} style={styles.iconImage}/>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleText:{
      fontSize:40,
      fontWeight:"bold",
      color:"gray"  
    },
    bgImage:{
        flex:1,
        resizeMode:"cover",
    },
    iconImage:{
        position:"absolute",
        height:200,
        width:200,
        resizeMode:"contain",
        right:20,
        top:-80,
    },
    bgDigit:{
        position:"absolute",
        color:"white",
        fontSize:150,
        right:20,
        bottom:-15,
        zIndex:-1,
        opacity:0.5
    },
    knowMore:{
        paddingLeft:30,
        color:"red",
        fontSize:15,
    },
    routeText:{
        fontSize:35,
        fontWeight:"bold",
        color:"black",
        marginTop:75,
        paddingLeft:30
    },
    routeCard:{
        flex:0.25,
        marginTop:50,
        marginLeft:50,
        marginRight:50,
        backgroundColor:"grey",
        borderRadius:30,
        fontSize:12
    },
    titleBar:{
        flex:0.5,
        justifyContent:"center",
        alignItems:"center",
    },
    droidSafeArea:{
        marginTop:Platform.OS==="android" ? StatusBar.currentHeight : 0
    }
})