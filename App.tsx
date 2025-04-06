import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Todoinputcomponent from './src/components/Todoinputcomponent';
import Todolist from './src/components/Todolist';
import { Todo } from './src/types';


export default function App(): React.JSX.Element {
  const [todos, setTodos] = React.useState<Todo[]>([]);

 

  const Addtodo = (text: string) => {
    console.log(text);
    setTodos([...todos, {text, id: Date.now(), completed: false}]);
  }
  
  const deletetodo = (id: number) => {
    setTodos(todos.filter(item => item.id !== id))
  }
  const edittodo = (id: number, newtext: string) =>{
    setTodos(todos.map(item => item.id === id ? {...item, text: newtext} : item))
  }
  const completetodo = (id: number) => {
    setTodos(todos.map(item => item.id === id ? {...item, completed: !item
      .completed} : item))
  }

  return (
    <View style={styles.container}> 
      <Text style={styles.Headertext}>TODO App</Text>
      <Todoinputcomponent  addTodo={Addtodo}/>
      <Todolist Onedittodo={edittodo} Oncompletetodo ={completetodo} Ondeletetodolist={deletetodo} todolist={todos}/>
      
    </View>
  );
}

const styles = StyleSheet.create(
  {
  container: {
    flex:1,
    padding:20,
    // backgroundColor: '#9EC6F3'
    backgroundColor: '#BDDDE4',
  },
  Headertext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'system-ui',
    // color: 'blue'
    marginBottom: 20
  }
}
);