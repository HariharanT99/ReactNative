

interface IMenu {
    lable: string
    iconSource: string
    clickable: boolean
    style: IMenuItemStyle
  }
  
  interface IMenuItemStyle {
    backgroundColor: string
    parentBackgroundColor: string
    color: string
    borderTopRightRadius: number
    borderBottomRightRadius: number
    borderRadius: number
    marginLeft: number
    paddingLeft: number
  }