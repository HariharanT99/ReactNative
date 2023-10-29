

interface IMenu {
    lable: string
    iconSource: string
    clickable: boolean
    style: IMenuItemStyle
  }
  
  interface IMenuItemStyle {
    backgroundColor: string
    color: string
    borderTopRightRadius: number
    borderBottomRightRadius: number
    }