import React,{Component} from 'react';
import {Text, View, TextInput,Image,KeyboardAvoidingView} from 'react-native';
import { FormLabel, FormInput,Button} from 'react-native-elements';
import styles from '../style';
var logo = require('../img/logo.png')
class RegisterScreen extends Component{
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
                />
                </View>
                <View>
                <FormLabel> Enter Password  </FormLabel>
                <FormInput
                    secureTextEntry={true}
                    placeholder='Type your password.'
                />
                </View>
                <View style={styles.viewContainer}>
                    <Button
                        title="Register"
                        backgroundColor="blue"
                    />
                </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default RegisterScreen;