import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, Animated } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class HomeScreen extends React.Component {
    static navigationOptions = {header: null }

    componentDidMount(){
        this.spin();
    }

    constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
            }

            spin() {
                this.spinValue.setValue(0)
                Animated.timing(
                  this.spinValue,
                {
                  toValue: 1,
                  duration: 4000,
                  useNativeDriver: true,
                }
              ).start(() => this.spin())
              }



render() {
    const {navigate} = this.props.navigation;
    const spin = this.spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })

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
             <Animated.Image style={{ width: 120, height: 80, resizeMode: 'contain', marginVertical: 80, transform: [{rotate: spin}]}}
             source={{uri: 'https://hitcontract.lt/uploads/thumbs/2016/09/09/logo_blue-1200x300-resize.png?token=3e2d83fbf31c9e2922e0ee16df4c9dc8'}}/>
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
        paddingHorizontal: 40,
        backgroundColor: '#a94516'
    }
})