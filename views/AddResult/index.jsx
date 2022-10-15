import React, { useEffect } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import Text from '../../components/text/Text';
import stylesSheet from './styles';
import {DeviceEventEmitter} from "react-native"


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
        <Pressable key={i} style={styles.button} onPress={() => addDice(i)}>
            <Text style={styles.text}>{i}</Text>
        </Pressable>;
        setButtons((prev) => [...prev, newButton])
      }
    }
  }, []);

  return (
    <View style={styles.containerBig}>
            <View style={[styles.container, styles.header]}>
                <Text classTxt={['title']} >{player.name}</Text>
                <Text style={styles.test}>Turn {turn}</Text>
            </View>
            <View style={[styles.score]}>
                <Text classTxt={['textToDo']}>Résultat du lancé </Text>
                <View style={[styles.lineThree]}>
                  {results.map((res, index) => (
                    <Pressable key={index} style={styles.button} onPress={() => removeDice(index)}>
                      <Text style={styles.text}>{res}</Text>
                    </Pressable>
                  ))}
                </View>
            </View>
            <View style={[styles.dices]}>
            <Text classTxt={['textToDo']}>Choissisez les dés à ajouter </Text>
              <View style={[styles.lineThree]}>
                  {buttons}
              </View>
              {results.length === 5 ? 
                <View style={styles.containerButton}>
                  <Pressable style={[styles.buttonValid]} onPress={()=> confirm()}>
                      <Text style={styles.text}>Valider</Text>
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