import React, { useEffect } from 'react'
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import AddPlayer from '../components/form/AddPlayer';
import Button from '../components/button/Button';
import PlayerClass from '../player/Player';
import styleSheet from '../styles/styles';
import Text from '../components/text/Text';

export const Home = ({ navigation }) => {
    const [playerList, setPlayerList] = React.useState([{name: ""}]);

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
        navigation.navigate('Game', { playerList: filteredList })
    }

    return (
        <View style={styles.containerBig}>
            <View style={styles.container}>
                <Text classTxt={['title']}>Qui joue ce soir ?</Text>
                <Text classTxt={['subtitle']}>Inscrivez les noms des jouers ci-dessous</Text>
                    {playerList.map((player, index) => (
                        <AddPlayer 
                            key={index} 
                            index={index} 
                            player={player} 
                            handlePlayerChange={handlePlayerChange} 
                            handleRemovePlayer={handleRemovePlayer}
                        />))}
                    <Button 
                        action={addNewPlayer}
                        classBtn={['addPlayer']}
                        classTxt={['text']}
                    >
                        Ajouter un joueur
                    </Button>
                    <Button 
                        action={startGame}
                        classBtn={['startGame']}
                    >Démarrer</Button>
            </View>
        </View>
    )
}

const styles = styleSheet