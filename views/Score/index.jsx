import React, { useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { View } from 'react-native';
import stylesSheet from './styles';

export default Score = ({ navigation, route }) => {

    const { playerListEl } = route.params;
    const tableHead = [''];
    const tableData = [
        ['1'], ['2'], ['3'], ['4'], ['5'], ['6'],
        ['bonus'], ['pair'], ['2x pair'], ['Brelan'], ['Carré'], ['Full'], ['Sm suite'], ['Lg suite']
        , ['chance'], ['yathzee'], ['total']
    ];

    playerListEl.forEach(player => {
        tableHead.push(player.name);
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
    })


    return ( 
        <View style={styles.containerBig}>
            <View style={[styles.header]}>
                <Text style={[styles.text, styles.text_name]} >Scores...</Text>
            </View>
            <View style={[styles.container, styles.body]}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                <Rows data={tableData} textStyle={styles.text}/>
            </Table>
            </View>
        </View>
    )
}

const styles = stylesSheet;
