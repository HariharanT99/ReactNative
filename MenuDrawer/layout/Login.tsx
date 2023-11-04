import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { Screen } from "../constant/Enum";

const Login = ({navigation}:any) => {

    return (
        <View style={styles.container}>
            <Text style={styles.lable}> Login </Text>
            <Button icon="camera" mode="contained" onPress={() => navigation.navigate(Screen.Layout)}>
                Press me
            </Button>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        gap: 20
    },
    lable: {
        fontSize: 20,
        fontWeight: "bold"
    }
})