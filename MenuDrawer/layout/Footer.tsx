import { StyleSheet, Text, View } from "react-native";

const Footer = () => {

    return (
        <View style={styles.footer}>
            <Text> Copyright©{new Date().getFullYear()} Hissbesiktningar i Sverige AB </Text>
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    footer: {
        height: 35,
        width: "100%",
        paddingHorizontal: 0,
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 3,
        borderTopColor: "#E5E7EB"
    },
})