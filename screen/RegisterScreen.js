import React,{Component} from 'react';
import {Text, View, TextInput,Image,KeyboardAvoidingView} from 'react-native';
import { FormLabel, FormInput,Button} from 'react-native-elements';
import styles from '../style';
import firebase from 'firebase';
var logo = require('../img/logo.png')
class RegisterScreen extends Component{



    state = { email: '', password: '', error: '', loading: false };












    onRegisterPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: '', loading: false }); 
                          this.props.switchScreen("balance");})
            .catch(() => {
                //Login was not successful, let's create a new account
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => { 
                        this.setState({ error: '', loading: false }); 
                        this.props.setScreen("balance");
                    })
                    .catch(() => {
                        this.setState({ error: 'Authentication failed.', loading: false });
                    });
            });
    }
    render(){
        return(
            <KeyboardAvoidingView 
            keyboardVerticalOffset={64}
            behavior="padding">
                <View>
                    <View  style={styles.viewContainer}>
                        <Image source={logo} style={styles.logo}/>
                        {console.log(styles.logo)}
                        </View>
                <View>
                <FormLabel> Enter Email   </FormLabel>
                <FormInput
                    placeholder='Type your email here.'
                    onChangeText={(email) => this.setState({ email })}
                />
                </View>
                <View>
                <FormLabel> Enter Password  </FormLabel>
                <FormInput
                    secureTextEntry={true}
                    placeholder='Type your password.'
                    onChangeText={(password) => this.setState({ password })}
                />
                </View>
                <View style={styles.viewContainer}>
                    <Button
                        title="Register"
                        backgroundColor="blue"
                        onPress={()=>this.onRegisterPress()}
                    />
                </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default RegisterScreen;