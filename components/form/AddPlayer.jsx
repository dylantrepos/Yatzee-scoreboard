import React from 'react';
import { Pressable, TextInput, View } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import stylesSheet from './styles';

const AddPlayer = ({index, player, handleRemovePlayer, handlePlayerChange}) => {

    return (
        <View style={styles.playerContainer} key={index} >
            <TextInput 
                style={styles.inputs} 
                name='name'
                value={player.name}
                onChangeText={(e) => handlePlayerChange(e, index)}
            />
            <Pressable
                onPress={() => handleRemovePlayer(index)}
                style={styles.button_removePlayer}
            >
                <Icon name="minus" size={20} color="white" />
            </Pressable>
        </View>
    );
}

const styles = stylesSheet;
  
export default AddPlayer;
