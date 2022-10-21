import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerBig: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
      container: {
          height: '100%',
          width: '100%',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
      },
      header: {
          height: '100%',
          width: '100%',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
      },
      standard: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
      },
      title: {
          fontSize: 24,
          fontWeight: '700',
      },
      title_yatzhee: {
          color: 'black',
          fontSize: 34,
          fontWeight: '700',
          borderWidth: 1,
          borderColor: 'white',
          borderRadius: 10,
          marginBottom: 50,
          padding: 30,
          backgroundColor: 'white',
      },
      subtitle: {
          marginTop: 10,
          marginBottom: 30,
      },
      
      containerButton: {
        padding: 30
      },
      containerButton_start: {
      },
      button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      button_startGame: {
        backgroundColor: 'green',
        marginTop: 20,
      },
      text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        padding: 0,
        margin: 0,
      },
      text_button: {
        marginLeft: 15,
      }

});