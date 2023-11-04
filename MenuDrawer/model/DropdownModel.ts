import { ReactNode } from "react"
import { DropdownOptionType } from "../constant/Enum"

export interface IDropdownItem {
    onPress: (optionType: DropdownOptionType) => void
    title: ReactNode
    appendDivider: boolean
    icon: string
    disable: boolean
    optionType: DropdownOptionType
}

// export interface IDropdownItemList {
//     Menu: IDropdownItem[]
// }