import React, { ReactNode, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Divider, Menu, PaperProvider } from "react-native-paper";
import { HeaderDropdownContext } from "../layout/HeaderDropdownContext";
import { IDropdownItem } from "../model/DropdownModel";


interface IDropdown {
    MenuLable: ReactNode,
    MenuList: IDropdownItem[]
}

const Dropdown = (props: IDropdown) => {

    const dropdownContext = useContext(HeaderDropdownContext);

    return (
        <PaperProvider>
            <View style={styles.container}>
                <Menu
                    style={styles.menu}
                    visible={dropdownContext.dropdownVisible}
                    anchor={<View onTouchEnd={dropdownContext.setDropdownVisible}>{props.MenuLable}</View>}>
                    {props.MenuList && props.MenuList.map((menu: IDropdownItem, index: number): ReactNode => {
                        return menu.appendDivider ? (
                            <View>
                                <Menu.Item  disabled={menu.disable} style={styles.menuItem} leadingIcon={menu.icon} onPress={() => menu.onPress(menu.optionType)} title={menu.title} />
                                <Divider />
                            </View>
                        ) :
                            (
                                <Menu.Item disabled={menu.disable} style={styles.menuItem} leadingIcon="redo" onPress={() => menu.onPress(menu.optionType)} title={menu.title} />
                            );
                    })}
                </Menu>
            </View>
        </PaperProvider>
    );
}

export default Dropdown;

const styles = StyleSheet.create({
    container: {
        // position: "absolute",
        // // justifyContent: "center",
        // // flex: 1,
        // right: 0,
        // top: 15
    },
    menu: {
        left: -150,
        top: 70,
        width: 250,
        padding: 0,
        zIndex: 10000
    },
    menuItem: {
        paddingLeft: 15,
        height: 60
    }
})