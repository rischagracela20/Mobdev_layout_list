import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class Input extends Component{
    constructor(){
        //console.log('Constructor');
        super();
        this.state = {
            name: '',
            count: 0
        }
    }
    onPress = () => {
        console.log("Button is pressed")
        this.setState({count: this.state.count + 1})
    }

    
    render(){
        //console.log('Render');
        console.log(this.state.name);
        return (
            <View>
                <TextInput
                    style={{ height: 40 }}
                    placehoder="Enter text"
                    onChangeText={text => this.setState ({ name: text})}
                    defaultValue={this.state.name}
                />
                <Text>Entered Text: {this.state.name}</Text>
                <Button
                    onPress={this.onPress}
                    title="This is Button"
                    color="#283747"
                />
                <Text>Counter: {this.state.count}</Text>
            </View>
        )
    }
}
export default Input;