import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Drawer, IconButton, MD3Colors } from "react-native-paper";



interface IDrawerItem {
  lable: string
  clickable: boolean
  style: IDrawerStyle
}

interface IDrawerStyle {
  backgroundColor: string
  borderTopRightRadius: number
  borderBottomRightRadius: number
}

const defaultMenuColor = "#2563EB";

const defaultMenuStyle : IDrawerStyle = {
  backgroundColor: defaultMenuColor,
  borderBottomRightRadius: 0,
  borderTopRightRadius: 0
};

enum MenuType {
  Default,
  Active,
  Previous,
  Next
}

const list: IDrawerItem[] = [
  {
    lable: "",
    clickable: false,
    style: defaultMenuStyle
  },
  {
    lable: "Dashboard",
    clickable: true,
    style: defaultMenuStyle
  },
  {
    lable: "Objekt",
    clickable: true,
    style: defaultMenuStyle
  },
  {
    lable: "Inspektion",
    clickable: true,
    style: defaultMenuStyle
  },
  {
    lable: "Checklista",
    clickable: true,
    style: defaultMenuStyle
  },
  {
    lable: "Kund",
    clickable: true,
    style: defaultMenuStyle
  },
  {
    lable: "Förvaltare",
    clickable: true,
    style: defaultMenuStyle
  },
  {
    lable: "User",
    clickable: true,
    style: defaultMenuStyle
  },
  {
    lable: "Inställningar",
    clickable: true,
    style: defaultMenuStyle
  },
  {
    lable: "Skyltning",
    clickable: true,
    style: defaultMenuStyle
  },
  {
    lable: "Aktivitetslogg",
    clickable: true,
    style: defaultMenuStyle
  },
  {
    lable: "",
    clickable: false,
    style: defaultMenuStyle
  },
]

export default function App() {
  const [active, setActive] = useState(-1);
  const [menuList, setMenuList] = useState(list);

  const onSelectMenu = (index: number) => {
    setActive(index);
    const newMenuList = [...menuList];
    newMenuList.forEach(m => m.style = setStyle(MenuType.Default))
    newMenuList[index].style = setStyle(MenuType.Active)

    const prevMenu = index - 1;
    if (newMenuList[prevMenu])
      newMenuList[prevMenu].style = setStyle(MenuType.Previous);

    const nextMenu = index + 1;
    if (newMenuList[nextMenu])
      newMenuList[nextMenu].style = setStyle(MenuType.Next);

    console.log(newMenuList);
    setMenuList(newMenuList);
  }

  const setStyle = (menuType: MenuType): IDrawerStyle => {
    switch (menuType) {
      case MenuType.Default: {
        return {
          backgroundColor: "#2563EB",
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0
        };
        break;
      }
      case MenuType.Active: {
        return {
          backgroundColor: "transparent",
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0
        };
        break;
      }
      case MenuType.Previous: {
        return {
          backgroundColor: "#2563EB",
          borderBottomRightRadius: 40,
          borderTopRightRadius: 0
        };
        break;
      }
      case MenuType.Next: {
        return {
          backgroundColor: "#2563EB",
          borderBottomRightRadius: 0,
          borderTopRightRadius: 40
        };
        break;
      }
      default: {
        //statements; 
        return {
          backgroundColor: "#2563EB",
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0
        };
        break;
      }
    }
  }

  return (
    <View style={styles.contaier} onTouchStart={() => { }}>
      <Drawer.Section title="Menu" style={styles.drawerSection}>
        {menuList.map((menu: IDrawerItem, index: number) => (
          <Drawer.Item style={[styles.drawerItem, menu.style]} label={menu.lable} active={active === index} onPress={() => menu.clickable && onSelectMenu(index)} />
        ))}
      </Drawer.Section>
      <IconButton
        icon="camera"
        iconColor={MD3Colors.error50}
        size={20}
        onPress={() => console.log('Pressed')}
      />
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
    // backgroundColor: "#2563EB"
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
    backgroundColor: "#2563EB"
  }
});