import { StyleSheet, Text, View } from "react-native";


const Dashboard = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: "black" }}>Dashboard content</Text>
        </View>
    );
}

export default Dashboard;

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