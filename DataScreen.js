import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, AsyncStorage, TouchableOpacity, Linking, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;


export default class DataScreen extends React.Component {
    static navigationOptions = {
        title: "My Profile",
        headerTitleStyle: {marginRight: 270, fontWeight: 'normal',
         fontSize: 20, color: '#606060' }}

         constructor(props) {
            super(props);
            this.state = {
                inputValue: "",
                data: {}
            };
        }
        componentWillMount() {
            this.getData();
            this.apiData();
            
        }



        apiData = async () => {
             fetch('http://api.openweathermap.org/data/2.5/weather?id=593116&appid=905c62845859ff9f4e27e673c71cfe63&units=metric', {
                 method: 'POST',
             })
             .then(response => response.json())
             .then(data => {
                console.log(data.main.temp);
                JSON.stringify(data.main);
                this.setState({data: data.main})
             })
          .catch((error) => {
              console.log(error)
          });
        }
        

    async saveData(value) {
        try{
            await AsyncStorage.setItem('myKey', value);
        } catch (error) {
            console.log(error);
        }
    }
    async getData() {
        try {
        const value = await AsyncStorage.getItem('myKey').then((value) => {
            this.setState({inputValue: value});
        })
        } catch(error){
            console.log(error);
        }
    }
        


render() {

    return (
        <View style={styles.containerMiddle}>
        <View style={styles.containerTop}>
            <Image style=
            {{height: 160, width: 180, marginTop: 10, marginLeft: 10}}
            source={require('./as.jpg')}/>
            <Text style=
            {{fontFamily: 'Avenir', fontWeight: 'bold', fontSize: 14,
            marginHorizontal: 25, marginVertical: 70, color: 'white'        
             }}>Remigijus Balčiūnas</Text>        
        </View>
            <Text style={{marginTop: 10, marginRight: deviceWidth/2 + 50,
                 fontFamily: 'Avenir', opacity: 0.5, fontSize: 18}} >About me</Text>
                 <TextInput
                 style={{marginLeft: 15, fontFamily: 'Avenir'}}
                 multiline={true}
                 value={this.state.inputValue}
                onChangeText={(value) => this.saveData(value)}
                blurOnSubmit={true}>
                </TextInput>
                <Text style={{fontFamily: 'Avenir', fontWeight: 'bold', fontSize: 18, paddingHorizontal: 60, paddingTop: 10}}>
                I live in city where current temperature is {this.state.data.temp} °C</Text>
                <TouchableOpacity
                style={styles.button}
                onPress={() => Linking.openURL('https://github.com/remigijusbalc/portfolio')}>
                <Text>My GitHub profile</Text>
                </TouchableOpacity>

        </View>
            );
        }
    }

const styles = StyleSheet.create({
    containerTop: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#34425a',
        position: 'relative',
        maxHeight: 180
    },
    containerMiddle: {
        flex: 1,
        alignItems: 'center',
        height: deviceHeight,
        width: deviceWidth,
        position: 'absolute'
    },
    button: {
        borderWidth: 1,
        marginTop: 30,
        padding: 10,
        marginHorizontal: 100,
        backgroundColor: '#a94516'
    }
})