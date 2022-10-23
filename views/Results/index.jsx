import React, { useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import { View } from 'react-native';
import stylesSheet from './styles';

export default Results = ({ navigation, route }) => {

    const { playerList } = route.params;
    const playerListEl = [...playerList].sort((a, b) => b.scoreBoard.total - a.scoreBoard.total)

    console.log('player list : ', playerListEl)

    const setClass = (index) => {
        if (index == 0) return [styles.scoreBoard, styles.firstPos];
        if (index == 1) return [styles.scoreBoard, styles.SecondPos];
        if (index == 2) return [styles.scoreBoard, styles.ThirdPos];
        else return [styles.scoreBoard];
    }

    const checkScore = () => {
        navigation.navigate('Score', {
            playerListEl: playerList, 
        })
    }

    return ( 
        <View style={styles.containerBig}>
            <View style={[styles.header]}>
                <Text style={[styles.text, styles.text_name]}>Résultat...</Text>
            </View>
            <View style={[styles.container, styles.body]}>
                <View style={[styles.podium_container]}>
                    
                <View style={[styles.podium_stand,]}>
                    <Text style={[styles.text_name, styles.podium_text]}>{playerListEl[1].name}</Text>
                    <Text style={[styles.text_score, styles.podium_text]}>{playerListEl[1].scoreBoard.total} pts</Text>
                    <View style={[styles.podium_content, styles.podium_second]}>
                        <Text style={[styles.podium_number]}>2</Text>
                    </View>
                </View>
                <View style={[styles.podium_stand]}>
                    <Text style={[styles.text_name, styles.podium_text]}>{playerListEl[0].name}</Text>
                    <Text style={[styles.text_score, styles.podium_text]}>{playerListEl[0].scoreBoard.total} pts</Text>
                    <View style={[styles.podium_content, styles.podium_first]}>
                        <Text style={[styles.podium_number]}>1</Text>
                    </View>
                </View>
                <View style={[styles.podium_stand]}>
                    <Text style={[styles.text_name, styles.podium_text]}>{playerListEl[2].name}</Text>
                    <Text style={[styles.text_score, styles.podium_text]}>{playerListEl[2].scoreBoard.total} pts</Text>
                    <View style={[styles.podium_content, styles.podium_third]}>
                        <Text style={[styles.podium_number]}>3</Text>
                    </View>
                </View>
                </View>
                {playerListEl.length > 3 ? [...playerListEl].map((player, index) => {
                   return (index > 2) ? (
                        <View style={setClass(index)} key={index}>
                            <Text style={[styles.text, styles.text_name]}>{index + 1}ème : {player.name}</Text>
                            <Text style={[styles.text, styles.text_score]}> {player.scoreBoard.total} pts</Text>
                        </View>) : ''
                }) : ''}
                <View style={styles.containerButton}>
                        <Pressable style={[styles.button]} onPress={checkScore}>
                            <Text style={[styles.text, styles.text_button]}>Voir les scores</Text>
                        </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = stylesSheet;
