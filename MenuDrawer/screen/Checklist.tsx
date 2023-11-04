import { StyleSheet, Text, View } from "react-native";


const Checklist = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: "black" }}>Checklist content</Text>
        </View>
    );
}

export default Checklist;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
        width: "auto",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F3F4F6"
    }
});