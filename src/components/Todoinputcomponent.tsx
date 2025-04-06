import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

interface TodoinputcomponentProps {
    addTodo: (text: string) => void;
}
const Todoinputcomponent : React.FC<TodoinputcomponentProps> = ({addTodo}) => {
    const [newTodo, setNewTodo] = React.useState('');
    const handleAddTodo = () => {
    if(newTodo.trim()){
        addTodo(newTodo.trim());
        setNewTodo('');
    }
    }
  return (
    <View style={styles.container}>
      <TextInput  value={newTodo} onChangeText={setNewTodo} placeholder=" Add a new Todo.." style={styles.input}></TextInput>
      <TouchableOpacity style={styles.addTodobutton} onPress={handleAddTodo} activeOpacity={0.7}>
        <Text style={{color:'white', fontWeight:'bold', fontSize:13}}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 20
    },
    input: {
      height: 50,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        borderWidth:1,
        borderRadius:30,
        borderColor:"#A4C8E1",
        backgroundColor: '#DAEFF7',
        // paddingHorizontal:15,
        // paddingVertical:5,
        marginRight:5,
        shadowOpacity: 1,
    },
    addTodobutton: {
        // color: 'white',
        height: 50,
        width: '20%',
        backgroundColor: 'black',
        // paddingHorizontal: 15,
        // paddingVertical: 5,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center'
        ,
        shadowOpacity: 2,
        shadowRadius: 5,
        
    }
});
export default Todoinputcomponent;
