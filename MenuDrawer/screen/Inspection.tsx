import { StyleSheet, Text, View } from "react-native";


const Inspection = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: "black" }}>Inspection content</Text>
        </View>
    );
}

export default Inspection;

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