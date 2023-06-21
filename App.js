import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import ItemList from './components/ItemList';
import AddTodo from './components/AddTodo';

export default function App() {


  const [item, setItem] = useState([
    { key: 1, name: 'bilal' },
    { key: 2, name: 'sultan' },
    { key: 3, name: 'salman' },
  ])


  const deleteItem = (key) => {
    setItem(prev => {
      return prev.filter(item => item.key != key)
    })
  }

  const addTodo = (text) => {

    if (text.length > 3) {
      setItem(prevItem => {
        return [{ key: Math.random().toString(), name: text, }, ...prevItem]
      })
    } else {
      Alert.alert('Opps', 'must be more than 3 char long', [
        { text: 'understood', onPress: () => console.log('colsed') }
      ])
    }
  }

  console.log(item)
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content} >
          <AddTodo addTodo={addTodo} />
          <View style={styles.list}>
            <FlatList
              data={item}
              renderItem={({ item }) => {
                return (
                  <ItemList key={item.key} item={item} deleteItem={deleteItem} />
                )
              }}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  list: {
    flex: 1,
    marginTop: 10,
  }
});
