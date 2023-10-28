import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";


interface IAddTodo{
    onAddTodo:() => void
    value: string
    onEnterTask:(taskName: string) => void
}

const AddTodo = (props: IAddTodo) => {
    return (      
    <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Enter your todo task..."
          value={props.value}
          onChangeText={e => {
            props.onEnterTask(e);
          }}
          style={styles.inputBox}
        />
        <Button title="Add Task" onPress={() => {props.onAddTodo()}} />
      </View>
      );
}

export default AddTodo;
const styles = StyleSheet.create({
    
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  
  inputBox: {
    width: 200,
    borderColor: "purple",
    borderRadius: 8,
    borderWidth: 2,
    paddingLeft: 8
  },
});