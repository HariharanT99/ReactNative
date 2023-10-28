import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import AddTodo from "./components/AddTodo";
import ListTask from "./components/ListTask";

export default function App() {
  const [taskName, setText] = useState<string>("");
  const [toDoList, setToDos] = useState<IToDo[]>([]);
  const [error, showError] = useState<Boolean>(false);

  const handleSubmit = (): void => {
    if (taskName.trim()) {
      setToDos([...toDoList, { text: taskName, completed: false, style: { backgroundColor: "blue" } }]);
    }
    else showError(true);
    setText("");
  };

  const handleChange = (value: string): void => {
    if (value.trim()) {
      showError(false);
    }
    else showError(true);
    setText(value);
  }

  const removeItem = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDos(newToDoList);
  };


  const getStyle = (toDo: IToDo): any => {
    var style: IStyle;
    if (toDo.completed) {
      style = {
        backgroundColor: "red",
      }
    }
    else {
      style = {
        backgroundColor: "blue",
      }
    }
    return style;
  }

  const getNextStyle = (fornext: boolean): any => {
    return fornext ? {
      borderTopRightRadius: 50
    }
    :
    {borderBottomRightRadius: 50};
  }

  // const getNextStyle = (fornext: boolean): any => {
  //   return fornext ? {
  //     backgroundColor: "green", borderTopRightRadius: 50
  //   }
  //   :
  //   {backgroundColor: "yellow", borderBottomRightRadius: 50};
  // }

  const toggleComplete = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList[index].completed = !newToDoList[index].completed;
    newToDoList[index].style = getStyle(newToDoList[index]);
    const nextIndex = index + 1;
    if (newToDoList[nextIndex] && !newToDoList[nextIndex].completed && newToDoList[index].completed)
      newToDoList[nextIndex].style = getNextStyle(true);
    const prevIndex = index - 1;
    if (newToDoList[prevIndex] && !newToDoList[prevIndex].completed && newToDoList[index].completed)
      newToDoList[prevIndex].style = getNextStyle(false);
    setToDos(newToDoList);
  };

  const onReset = () => {
    const newToDoList = [...toDoList];
    newToDoList.forEach(t => {t.style = {backgroundColor:"blue"}; t.completed = false});
        console.log(newToDoList);
    setToDos(newToDoList);
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <AddTodo onAddTodo={handleSubmit} value={taskName} onEnterTask={handleChange}></AddTodo>
      {error && (
        <Text style={styles.error}>Error: Input field is empty...</Text>
      )}
      <ListTask removeItem={removeItem} toDoList={toDoList} toggleComplete={toggleComplete} onReset={onReset}></ListTask>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    alignItems: "center"
  },
  title: {
    fontSize: 40,
    marginBottom: 40,
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  addButton: {
    alignItems: "flex-end"
  },
  error: {
    color: "red",
    
  }
});