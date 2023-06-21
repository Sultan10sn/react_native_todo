import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const AddTodo = ({ addTodo }) => {

    const [text, setText] = useState('')

    const HandleChangeText = (val) => {
        setText(val)
    }

    return (
        <View>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={HandleChangeText}
                    value={text}
                    placeholder="new todo..."
                />
                <TouchableOpacity style={styles.btn} onPress={() => addTodo(text)} color='#333' title='Add todo' >
                    <Text style={styles.btnText}>Add todo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        marginBottom: 10,
        borderBottomWidth: 1,
        padding: 10,
    },
    btn: {
        backgroundColor: '#333',
        padding: 10
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 400,
    }
});




export default AddTodo