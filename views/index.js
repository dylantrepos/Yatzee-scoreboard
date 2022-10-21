import React from 'react'
import { Pressable, StyleSheet, TextInput, View, Text } from 'react-native';
import AddPlayer from '../components/form/AddPlayer';
import Button from '../components/button/Button';
import PlayerClass from '../player/Player';
import styleSheet from '../styles/styles';
import Icon from "react-native-vector-icons/FontAwesome5";


export const Home = ({ navigation }) => {
    const [playerList, setPlayerList] = React.useState([{name: 'Dylan'}, {name: 'Gueno'}, {name: 'Jeje'}]);

    const handlePlayerChange = (e, index) => {
        const newPlayerList = [ ...playerList];
        newPlayerList[index]['name'] = e;
        newPlayerList[index].id = index;
        setPlayerList(newPlayerList);
    }

    const addNewPlayer = () => {
        setPlayerList([ ...playerList, { name: '' } ]);
    }

    const handleRemovePlayer = (index) => {
        const newPlayerList = [ ...playerList];
        newPlayerList.splice(index, 1);
        setPlayerList(newPlayerList);
    }

    const startGame = () => {
        let filteredList = [ ...playerList].filter((player) => player.name.trim().length > 0);
        filteredList = filteredList.map(player => new PlayerClass(player.name, player.id))
        if(filteredList.length> 0) {
            navigation.navigate('Game', { playerList: filteredList })
        }
    }

    return (
        <View style={styles.containerBig}>
            <View style={styles.container}>
            <Text style={[styles.standard, styles.title_yatzhee]}>Yatzhee</Text>
                <Text style={[styles.standard, styles.title]}>Qui joue ce soir ?</Text>
                <Text style={[styles.standard, styles.subtitle]}>Inscrivez les noms des joueurs ci-dessous</Text>
                    {playerList.map((player, index) => (
                        <AddPlayer 
                            key={index} 
                            index={index} 
                            player={player} 
                            handlePlayerChange={handlePlayerChange} 
                            handleRemovePlayer={handleRemovePlayer}
                        />))}
                    <View style={styles.containerButton}>
                        <Pressable style={[styles.button]} onPress={addNewPlayer}>
                        <Icon name="user-astronaut" size={20} color="#A6A6A6" />
                            <Text style={[styles.text, styles.text_button]}>Ajouter un joueur</Text>
                        </Pressable>
                    </View>
                    <View style={[styles.containerButton, styles.containerButton_start]}>
                        <Pressable style={[styles.button, styles.button_startGame]} onPress={startGame}>
                            <Text style={[styles.text]}>Démarrer</Text>
                        </Pressable>
                    </View>
            </View>
        </View>
    )
}

const styles = styleSheet