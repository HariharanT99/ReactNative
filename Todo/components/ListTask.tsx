import { Button, StyleSheet, Text, View } from "react-native";
import Task from "./Task";

interface IListTask {
    toDoList: IToDo[]
    removeItem: (index: number) => void
    toggleComplete: (index: number) => void
    onReset: () => void
}

const ListTask = (props: IListTask) => {

    // const getStyle = (toDo: IToDo): any => {
    //     var style: IStyle;
    //     if (toDo.completed) {
    //         style = {
    //             backgroundColor: "red",
    //         }
    //     }
    //     else {
    //         style = {
    //             backgroundColor: "blue",
    //         }
    //     }

    //     return style;
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Your Tasks :</Text>

            <View style={styles.button}>
                <Button title="Reset" onPress={props.onReset} color="crimson" />
            </View>
            {props.toDoList.length === 0 && <Text>No to do task available</Text>}
            <View style={styles.listWrap}>
            {props.toDoList.map((toDo: IToDo, index: number) => (
                <Task index={index} removeItem={props.removeItem} toDo={toDo} toggleComplete={props.toggleComplete} key={index} style={toDo.style}></Task>
            ))}
            </View>
        </View>
    );

}
export default ListTask

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 20,
        marginBottom: 20,
        color: "purple"
    },
    container: {
        padding: 35,
        paddingLeft: 100,
        alignItems: "center"
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 10
    },
    task: {
        width: 200
    },
    button: {
        paddingBottom: 50
    },
    listWrap: {
        backgroundColor: "red"
    }
});