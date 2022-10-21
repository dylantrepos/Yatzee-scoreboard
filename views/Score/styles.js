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
        padding: 0,
        margin: 0,
    },
    header: {   
        width: '100%',
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 10,
        alignItems: 'center',
    },
    body: {
        flex: 3,
    },
    containerButton: {
        width: '100%',
        justifyContent: 'center',
        marginTop: 10
    },
    scoreBoard: {
        width: '100%',
        backgroundColor: 'black',
        marginTop: 20,
        justifyContent: 'center',
        height: 100
    },


    // Button
    button: {
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 80, 
        alignSelf: 'center',
        backgroundColor: 'green',
        padding: 5,
        marginTop: 30,
    },

    // Text
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    text_name: {
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 10,
    },
    text_score: {
        fontSize: 20,
    },
    text_bestScore: {
        color: '#e1e544',
        fontWeight: '700',
    },
    text_titleScore: {
        fontWeight: '700',
    },
}