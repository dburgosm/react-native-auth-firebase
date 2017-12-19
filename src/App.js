/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import firebase from 'firebase';

import {
    Header,
    Button,
    Spinner
} from './components/commons';
import LoginForm from './components/LoginForm';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

    state = {
        loggedIn: null
    };


    componentWillMount(){
        firebase.initializeApp({
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: ""
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    loggedIn: true
                });

            } else {
                this.setState({
                    loggedIn: false
                });
            }
        });
    }

    renderContent() {
        console.debug("hola");
        console.debug(this.state.loggedIn);

        switch(this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                );
                break;
            case false:
                return (
                    <LoginForm />
                );
                break;
            default:
                return (
                  <Spinner size='large' />
                );
                break;
        }
    }

    render() {
        return (
            <View>
                <Header>Log In</Header>
                { this.renderContent() }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
