import React, { useEffect } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import Text from '../../components/text/Text';
import stylesSheet from './styles';

const AddResult = ({ navigation, route }) => {
  const {player, turn} = route.params;
  const [results, setResults] = React.useState([]);
  const [buttons, setButtons] = React.useState([]);
  const maxDices = 5;

  const addDice = (num) => {
    setResults((prev) => [...prev, num])
  };

  useEffect(() => {
    for(let i = 1; i < 7; i++) {
      const newButton = 
      <Pressable key={i} style={styles.button} onPress={() => addDice(i)}>
          <Text style={styles.text}>{i}</Text>
      </Pressable>;
      setButtons((prev) => [...prev, newButton])
    }
  }, []);

  console.log('results : ', results);

  return (
    <View style={styles.containerBig}>
            <View style={[styles.container, styles.header]}>
                <Text classTxt={['title']} >{player.name}</Text>
                <Text style={styles.test}>Turn {turn}</Text>
            </View>
            <View style={[styles.container, styles.score]}>
                <Text classTxt={['textToDo']}>Résultat du lancé </Text>

            </View>
            <View style={[styles.container, styles.dices]}>
              <View style={[styles.lineThree]}>
                  {buttons}
              </View>
              {results.length === 5 ? 
                <View style={styles.containerButton}>
                  <Pressable style={[styles.buttonValid]} onPress={()=>{}}>
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