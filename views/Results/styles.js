const text = require('../../styles/text');

export default {
    containerBig: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    // Containers
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: 'green',
        padding: 0,
        margin: 0,
    },
    header: {   
        width: '100%',
        backgroundColor: 'green',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        alignItems: 'flex-start',
    },
    body: {
        backgroundColor: 'red',
        flex: 3,
    },
    containerButton: {
        width: '100%',
        justifyContent: 'center',
        margin: 10
    },
    scoreBoard: {
        width: '100%',
        backgroundColor: 'black',
        marginTop: 20,
        justifyContent: 'center',
        height: 100
    },
    firstPos: {
        width: '100%',
        backgroundColor: '#ffe029',
    },
    SecondPos: {
        width: '100%',
        backgroundColor: '#8c9ba0',
    },
    ThirdPos: {
        width: '100%',
        backgroundColor: '#aa4a1e',
    },
    podium_container: {
        backgroundColor: 'blue',
        height: 250,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    podium_stand: {
        width: '30%',
        margin: 5,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    podium_content: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 5,
    },
    podium_second: {
        backgroundColor: '#8c9ba0',
        height: '45%',
    },
    podium_first: {
        backgroundColor: '#ffe029',
        height: '60%',
    },
    podium_third: {
        backgroundColor: '#aa4a1e',
        height: '35%',
    },
    podium_number: {
        fontSize: 30,
        marginTop: 10,
    },
    podium_text: {
        color: 'white',
    },


    // Button
    button: {
        backgroundColor: 'orange',
        borderRadius: 10,
        width: '100%',
        alignSelf: 'center',
        backgroundColor: 'green',
        padding: 5,
    },

    // Text
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    text_name: {
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 10,
    },
    text_score: {
        fontSize: 20,
    },
}