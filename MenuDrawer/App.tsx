import { ReactNode, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Drawer, IconButton, MD3Colors, Text } from "react-native-paper";
import DrawerContainer from "./drawer/MenuContainer";
import MenuItem from "./drawer/MenuItem";
import MenuContainer from "./drawer/MenuContainer";

const defaultMenuColor = "#2563EB";

const defaultMenuStyle : IMenuItemStyle = {
  backgroundColor: defaultMenuColor,
  parentBackgroundColor: defaultMenuColor,
  color: "white",
  borderRadius: 0,
  borderBottomRightRadius: 0,
  borderTopRightRadius: 0,
  marginLeft: 0,
  paddingLeft: 25
};

enum MenuType {
  Default,
  Active,
  Previous,
  Next
}

const list: IMenu[] = [
  {
    lable: "",
    clickable: false,
    iconSource: "",
    style: defaultMenuStyle
  },
  {
    lable: "Dashboard",
    clickable: true,
    iconSource: "camera",
    style: defaultMenuStyle
  },
  {
    lable: "Objekt",
    clickable: true,
    iconSource: "camera",
    style: defaultMenuStyle
  },
  {
    lable: "Inspektion",
    clickable: true,
    iconSource: "camera",
    style: defaultMenuStyle
  },
  {
    lable: "Checklista",
    clickable: true,
    iconSource: "camera",
    style: defaultMenuStyle
  },
  {
    lable: "Kund",
    clickable: true,
    iconSource: "camera",
    style: defaultMenuStyle
  },
  {
    lable: "Förvaltare",
    clickable: true,
    iconSource: "camera",
    style: defaultMenuStyle
  },
  {
    lable: "User",
    clickable: true,
    iconSource: "camera",
    style: defaultMenuStyle
  },
  {
    lable: "Inställningar",
    clickable: true,
    iconSource: "camera",
    style: defaultMenuStyle
  },
  {
    lable: "Skyltning",
    clickable: true,
    iconSource: "camera",
    style: defaultMenuStyle
  },
  {
    lable: "Aktivitetslogg",
    clickable: true,
    iconSource: "camera",
    style: defaultMenuStyle
  },
  {
    lable: "",
    clickable: false,
    iconSource: "",
    style: defaultMenuStyle
  },
]

export default function App() {
  // const [active, setActive] = useState(-1);
  const [menuList, setMenuList] = useState(list);

  const onSelectMenu = (index: number) => {
    // setActive(index);
    const newMenuList = [...menuList];
    newMenuList.forEach(m => m.style = setStyle(MenuType.Default))
    newMenuList[index].style = setStyle(MenuType.Active)

    const prevMenu = index - 1;
    if (newMenuList[prevMenu])
      newMenuList[prevMenu].style = setStyle(MenuType.Previous);

    const nextMenu = index + 1;
    if (newMenuList[nextMenu])
      newMenuList[nextMenu].style = setStyle(MenuType.Next);

    // console.log(newMenuList);
    setMenuList(newMenuList);
  }

  const setStyle = (menuType: MenuType): IMenuItemStyle => {
    switch (menuType) {
      case MenuType.Default: {
        return {
          backgroundColor: defaultMenuColor,
          parentBackgroundColor: defaultMenuColor,
          color: "white",
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
          borderRadius: 0,
          marginLeft: 0,
          paddingLeft: 25
        };
        break;
      }
      case MenuType.Active: {
        return {
          backgroundColor: "#F3F4F6",
          parentBackgroundColor: defaultMenuColor,
          color: "black",
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
          borderRadius: 40,
          marginLeft: 10,
          paddingLeft: 15
        };
        break;
      }
      case MenuType.Previous: {
        return {
          backgroundColor: defaultMenuColor,
          parentBackgroundColor: "#F3F4F6",
          color: "white",
          borderRadius: 0,
          borderBottomRightRadius: 40,
          borderTopRightRadius: 0,
          marginLeft: 0,
          paddingLeft: 25
        };
        break;
      }
      case MenuType.Next: {
        return {
          backgroundColor: defaultMenuColor,
          parentBackgroundColor: "#F3F4F6",
          color: "white",
          borderRadius: 0,
          borderBottomRightRadius: 0,
          borderTopRightRadius: 40,
          marginLeft: 0,
          paddingLeft: 25
        };
        break;
      }
      default: {
        //statements; 
        return {
          backgroundColor: defaultMenuColor,
          parentBackgroundColor: defaultMenuColor,
          color: "white",
          borderRadius: 0,
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
          marginLeft: 0,
          paddingLeft: 0
        };
        break;
      }
    }
  }

  return (
    <View style={styles.contaier} onTouchStart={() => { }}>
      {/* <Drawer.Section title="Menu" style={styles.drawerSection}>
        {menuList.map((menu: IDrawerItem, index: number) => (
          <Drawer.Item style={[styles.drawerItem, menu.style]} label={menu.lable} active={active === index} onPress={() => menu.clickable && onSelectMenu(index)} />
        ))}
      </Drawer.Section>
      <IconButton
        icon="camera"
        iconColor={MD3Colors.error50}
        size={20}
        onPress={() => console.log('Pressed')}
      /> */}
      <MenuContainer menuList={menuList} onSelectMenu={onSelectMenu}/>
    </View>
  );
}


const styles = StyleSheet.create({
  contaier: {
    display: "flex",
    background: "transparent"
  },
  drawerSection: {
    width: "60%",
    // backgroundColor: defaultMenuColor
    // borderColor: "red",
    // borderWidth: 5,
    // shadowColor: "grey",
    // shadowOpacity: 0.8,
    // shadowOffset: {height: 5, width: 5}
  },
  drawerItem: {
    width: "100%",
    marginLeft: 0,
    borderRadius: 0,
    color: "red",
    backgroundColor: defaultMenuColor
  }
});