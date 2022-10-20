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
        backgroundColor: 'white',
        borderRadius: 15,
        marginVertical: 15,
        flex: .2,
        border: 1,
        borderColor: 'white',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        alignItems: 'flex-start',
    },
    body: {
        flex: 2,
    },
    containerButton: {
        width: '100%',
        justifyContent: 'center',
        margin: 10,
        flex: .2,
    },

    // Button
    button: {
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 30, 
        alignSelf: 'center',
        backgroundColor: 'green',
        padding: 5,
    },
    button_valid: {
        paddingHorizontal: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
        color: 'black',
    },
    text_turn: {
        color: 'black',
    },
    text_buttonValid: {
        marginLeft: 10,
    },
}