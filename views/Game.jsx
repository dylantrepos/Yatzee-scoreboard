import React from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import stylesShit from '../styles/styles';

const Game = ({ navigation, route }) => {

    const { playerList } = route.params;
    const numberPlayer = playerList.length;

    console.log('List : ', playerList)
    playerList.forEach((player) => console.log(player.getName()))

    
    return ( 
        <View style={styles.containerBig}>
            <View style={[styles.container, styles.header]}>
                <Text style={[styles.text, styles.title]}>Qui joue ce soir ?</Text>
            </View>
        </View>
    )
}

const styles = stylesShit;

module.exports = Game;