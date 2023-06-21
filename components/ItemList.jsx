import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const ItemList = ({ item, deleteItem }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{item.name}</Text>
            <TouchableHighlight style={styles.btn} onPress={() => deleteItem(item.key)} >
                <Text style={styles.btnTextStyle}>Delete</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 6,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#333',
        borderRadius: 5,
        borderColor: 'corel',
        marginVertical: 10,
    },
    btn: {
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 10,
    },
    textStyle: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 600,
    },
    btnTextStyle: {
        fontSize: 15,
        color: '#333'
    }
});


export default ItemList