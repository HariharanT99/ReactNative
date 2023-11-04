import { Screen } from "../constant/Enum"


export interface IMenu {
  lable: string
  iconSource: string
  clickable: boolean
  style: IMenuItemStyle
  name?: Screen
}

export interface IMenuItemStyle {
  backgroundColor: string
  parentBackgroundColor: string
  color: string
  borderTopRightRadius: number
  borderBottomRightRadius: number
  borderRadius: number
  marginLeft: number
  paddingLeft: number
  minHeight?: number
  flex?: number
}