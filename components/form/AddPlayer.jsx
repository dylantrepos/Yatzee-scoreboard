import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '../button/Button';
import Icon from "react-native-vector-icons/FontAwesome5";

const AddPlayer = ({index, player, handleRemovePlayer, handlePlayerChange}) => {

    return (
        <View style={styles.playerContainer} key={index} >
            <TextInput 
                style={styles.inputs} 
                name='name'
                value={player.name}
                onChangeText={(e) => handlePlayerChange(e, index)}
            />
            <Button
                action={() => handleRemovePlayer(index)}
                classBtn={['removePlayer']}
            >
                <Icon name="minus" size={20} color="white" />
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    playerContainer: {
        flexDirection: 'row',
    },
    inputs: {
        backgroundColor: 'white',
        height: 50,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
  });
  
export default AddPlayer;
