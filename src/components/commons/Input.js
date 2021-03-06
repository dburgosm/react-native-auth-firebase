import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({label, value, placeholder, secureTextEntry, onChangeText}) => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.label }>{ label }</Text>
            <TextInput
                autoCapitalize='none'
                secureTextEntry={ secureTextEntry }
                placeholder={ placeholder }
                autoCorrect={ false }
                value={ value }
                onChangeText={ onChangeText }
                style={ styles.input }
            />
        </View>
    );
};

const styles = {
    input: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    label: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    container: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };