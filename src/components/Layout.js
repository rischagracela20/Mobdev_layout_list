import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Layout = () => {
    return (
        // <View>
        //     <Text style ={styles.textStyle}>Layout Component</Text>
        //     <Text style ={[styles.textStyle, styles.redTextStyle]}>The Text is Red</Text>
        // </View>
        <View style= {styles.container}>
            <View style = {styles.box1}></View>
            <View style = {styles.box2}></View>
            <View style = {styles.box3}></View>

        </View>
    )
}

// const styles = StyleSheet.create({
//     textStyle:{
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: 'blue'
//     },
//     redTextStyle:{
//         color: 'red'
//     }
// })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    box1:{
        height: 50, //- fixed dimention
        width: 50,
        // flex: 1,
        backgroundColor: 'dodgerblue',
    },
    box2:{
        height: 50,
        width: 50,
        //flex: 10,
        backgroundColor: 'forestgreen'
    },
    box3:{
        height: 50,
        width: 50,
        //flex: 0.5,
        backgroundColor: 'dodgerblue'
    }
})

export default Layout; 