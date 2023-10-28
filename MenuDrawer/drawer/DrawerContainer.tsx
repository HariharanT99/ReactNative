import { Children, ReactNode } from "react"
import { View } from "react-native"

interface IDrawerConstainer {
    titleNode: ReactNode,
    childern: ReactNode
}

const DrawerContainer = (props: IDrawerConstainer) => {
    return(
        <View>
            <View>
            {props.titleNode}
            </View>
            {props.childern}
        </View>
    )
}