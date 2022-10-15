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

    // Add grey background if not available
    const setClass = (id) => {
        if(step == 0 && !idPlayerPossible.includes(id)) return styles.buttonDark
        if(step == 1 && exists(id) && idSelected == id) return styles.selected;
        if(step == 1 && !exists(id)) return styles.buttonDark;
    }

    const handleClick = (id) => {
        if (exists(id) && step == 1) {
            DeviceEventEmitter.emit("event.selected", {
                id: (id == idSelected ?  0 : id),
                total: (id == idSelected ?  0 : possibilities.find(elt => elt.id == id).total)
            });
            id == idSelected ? setIdSelect(0) : setIdSelect(id);
        }
    }

    return (
        <ScrollView style={[]}>
            <View style={styles.lineThree}>
                <Pressable style={[styles.button, setClass(1)]} onPress={() => handleClick(1)}>
                    <Text style={styles.text}>1</Text>
                    {exists(1) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 1).total} pts </Text> : ''}
                </Pressable>
                <Pressable style={[styles.button, setClass(2)]} onPress={() => handleClick(2)}>
                    <Text style={styles.text}>2</Text>
                    {exists(2) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 2).total} pts </Text> : ''}
                </Pressable>
                <Pressable style={[styles.button, setClass(3)]} onPress={() => handleClick(3)}>
                    <Text style={styles.text}>3</Text>
                    {exists(3) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 3).total} pts </Text> : ''}
                </Pressable>
            </View>
            <View style={styles.lineThree}>
                <Pressable style={[styles.button, setClass(4)]} onPress={() => handleClick(4)}>
                    <Text style={styles.text}>4</Text>
                    {exists(4) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 4).total} pts </Text> : ''}
                </Pressable>
                <Pressable style={[styles.button, setClass(5)]} onPress={() => handleClick(5)}>
                    <Text style={styles.text}>5</Text>
                    {exists(5) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 5).total} pts </Text> : ''}
                </Pressable>
                <Pressable style={[styles.button, setClass(6)]} onPress={() => handleClick(6)}>
                    <Text style={styles.text}>6</Text>
                    {exists(6) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 6).total} pts </Text> : ''}
                </Pressable>
            </View>
            <View style={styles.lineTwo}>
                <Pressable style={[styles.button, styles.buttonTwo, setClass(7)]} onPress={() => handleClick(7)}>
                    <Text style={styles.text}>Pair</Text>
                    {exists(7) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 7).total} pts </Text> : ''}
                </Pressable>
                <Pressable style={[styles.button, styles.buttonTwo, setClass(8)]} onPress={() => handleClick(8)}>
                    <Text style={styles.text}>Double pair</Text>
                    {exists(8) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 8).total} pts </Text> : ''}
                </Pressable>
            </View>
            <View style={styles.lineThree}>
                <Pressable style={[styles.button, setClass(9)]} onPress={() => handleClick(9)}>
                    <Text style={styles.text}>Brelan</Text>
                    {exists(9) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 9).total} pts </Text> : ''}
                </Pressable>
                <Pressable style={[styles.button, setClass(10)]} onPress={() => handleClick(10)}>
                    <Text style={styles.text}>Carré</Text>
                    {exists(10) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 10).total} pts </Text> : ''}
                </Pressable>
                <Pressable style={[styles.button, setClass(11)]} onPress={() => handleClick(11)}>
                    <Text style={styles.text}>Full</Text>
                    {exists(11) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 11).total} pts </Text> : ''}
                </Pressable>
            </View>
            <View style={styles.lineTwo}>
                <Pressable style={[styles.button, styles.buttonTwo, setClass(12)]} onPress={() => handleClick(12)}>
                    <Text style={styles.text}>Petite suite</Text>
                    {exists(12) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 12).total} pts </Text> : ''}
                </Pressable>
                <Pressable style={[styles.button, styles.buttonTwo, setClass(13)]} onPress={() => handleClick(13)}>
                    <Text style={styles.text}>Grande suite</Text>
                    {exists(13) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 13).total} pts </Text> : ''}
                </Pressable>
            </View>
            <View style={styles.lineTwo}>
                <Pressable style={[styles.button, styles.buttonOne, setClass(14)]} onPress={() => handleClick(14)}>
                    <Text style={styles.text}>Yahtzee</Text>
                    {exists(14) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 14).total} pts </Text> : ''}
                </Pressable>
            </View>
            <View style={styles.lineTwo}>
                <Pressable style={[styles.button, styles.buttonOne, setClass(15)]} onPress={() => handleClick(15)}>
                    <Text style={styles.text}>Chance</Text>
                    {exists(15) ? <Text style={[styles.text, styles.text_hint]}> {possibilities.find(elt => elt.id == 15).total} pts </Text> : ''}
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = styleSheet;

export default Card;
