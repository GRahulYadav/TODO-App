
import  React from  'react' ;
import { ScrollView, StyleSheet } from 'react-native';
import { Todo } from 'G:/Project1/src/types/index';
import Todoitem from './Todoitem';
interface TodolistProps {
todolist: Todo[];
Ondeletetodolist: (id: number)=> void;
Oncompletetodo: (id: number)=> void;
Onedittodo: (id: number, newtext: string)=> void;
}

const Todolist: React.FC<TodolistProps> = ({todolist, Ondeletetodolist, Oncompletetodo, Onedittodo}) => {
    return (
        <ScrollView style={styles.container}>
            {
                todolist.map(todo =>  
                    <Todoitem key={todo.id} 
                    Oncomplete = {()=> Oncompletetodo(todo.id)}
                   Ondelete = {() => Ondeletetodolist(todo.id)} 
                   onedittodo= {newtext=> Onedittodo(todo?.id, newtext)}
                    todo={todo}
                    
                    />
                    
                )
            }
        </ScrollView>
    );
}
const styles = StyleSheet.create({
container: {
    flex:1
}
    
});
export default Todolist;