import { Button, StyleSheet, Text, View } from "react-native"


interface ITask {
    toDo: IToDo
    index: number
    removeItem: (index: number) => void
    toggleComplete: (index: number) => void
    style: IStyle
}

const Task = (props: ITask) => {

    // const getStyle = () : any => {
    //     var style;
    //     if(props.toDo.completed){
    //         style = {
    //             borderRadius: 50,
    //             backgroundColor: "red",
    //         }
    //     }
    //     else{
    //         style = {
    //             borderRadius: 0,
    //             backgroundColor: "blue",
    //         }
    //     }

    //     return style;
    // }
    return (
    <View style={[styles.listItem,props.style]} key={`${props.index}_${props.toDo.text}`}>
        <Text
            style={[
                styles.task,
                { textDecorationLine: props.toDo.completed ? "line-through" : "none" }
            ]}
        >
            {props.toDo.text}
        </Text>
        <Button
            title={props.toDo.completed ? "Completed" : "Complete"}
            onPress={() => props.toggleComplete(props.index)}
        />
        <Button title="X" onPress={() => props.removeItem(props.index)} color="crimson" />
    </View>
    )
}

export default Task

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "blue",
    // borderRadius: 10
  },
  task: {
    width: 200,
    color: 'white'
  }
});