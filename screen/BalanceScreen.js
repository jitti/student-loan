import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class BalanceScreen extends Component {
    state = {
        name: '',
        debt: '',
        imageURL: 'd'
    }
    componentWillMount() {
        fetch("https://course.ku.ac.th/json.php")
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    name: responseData.name,
                    debt: responseData.debt,
                    imageURL: responseData.imageURL,
                });
            })
            .done();
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <Card title="Result from web services">
                        <Text> Name: {this.state.name} </Text>
                        <Text> Balance: {this.state.debt} </Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={{ uri: this.state.imageURL }} style={{ width: 200, height: 200, borderRadius: 100}} />
                        </View>
                    </Card>
                    <Card title="Result from web services">
                        <Text> Name: {this.state.name} </Text>
                        <Text> Balance: {this.state.debt} </Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={{ uri: this.state.imageURL }} style={{ width: 200, height: 150, borderRadius: 30 }} />
                        </View>
                    </Card>
                    <Card title="Result from web services">
                        <Text> Name: {this.state.name} </Text>
                        <Text> Balance: {this.state.debt} </Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={{ uri: this.state.imageURL }} style={{ width: 200, height: 150, borderRadius: 30 }} />
                        </View>
                    </Card>
                </ScrollView>
            </View>
        )
    }
}
export default BalanceScreen;