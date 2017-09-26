import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import {Card} from 'react-native-elements';

class BalanceScreen extends Component {
    state = {
        name: '',
        debt: '',
        imageURL: ''
    }
    componentWillMount() {
        fetch("https://course.ku.ac.th/json.php")
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData.name);
                this.setState({
                    name: responseData.name,
                    debt: responseData.debt,
                    imageURL: responseData.imageURL
                });
            })
            .done();
    }

    render() {
        return (
            <View>
                <Card title="Result from web services">
                <Text> Name: {this.state.name} </Text>
                <Text> Balance: {this.state.debt} </Text>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={{uri:'https://www.cpe.ku.ac.th/wp-content/uploads/2014/10/14-KUENG-PHO-01-29-29-13.jpg'}} style={{width:100,height:150}} />
                </View>
                </Card>
                </View>
                )
    }
}
export default BalanceScreen;