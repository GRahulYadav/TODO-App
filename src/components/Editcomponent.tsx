
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import React, { useState } from 'react';
import { Todo } from 'G:/Project1/src/types/index';

interface EditcomponentProps {
  todo: Todo;
  Oncancel : () => void;
  Onsave : (newtext: string) => void;
}

const Editcomponent : React.FC<EditcomponentProps> = ({Oncancel, Onsave,todo}) => {
  const [newtext, setNewtext] = useState(todo?.text);
  const handleSave = () => {
  if(newtext.trim()){
      Onsave(newtext.trim());
  }
  }
return (
    <View style={styles.container}>
      <TextInput value={newtext} onChangeText={setNewtext} style={styles.input} />
      <View style={styles.btncontainer}>
      <TouchableOpacity onPress={Oncancel} style={styles.cancelbtn} activeOpacity={0.8}>
                          <Text style={{color:'white', fontWeight:'bold'}}>Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={handleSave} style={styles.savebtn} activeOpacity={0.8}>
                          <Text style={{color:'white', fontWeight:'bold'}}>Save</Text>
                      </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft:15,
        paddingVertical: 10,
        marginBottom: 12,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        backgroundColor: '#DAEFF7',

        borderRadius: 5,
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
        marginRight:5,
    },

    btncontainer: {
      flexDirection: 'row',
      },

      savebtn: {
        margin: 2,
       padding: 15,
       borderRadius: 20,
         backgroundColor: '#1E90FF',
         height: 35,
        width: 70,
        paddingHorizontal: 15,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cancelbtn: {
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
}
);

export default Editcomponent;


