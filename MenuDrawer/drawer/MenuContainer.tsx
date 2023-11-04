import { Animated, Dimensions, StyleSheet, View } from "react-native"
import { Icon, MD3Colors } from "react-native-paper"
import { IMenu } from "../model/DrawerModel"
import MenuItem from "./MenuItem"
import { SideMenuWidth } from "../constant/Enum"
import { useState } from "react"

interface IMenuContainer {
    menuList: IMenu[]
    onSelectMenu: (index: number) => void
    menuExpanded: boolean
    menuWidth: Animated.Value
}


const MenuContainer = (props: IMenuContainer) => {

    return (
        <Animated.View style={{width: props.menuWidth}}>
            <View style={[styles.container]}>
                <View style={styles.header}>
                    <Icon
                        source="abacus"
                        color={MD3Colors.error0}
                        size={20}
                    />
                </View>
                {props.menuList && props.menuList.map((menu: IMenu, index: number) => (
                    <MenuItem menu={menu} onSelectMenu={props.onSelectMenu} index={index} menuExpanded={props.menuExpanded} />
                ))}
            </View>
        </Animated.View>
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