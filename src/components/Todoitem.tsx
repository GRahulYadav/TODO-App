import  React from  'react' ;
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Todo } from 'G:/Project1/src/types/index';
import Editcomponent from './Editcomponent';
interface TodoitemProps {
    todo: Todo;
    Ondelete: () => void;
    Oncomplete:() => void;
    onedittodo:(newtext: string) => void;
}
const Todoitem: React.FC<TodoitemProps> = ({ todo, Ondelete , Oncomplete, onedittodo}) => {
    const [isEditing, setIsEditing] = React.useState(false);
const handleEdit = (newtext: string) => {
    onedittodo(newtext);
    setIsEditing(false);
}
    if(isEditing) {
        return <Editcomponent todo={todo} Onsave={handleEdit} Oncancel={()=> setIsEditing(false)}/>;
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={Oncomplete} style={styles.todotext} activeOpacity={0.1}>
                <Text style={[styles.text, todo?.completed && styles.completed]}>{todo.text}</Text>
            </TouchableOpacity>
            <View style={styles.btncontainer}>
                <TouchableOpacity style={styles.editbtn} onPress={() => setIsEditing(!isEditing)} disabled={todo?.completed} activeOpacity={0.8}>
                    <Text style={{color:'white', fontWeight:'bold'}}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Ondelete} style={styles.deletebtn} activeOpacity={0.8}>
                    <Text style={{color:'white', fontWeight:'bold'}}>Delete</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft:15,
        // marginRight:150,
        paddingVertical: 10,
        marginBottom: 12,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        // backgroundColor: '#BDDDE4',
        backgroundColor: '#DAEFF7',
        // alignItems: 'center',
        // borderWidth: 1, 
        borderRadius: 5,
        // borderBottomColor: '#cccccc',
    },
    todotext:{
        flex:1,
    },
    text: {
        // flex:1,
        fontSize: 15,
        fontWeight: '500',
        
    },
    completed: {
        textDecorationLine: 'line-through',
        color:'grey',
        fontWeight:'400'
        },
    btncontainer: {
    flexDirection: 'row',
    },
    editbtn: {
        margin: 2,
       padding: 15,
       borderRadius: 20,
         backgroundColor: '#008000',
         height: 35,
        width: 70,
        paddingHorizontal: 15,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deletebtn: {
        margin: 2,
        padding: 15,
        borderRadius: 20,
        backgroundColor: '#D2042D',
        height: 35,
        width: 80,
        paddingHorizontal: 15,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textbtn:{
        fontSize: 12,
        color: '#fff',
        fontWeight:'bold'
    }

});
export default Todoitem;