import { IMenu, IMenuItemStyle } from "../model/DrawerModel";
import { Screen } from "./Enum";


const defaultMenuColor = "#2563EB";

const minHeight = 40;

export const defaultMenuStyle: IMenuItemStyle = {
    backgroundColor: defaultMenuColor,
    parentBackgroundColor: defaultMenuColor,
    color: "white",
    borderRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    marginLeft: 0,
    paddingLeft: 25,
    minHeight: minHeight
};

export const lastMenuStyle: IMenuItemStyle = {
    backgroundColor: defaultMenuColor,
    parentBackgroundColor: defaultMenuColor,
    color: "white",
    borderRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    marginLeft: 0,
    paddingLeft: 25,
    flex: 1
    // minHeight: "100%",
};

export const activeMenuStyle: IMenuItemStyle = {
    backgroundColor: "#F3F4F6",
    parentBackgroundColor: defaultMenuColor,
    color: "black",
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderRadius: 40,
    marginLeft: 10,
    paddingLeft: 15,
    minHeight: minHeight
};

export const previousMenuStyle: IMenuItemStyle = {
    backgroundColor: defaultMenuColor,
    parentBackgroundColor: "#F3F4F6",
    color: "white",
    borderRadius: 0,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 0,
    marginLeft: 0,
    paddingLeft: 25,
    minHeight: minHeight
};

export const nextMenuStyle: IMenuItemStyle = {
    backgroundColor: defaultMenuColor,
    parentBackgroundColor: "#F3F4F6",
    color: "white",
    borderRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 40,
    marginLeft: 0,
    paddingLeft: 25,
    minHeight: minHeight
  };

export const list: IMenu[] = [
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
        style: defaultMenuStyle,
        name: Screen.Dashboard
    },
    {
        lable: "Objekt",
        clickable: true,
        iconSource: "camera",
        style: defaultMenuStyle,
        name: Screen.ObjectScreen

    },
    {
        lable: "Inspektion",
        clickable: true,
        iconSource: "camera",
        style: defaultMenuStyle,
        name: Screen.Inspection
    },
    {
        lable: "Checklista",
        clickable: true,
        iconSource: "camera",
        style: defaultMenuStyle,
        name: Screen.Checklist
    },
    {
        lable: "Kund",
        clickable: true,
        iconSource: "camera",
        style: defaultMenuStyle,
        name: Screen.Dashboard
    },
    {
        lable: "Förvaltare",
        clickable: true,
        iconSource: "camera",
        style: defaultMenuStyle,
        name: Screen.Dashboard
    },
    {
        lable: "User",
        clickable: true,
        iconSource: "camera",
        style: defaultMenuStyle,
        name: Screen.Dashboard
    },
    {
        lable: "Inställningar",
        clickable: true,
        iconSource: "camera",
        style: defaultMenuStyle,
        name: Screen.Dashboard
    },
    {
        lable: "Skyltning",
        clickable: true,
        iconSource: "camera",
        style: defaultMenuStyle,
        name: Screen.Dashboard
    },
    {
        lable: "Aktivitetslogg",
        clickable: true,
        iconSource: "camera",
        style: defaultMenuStyle,
        name: Screen.Dashboard
    },
    {
        lable: "",
        clickable: false,
        iconSource: "",
        style: lastMenuStyle
    },
]