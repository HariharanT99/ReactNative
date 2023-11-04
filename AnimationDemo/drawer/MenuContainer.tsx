import { StyleSheet, View } from "react-native"
import { Icon, MD3Colors } from "react-native-paper"

interface IMenuContainer {
    menuExpanded: boolean
}

const MenuContainer = (props: IMenuContainer) => {
    return (
        <View style={[styles.container, { width: props.menuExpanded ? "25%" : "6%" }]}>
            <View style={styles.header}>
                <Icon
                    source="camera"
                    color={MD3Colors.error0}
                    size={20}
                />
            </View>
        </View>
    )
}

export default MenuContainer;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#F3F4F6",
        display: "flex",
        flexDirection: "column",
    },
    header: {
        backgroundColor: "#2563EB",
        minHeight: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});