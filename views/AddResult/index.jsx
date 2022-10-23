import React, { useEffect } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, TextInput, View, Text } from 'react-native';
import stylesSheet from './styles';
import {DeviceEventEmitter} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import getIcon from '../../helpers/getIconDice';


const AddResult = ({ navigation, route }) => {
  const {player, turn} = route.params;
  const [results, setResults] = React.useState([]);
  const [buttons, setButtons] = React.useState([]);
  const maxDices = 5;

  useEffect(() => {
  return () => {
      DeviceEventEmitter.removeAllListeners("event.testEvent")
    };
  }, []);

  const addDice = (num) => {
    setResults((prev) => {
      if(prev.length < 5) return [...prev, num]
      return prev;
    })
  };

  const removeDice = (num) => {
    setResults((prev) => {
      prev.splice(num, 1);
      return [...prev];
    })
  };

  const confirm = () => {
    DeviceEventEmitter.emit("event.testEvent", 1);
    navigation.navigate('Game', {
      results: results, 
    })
  }

  useEffect(() => {
    if(buttons.length < 1) {
      for(let i = 1; i < 7; i++) {
        const newButton = 
        <Pressable key={i} style={[styles.button]} onPress={() => addDice(i)}>
            <Icon name={
             getIcon(i)
            } size={100} color="white" />
        </Pressable>;
        setButtons((prev) => [...prev, newButton])
      }
    }
  }, []);

  return (
    <View style={styles.containerBig}>
            <View style={[styles.container, styles.header]}>
                <Text style={[styles.text, styles.title]} >{player.name}</Text>
                <Text style={[styles.text, styles.turn]}>Tour {turn}</Text>
            </View>
            <View style={[styles.score]}>
                <Text style={[styles.text, styles.textToDo]}>Résultat du lancé </Text>
                <View style={[styles.lineThree]}>
                  {results.map((res, index) => (
                    <Pressable key={index} style={[styles.button]} onPress={() => removeDice(index)}>
                      <Icon name={getIcon(res)} size={100} color="white" />
                    </Pressable>
                  ))}
                </View>
            </View>
            <View style={[styles.dices]}>
            <Text style={[styles.text, styles.textToDo]}>Choissisez les dés à ajouter </Text>
              <View style={[styles.lineThree]}>
                  {buttons}
              </View>
              {results.length === 5 ? 
                <View style={styles.containerButton}>
                  <Pressable style={[styles.buttonValid]} onPress={()=> confirm()}>
                      <Text style={[styles.text]}>Valider</Text>
                  </Pressable>
                </View>
                : ''
              }
            </View>
    </View>
  )
}

const styles = stylesSheet;

module.exports = AddResult;