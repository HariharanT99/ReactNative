import { useEffect, useState } from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import { IMenuItemStyle } from "../model/DrawerModel";
import { MenuType, SideMenuWidth } from "../constant/Enum";
import { activeMenuStyle, defaultMenuStyle, lastMenuStyle, list, nextMenuStyle, previousMenuStyle } from "../constant/Menu";
import MenuContainer from "../drawer/MenuContainer";
import NavigationOutlet from "../navigator/NavigationOutlet";
import { navigate } from "../navigator/Navigator";
import Footer from "./Footer";
import Header from "./Header";
import { HeaderDropdownContext } from "./HeaderDropdownContext";

const screenWidth = Dimensions.get('window').width;


const Layout = ({navigation}:any) => {
    const [menuList, setMenuList] = useState(list);
    const [menuExpanded, setMenuExpanded] = useState(true)

    const [headerDropdownVisible, setHeaderDropdownVisible] = useState(false);

    useEffect(() => {
        onSelectMenu(2);
    }, [])


    const closeMenu = () => setHeaderDropdownVisible(false);

    const onSelectMenu = (index: number) => {
        const newMenuList = [...menuList];
        newMenuList.forEach(m => m.style = setStyle(MenuType.Default))
        if (newMenuList[newMenuList.length - 1])
            newMenuList[newMenuList.length - 1].style = lastMenuStyle;

        newMenuList[index].style = setStyle(MenuType.Active)

        const prevMenu = index - 1;
        if (newMenuList[prevMenu])
            newMenuList[prevMenu].style = setStyle(MenuType.Previous);

        const nextMenu = index + 1;
        if (newMenuList[nextMenu]) {
            newMenuList[nextMenu].style = setStyle(MenuType.Next);

            if (nextMenu === (newMenuList.length - 1)) {
                newMenuList[nextMenu].style.flex = 1;
            }
            else {
                newMenuList[nextMenu].style.flex = 0;
            }
        }
        setMenuList(newMenuList);

        navigate(newMenuList[index].name!)
    }

    const setStyle = (menuType: MenuType): IMenuItemStyle => {
        switch (menuType) {
            case MenuType.Default: {
                return defaultMenuStyle;
                break;
            }
            case MenuType.Active: {
                return activeMenuStyle;
                break;
            }
            case MenuType.Previous: {
                return previousMenuStyle;
                break;
            }
            case MenuType.Next: {
                return nextMenuStyle;
                break;
            }
            default: {
                return defaultMenuStyle;
                break;
            }
        }
    }

    const [menuWidth] = useState(new Animated.Value((SideMenuWidth.MaxWidth/100) * screenWidth))

    const toggleMenuWidth = () => {
        const targetWidth = ((menuExpanded ? SideMenuWidth.MinWidth : SideMenuWidth.MaxWidth) / 100) * screenWidth;

        const animationTiming = 500;

        Animated.timing(menuWidth, {
            toValue: targetWidth,
            duration: animationTiming,
            useNativeDriver: false
        }).start();

        setTimeout(() => {
            setMenuExpanded(!menuExpanded);
        },menuExpanded? 0 : animationTiming)
    }

    return (
        <View style={styles.contaier} onTouchStart={closeMenu}>
            <MenuContainer menuList={menuList} onSelectMenu={onSelectMenu} menuExpanded={menuExpanded} menuWidth={menuWidth}/>
            <View style={styles.layout}>
                <HeaderDropdownContext.Provider value={{ dropdownVisible: headerDropdownVisible, setDropdownVisible: () => setHeaderDropdownVisible(!headerDropdownVisible)}}>
                    <Header setMenuExpanded={() => toggleMenuWidth()} mainNavigator={navigation}/>
                </HeaderDropdownContext.Provider>
                <NavigationOutlet />
                <Footer />
            </View>
        </View>

    );
}

export default Layout;


const styles = StyleSheet.create({
    contaier: {
        display: "flex",
        background: "transparent",
        flexDirection: "row",
        height: "auto",
        flexGrow: 2
    },
    drawerSection: {
        width: "auto",
    },
    drawerItem: {
        width: "100%",
        marginLeft: 0,
        borderRadius: 0,
        color: "red",
        backgroundColor: "#2563EB"
    },
    layout: {
        width: "auto",
        flex: 1
    },
    header: {
        height: 50,
        width: "100%",
        paddingHorizontal: 0,
        justifyContent: "flex-start",
        borderBottomWidth: 3,
        borderBottomColor: "#E5E7EB"
    },
    button: {
        backgroundColor: "red",
        height: 40,
        width: 50,
        padding: 5,
        display: "flex",
        textAlign: "center"
    },
});