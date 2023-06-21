import { StyleSheet, Text, View } from 'react-native';

export default function Header() {

    return (
        <View style={styles.container}>
            <Text style={styles.textFont}>My Header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        height: 80,
        paddingTop: 30
    },
    textFont: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    }
});

