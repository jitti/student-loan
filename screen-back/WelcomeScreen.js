import React,{Component} from 'react';
import {Text, View, Image} from 'react-native';
import Swiper from 'react-native-swiper';

class WelcomeScreen extends Component{
    render(){
        return(
            <View>
                <Swiper>
                    <View style={styles.slide1}>
                        <Text style={styles.headertext}> Highlight News 1</Text>
                        <Text style={styles.text}> This is the first page</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.headertext}>ข่าวดี  ยึดระยะเวลา</Text>
                        <Text style={styles.text}> This is the second page</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.headertext}> ข่าวประชาสัมพันธ์ </Text>
                        <Text style={styles.text}> This is the third page</Text>
                        <Image source={require('../img/news.png')} style={styles.image}/>
                    </View>
                    <View style={styles.slide4}>
                        <Text style={styles.headertext}> คำถาม ? </Text>
                        <Text style={styles.text}> This is the forth page</Text>
                    </View>
                </Swiper>
            </View>
        )
    }
}

const styles ={
    image:{
        height:150,
        width: 250,
        resizeMode:"cover",
        borderRadius:10
    },
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'normal',
        margin: 20
      },
      headertext: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 20
      },
    slide1:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#004d40'
    },
    slide2:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#01579b'
    },
    slide3:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#1a237e'
    },
    slide4:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#560027'
    },
}
export default WelcomeScreen;