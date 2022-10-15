import React, { useEffect } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, TextInput, View, Text } from 'react-native';
import {DeviceEventEmitter} from "react-native"
import Card from '../../components/card/Card';
import { checkResults } from '../../helpers/checkResult';
// import Text from '../../components/text/Text';
import stylesSheet from './styles';

const Game = ({ navigation, route }) => {

    const { playerList = [], results = null } = route.params;
    const [playerListEl, setPlayerListEl] = React.useState(playerList)
    const [currentPlayer, setCurrentPlayer] = React.useState(playerList[0])
    const [turn, setTurn] = React.useState(1);
    const [hasSelected, setHasSelected] = React.useState({id: 0, total: 0});
    const [step, setStep] = React.useState(0);
    const [playerIdEl, setPlayerIdEl] = React.useState(0);
    const numberPlayer = playerListEl.length;
    let possibilities = null;

    if (turn == 2) {
        navigation.navigate('Results', {
            playerList: playerListEl
        })
    }

    const nextPlayer = () => {
        const newIdEl = (playerIdEl + 1 >= numberPlayer) ? 0 : playerIdEl + 1;
        if (newIdEl == 0) setTurn(turn+1);
        setPlayerIdEl(newIdEl);
        setCurrentPlayer(() => playerListEl[newIdEl]);
        setStep(0);
    }
    
    useEffect(() => {
        return () => {
            setHasSelected({id: 0, total: 0});
          };
    }, [currentPlayer]);


    const addResults = () => {
        navigation.navigate('AddResult', {
            player: currentPlayer, 
            turn: turn,
        })
    }

    DeviceEventEmitter.addListener("event.testEvent", (eventData) => 
    {
        setStep(eventData)
    });

    DeviceEventEmitter.addListener("event.selected", (eventData) => 
    {
        setHasSelected(eventData)
        DeviceEventEmitter.removeAllListeners("event.selected")
    });

    const handleStep = (stepNum) => {
        setStep(stepNum);
    }
    
    if(results) {
        possibilities = checkResults(results)
    }

    const validResult = () => {
        currentPlayer.setScore(hasSelected.id, hasSelected.total);
        currentPlayer.setTotal(hasSelected.total);
        if (hasSelected.id >= 1 && hasSelected.id <= 6) currentPlayer.setBonus(hasSelected.total);
        nextPlayer();
    }

    return ( 
        <View style={styles.containerBig}>
            <View style={[styles.header]}>
                <Text style={[styles.text, styles.text_name]} >{currentPlayer.name} Tour {turn}</Text>
               {results && step == 1 ? <Text style={[styles.text, styles.text_turn]}>{results.join(' ')}</Text> : ''}
            </View>
            <View style={[styles.container, styles.body]}>
                <Text style={[styles.text, styles.text_subtitle]}>Il te reste à faire </Text>
                <Card player={currentPlayer} possibilities={possibilities} step={step}/>
            </View>
            <View style={styles.containerButton}>
                    {hasSelected.id != 0 && step == 1 ? 
                        <Pressable style={[styles.button]} onPress={validResult}>
                            <Text style={[styles.text, styles.text_button]}>Valider</Text>
                        </Pressable> : ''
                    }
                    {step == 0 ? 
                        <Pressable style={[styles.button]} onPress={addResults}>
                            <Text style={[styles.text, styles.text_button]}>Ajouter le résultat</Text>
                        </Pressable> : ''
                    }
            </View>
        </View>
    )
}

const styles = stylesSheet;

module.exports = Game;