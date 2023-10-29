import { Children, ReactNode } from "react"
import { StyleSheet, View } from "react-native"
import { Icon, MD3Colors } from "react-native-paper"
import MenuItem from "./MenuItem"

interface IMenuContainer {
    menuList: IMenu[]
    onSelectMenu: (index: number) => void
}

const MenuContainer = (props: IMenuContainer) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon
                    source="camera"
                    color={MD3Colors.error0}
                    size={20}
                />
            </View>

            {props.menuList.map((menu: IMenu, index: number) => (
                <MenuItem menu={menu} onSelectMenu={props.onSelectMenu} index={index}/>
            ))}
        </View>
    )
}

export default MenuContainer;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "40%",
        backgroundColor: "#F3F4F6"
    },
    header: {
        backgroundColor: "#2563EB",
        minHeight: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});