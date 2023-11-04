import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Button, Divider, IconButton, MD3Colors, Menu, PaperProvider, Text } from "react-native-paper";
import Dropdown from "../components/Dropdown";
import { IDropdownItem } from "../model/DropdownModel";
import { DropdownOptionType, Screen } from "../constant/Enum";

interface IHeader {
    setMenuExpanded: () => void
    mainNavigator: any
    // dropdownVisible: boolean
    // setDropdownVisible: () => void
}

const Header = (props: IHeader) => {

    const MenuLable: ReactNode = (<View style={{flexDirection: "row", gap: 5, justifyContent: "center", alignItems: "center", height: "100%"}}><Avatar.Icon size={40} icon="user" />
        <Text> User Name </Text></View>);

    const dropdownMenu: IDropdownItem[] = [
        {
            title: MenuLable,
            onPress: () => onSelectDropdown(DropdownOptionType.Default),
            appendDivider: true,
            icon: "",
            disable: true,
            optionType: DropdownOptionType.Default
        },
        {
            title: "Profile",
            onPress: () => onSelectDropdown(DropdownOptionType.Profile),
            appendDivider: false,
            icon: "user",
            disable: false,
            optionType: DropdownOptionType.Profile
        },
        {
            title: "Ändra lösenord",
            onPress: () => onSelectDropdown(DropdownOptionType.ChangePassword),
            appendDivider: true,
            icon: "user",
            disable: false,
            optionType: DropdownOptionType.ChangePassword
        },
        {
            title: "Logga ut",
            onPress: () => onSelectDropdown(DropdownOptionType.Logout),
            appendDivider: false,
            icon: "user",
            disable: false,
            optionType: DropdownOptionType.Logout
        },
    ]

    const onSelectDropdown = (optionType: DropdownOptionType) => {
        switch (optionType) {
            case DropdownOptionType.Profile: {
                break;
            }
            case DropdownOptionType.ChangePassword: {
                break;
            }
            case DropdownOptionType.Logout: {
                console.log("hit logout");
                props.mainNavigator.navigate(Screen.Login);
                break;
            }
            default: {
                break;
            }
        }
    }

    return (
        <View style={styles.header}>
        <IconButton
            icon="camera"
            iconColor={MD3Colors.error50}
            size={20}
            onPress={props.setMenuExpanded}
        />
        <View style={styles.actionWrap}>
            <Dropdown MenuLable={MenuLable} MenuList={dropdownMenu}/>
            {/* <Action /> */}
        </View>
    </View>    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        zIndex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0

    },
    header: {
        height: 75,
        width: "100%",
        paddingHorizontal: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 3,
        borderBottomColor: "#E5E7EB",
        overflow: "visible",
        zIndex: 1
    },
    actionWrap: {
        // position: "absolute",
        // flex: 1,
        // left: 0,
        // right: 0,
        // top:0,
        // bottom: 0,
        // display: "flex",
        // flexDirection: "row",
        // alignItems: "center",
        // width: "20%"
    },
    menu: {
        backgroundColor: "red"
    }
})