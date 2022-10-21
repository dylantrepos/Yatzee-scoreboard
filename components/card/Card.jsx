import React, { useEffect } from 'react';
import { Pressable, ScrollView, View, Text, DeviceEventEmitter} from 'react-native';
import styleSheet from './styles';


const Card = ({ action, navigation, player, possibilities, step}) => {

    const [idSelected, setIdSelect] = React.useState(0);
    const [total, setTotal] = React.useState(0);
    let idPossible = [];
    let idPlayerPossible = player.available;

    if (possibilities) {
        possibilities.filter(elt => elt.id == 1).length ? possibilities[0].total : '';
        idPossible = [...possibilities.map((elt) => elt.id)];
    }
    useEffect(() => {
        return () => {
            setIdSelect(0);
          };
        }, [player]);

    // Check if id exists in possibilities
    const exists = (id) => {
        return idPossible.includes(id) && idPlayerPossible.includes(id) && step == 1;
    }
    
    // Check if id exists in Player possibilities
    const existsPlayer = (id) => {
        return idPlayerPossible.includes(id) && step == 1;
    }

    // Add grey background if not available
    const setClass = (id) => {
        const classes = [styles.button];
        if(step == 1 && existsPlayer(id) && !exists(id)) classes.push(styles.buttonKill);
        if(step == 0 && !idPlayerPossible.includes(id)) classes.push(styles.buttonDark) 
        if(step == 1 && exists(id) && idSelected == id) classes.push(styles.selected);
        if(step == 1 && existsPlayer(id) && idSelected == id) classes.push(styles.selected);
        if(step == 1 && !exists(id) && !existsPlayer(id)) classes.push(styles.buttonDark);
        return classes
    }

    const handleClick = (id) => {
        if ((exists(id) || existsPlayer(id)) && step == 1) {
            DeviceEventEmitter.emit("event.selected", {
                id: (id == idSelected ?  0 : id),
                total: (id == idSelected ?  0 : (possibilities.find(elt => elt.id == id) ? possibilities.find(elt => elt.id == id).total : 0))
            });
            id == idSelected ? setIdSelect(0) : setIdSelect(id);
        }
    }

    return (
        <ScrollView style={[]}>
            <View style={styles.lineThree}>
                <Pressable style={[styles.button, setClass(1)]} onPress={() => handleClick(1)}>
                    <Text style={styles.text}>1</Text>
                    {existsPlayer(1) && !exists(1) ? <Text style={[styles.text, styles.text_hint]}> X </Text> : ''}
                    {exists(1) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 1).total} pts </Text> : ''}
                    
                </Pressable>
                <Pressable style={[styles.button, setClass(2)]} onPress={() => handleClick(2)}>
                    <Text style={styles.text}>2</Text>
                    {existsPlayer(2) && !exists(2) ? <Text style={[styles.text, styles.text_hint]}> X </Text> : ''}
                    {exists(2) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 2).total} pts </Text> : ''}
                </Pressable>
                <Pressable style={[styles.button, setClass(3)]} onPress={() => handleClick(3)}>
                    <Text style={styles.text}>3</Text>
                    {existsPlayer(3) && !exists(3) ? <Text style={[styles.text, styles.text_hint]}> X </Text> : ''}
                    {exists(3) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 3).total} pts </Text> : ''}
                </Pressable>
            </View>
            <View style={styles.lineThree}>
                <Pressable style={[setClass(4)]} onPress={() => handleClick(4)}>
                    <Text style={styles.text}>4</Text>
                    {existsPlayer(4) && !exists(4) ? <Text style={[styles.text, styles.text_hint]}> X </Text> : ''}
                    {exists(4) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 4).total} pts </Text> : ''}
                </Pressable>
                <Pressable style={[setClass(5)]} onPress={() => handleClick(5)}>
                    <Text style={styles.text}>5</Text>
                    {existsPlayer(5) && !exists(5) ? <Text style={[styles.text, styles.text_hint]}> X </Text> : ''}
                    {exists(5) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 5).total} pts </Text> : ''}
                </Pressable>
                <Pressable style={[setClass(6)]} onPress={() => handleClick(6)}>
                    <Text style={styles.text}>6</Text>
                    {existsPlayer(6) && !exists(6) ? <Text style={[styles.text, styles.text_hint]}> X </Text> : ''}
                    {exists(6) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 6).total} pts </Text> : ''}
                </Pressable>
            </View>
            <View style={styles.lineTwo}>
                <Pressable style={[setClass(7), styles.buttonTwo]} onPress={() => handleClick(7)}>
                    <Text style={styles.text}>Pair</Text>
                    {existsPlayer(7) && !exists(7) ? <Text style={[styles.text, styles.text_hint]}> X </Text> : ''}
                    {exists(7) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 7).total} pts </Text> : ''}
                </Pressable>
                <Pressable style={[setClass(8), styles.buttonTwo]} onPress={() => handleClick(8)}>
                    <Text style={styles.text}>Double pair</Text>
                    {existsPlayer(8) && !exists(8) ? <Text style={[styles.text, styles.text_hint]}> X </Text> : ''}
                    {exists(8) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 8).total} pts </Text> : ''}
                </Pressable>
            </View>
            <View style={styles.lineThree}>
                <Pressable style={[setClass(9)]} onPress={() => handleClick(9)}>
                    <Text style={styles.text}>Brelan</Text>
                    {existsPlayer(9) && !exists(9) ? <Text style={[styles.text, styles.text_hint]}> X </Text> : ''}
                    {exists(9) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 9).total} pts </Text> : ''}
                </Pressable>
                <Pressable style={[setClass(10)]} onPress={() => handleClick(10)}>
                    <Text style={styles.text}>Carré</Text>
                    {existsPlayer(10) && !exists(10) ? <Text style={[styles.text, styles.text_hint]}> X </Text> : ''}
                    {exists(10) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 10).total} pts </Text> : ''}
                </Pressable>
                <Pressable style={[setClass(11)]} onPress={() => handleClick(11)}>
                    <Text style={styles.text}>Full</Text>
                    {existsPlayer(11) && !exists(11) ? <Text style={[styles.text, styles.text_hint]}> X </Text> : ''}
                    {exists(11) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 11).total} pts </Text> : ''}
                </Pressable>
            </View>
            <View style={styles.lineTwo}>
                <Pressable style={[setClass(12), styles.buttonTwo]} onPress={() => handleClick(12)}>
                    <Text style={styles.text}>Petite suite</Text>
                    {existsPlayer(12) && !exists(12) ? <Text style={[styles.text, styles.text_hint]}> X </Text> : ''}
                    {exists(12) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 12).total} pts </Text> : ''}
                </Pressable>
                <Pressable style={[setClass(13), styles.buttonTwo]} onPress={() => handleClick(13)}>
                    <Text style={styles.text}>Grande suite</Text>
                    {existsPlayer(13) && !exists(13) ? <Text style={[styles.text, styles.text_hint]}> X </Text> : ''}
                    {exists(13) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 13).total} pts </Text> : ''}
                </Pressable>
            </View>
            <View style={styles.lineTwo}>
                <Pressable style={[setClass(14), styles.buttonOne]} onPress={() => handleClick(14)}>
                    <Text style={styles.text}>Yahtzee</Text>
                    {existsPlayer(14) && !exists(14) ? <Text style={[styles.text, styles.text_hint]}> X </Text> : ''}
                    {exists(14) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 14).total} pts </Text> : ''}
                </Pressable>
            </View>
            <View style={styles.lineTwo}>
                <Pressable style={[setClass(15), styles.buttonOne]} onPress={() => handleClick(15)}>
                    <Text style={styles.text}>Chance</Text>
                    {existsPlayer(15) && !exists(15) ? <Text style={[styles.text, styles.text_hint]}> X </Text> : ''}
                    {exists(15) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 15).total} pts </Text> : ''}
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = styleSheet;

export default Card;
