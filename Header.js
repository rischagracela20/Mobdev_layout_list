import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {

    const name = "John";
    const greeting = <Text style={styles.container}>Welcome {name}!!!</Text>;

    return (
        <View>
            {greeting}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        fontSize: 26,
        color: 'black'
    }
})

export default Header;
