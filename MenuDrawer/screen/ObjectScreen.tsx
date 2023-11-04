import { StyleSheet, Text, View } from "react-native";


const ObjectScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: "black" }}>Object content</Text>
        </View>
    );
}

export default ObjectScreen;

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