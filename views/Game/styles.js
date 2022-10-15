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
}