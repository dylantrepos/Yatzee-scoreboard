import React, { useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { View } from 'react-native';
import stylesSheet from './styles';
import resultNames from '../../helpers/resultNames';

export default Score = ({ navigation, route }) => {

    const { playerListEl } = route.params;
    const tableHead = [''];
    let tableData = resultNames.map(elt => [<Text style={[styles.text, styles.text_titleScore]}>{elt}</Text>])

    playerListEl.forEach(player => {
        tableHead.push(<Text style={[styles.text, styles.text_titleScore]}>{player.name}</Text>);
        for(let i = 0; i < 16; i++) {
            if(i == 6) {
                tableData[6].push(player.scoreBoard.bonus === 0 ? 'X' : player.scoreBoard.bonus)
            } 
            if (i == 15) {
                tableData[16].push(player.scoreBoard.total)
            }
            if(i >= 6 && i < 15) {
                tableData[i+1].push(player.board[i].score === 0 ? 'X' : player.board[i].score)
            } 
            else if (i < 6) {
                tableData[i].push(player.board[i].score === 0 ? 'X' : player.board[i].score)
            }
        }
        tableData = [...tableData].map( elt => {
            const name = elt[0];
            let newElt = [...elt];
            newElt.shift();
            if (newElt.length > 2) {
                newElt = [...newElt].map(elt => elt == "X" ? 0 : elt)
                newElt = [...newElt].map(number => number === Math.max(...newElt) && number !== 0 ? <Text style={[styles.text, styles.text_bestScore]}>{number}</Text> : number)
                newElt = [...newElt].map(elt => elt == 0 ? "X" : elt)
            };
            return [name, ...newElt]
        })
    })

    const playAgain = () => {
        navigation.navigate('Home');
    }


    return ( 
        <View style={styles.containerBig}>
            <View style={[styles.header]}>
                <Text style={[styles.text, styles.text_name]} >Tableau des scores</Text>
            </View>
            <View style={[styles.container, styles.body]}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                <Rows data={tableData} textStyle={styles.text}/>
            </Table>
            </View>
            <Pressable style={[styles.button, styles.button_startGame]} onPress={playAgain}>
                <Text style={[styles.text]}>
                    Rejouer
                </Text>
            </Pressable>
        </View>
    )
}

const styles = stylesSheet;
