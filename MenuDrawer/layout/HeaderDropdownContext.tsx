import { createContext } from "react";


interface IHeaderContext {
    dropdownVisible : boolean,
    setDropdownVisible : () => void,
}

export const HeaderDropdownContext = createContext<IHeaderContext>({dropdownVisible: false, setDropdownVisible: () => {}});