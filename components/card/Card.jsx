import React from 'react';
import { Pressable, ScrollView, View, Text} from 'react-native';
import { getClass } from '../../helpers/retreiveClasses';
import styleSheet from './styles';

const Card = ({ action, navigation, player}) => {

    return (
        <ScrollView style={[]}>
            <View style={styles.lineThree}>
                <Pressable style={styles.button} onPress={action}>
                    <Text style={styles.text}>1</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={action}>
                    <Text style={styles.text}>2</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={action}>
                    <Text style={styles.text}>3</Text>
                </Pressable>
            </View>
            <View style={styles.lineThree}>
                <Pressable style={styles.button} onPress={action}>
                    <Text style={styles.text}>4</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={action}>
                    <Text style={styles.text}>5</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={action}>
                    <Text style={styles.text}>6</Text>
                </Pressable>
            </View>
            <View style={styles.lineTwo}>
                <Pressable style={[styles.button, styles.buttonTwo]} onPress={action}>
                    <Text style={styles.text}>Pair</Text>
                </Pressable>
                <Pressable style={[styles.button, styles.buttonTwo]} onPress={action}>
                    <Text style={styles.text}>Double pair</Text>
                </Pressable>
            </View>
            <View style={styles.lineThree}>
                <Pressable style={styles.button} onPress={action}>
                    <Text style={styles.text}>Brelan</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={action}>
                    <Text style={styles.text}>Carré</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={action}>
                    <Text style={styles.text}>Full</Text>
                </Pressable>
            </View>
            <View style={styles.lineTwo}>
                <Pressable style={[styles.button, styles.buttonTwo]} onPress={action}>
                    <Text style={styles.text}>Petite suite</Text>
                </Pressable>
                <Pressable style={[styles.button, styles.buttonTwo]} onPress={action}>
                    <Text style={styles.text}>Grande suite</Text>
                </Pressable>
            </View>
            <View style={styles.lineTwo}>
                <Pressable style={[styles.button, styles.buttonOne]} onPress={action}>
                    <Text style={styles.text}>Yatzhee</Text>
                </Pressable>
            </View>
            <View style={styles.lineTwo}>
                <Pressable style={[styles.button, styles.buttonOne]} onPress={action}>
                    <Text style={styles.text}>Chance</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = styleSheet;

export default Card;
