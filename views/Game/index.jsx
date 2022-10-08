import React from 'react';
import { Button, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import Card from '../../components/card/Card';
import Text from '../../components/text/Text';
import stylesSheet from './styles';

const Game = ({ navigation, route }) => {

    const { playerList } = route.params;
    const [currentPlayer, setCurrentPlayer] = React.useState(playerList[0])
    const [turn, setTurn] = React.useState(1);
    const numberPlayer = playerList.length;

    const nextPlayer = () => {
        setCurrentPlayer(playerList[0])
    }

    const addResults = () => {
        navigation.navigate('AddResult', {
            player: currentPlayer, 
            turn: turn,
        })
    }
    
    return ( 
        <View style={styles.containerBig}>
            <View style={[styles.container, styles.header]}>
                <Text classTxt={['title']} >{currentPlayer.name}</Text>
                <Text style={styles.test}>Turn {turn}</Text>
            </View>
            <View style={[styles.container, styles.body]}>
                <Text classTxt={['textToDo']}>Il te reste à faire </Text>
                <Card player={currentPlayer}/>
            </View>
            <View style={styles.containerButton}>
                <Pressable style={[styles.button]} onPress={addResults}>
                    <Text style={styles.text}>Ajouter le résultat</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = stylesSheet;

module.exports = Game;