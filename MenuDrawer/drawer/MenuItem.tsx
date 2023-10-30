import { StyleSheet, View } from "react-native";
import { Icon, IconButton, MD3Colors, Text } from "react-native-paper";


interface IMenuItem {
    menu: IMenu
    index: number
    onSelectMenu: (index: number) => void
}

const MenuItem = (props: IMenuItem) => {
    return (
        <View style={[{backgroundColor: props.menu.style.parentBackgroundColor}]}>
            <View style={[styles.menuItemContainer, props.menu.style]} onTouchStart={() => props.menu.clickable && props.onSelectMenu(props.index)} key={props.index}>
                <View style={styles.icon}>
                    <Icon
                        source={props.menu.iconSource}
                        color={MD3Colors.error0}
                        size={20}
                    />
                </View>
                <Text style={[styles.lable, { color: props.menu.style.color }]}>{props.menu.lable}</Text>
            </View>
        </View>
    )
}

export default MenuItem;

const styles = StyleSheet.create({
    // parentMenuItemContainer: {
    //     paddingLeft:5
    // },
    menuItemContainer: {
        minHeight: 30,
        display: "flex",
        flexDirection: "row",
        // justifyContent: "space-evenly",
        gap: 20,
        // paddingHorizontal: 25,
        // paddingVertical: 25,
        padding: 25,
    },
    lable: {
        color: "white",
        width: "60%"
    },
    icon: {
        // width: "20%"
    }
});