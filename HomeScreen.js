import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class HomeScreen extends React.Component {
    static navigationOptions = {header: null }


render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
            <Text style={{fontFamily: 'Avenir', fontWeight: 'bold', fontSize: 30, marginBottom: 10}}>
             Remigijus Balčiūnas</Text>
             <Image style={{height: 240, width: 200}}
             source={require('./as.jpg')}/>
             <TouchableOpacity style={styles.button}
             onPress={() => navigate('Data')}>
                 <Text style={{fontFamily: 'Avenir'}}>My profile</Text>
             </TouchableOpacity>
        </View>
            );
        }
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 100,
    },
    button: {
        borderWidth: 1,
        marginTop: 30,
        padding: 10,
        paddingHorizontal: 40
    }
})