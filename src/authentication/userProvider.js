import {createContext} from "react";
import {useLocalState} from "./useLocalStorage";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [jwt, setJwt] = useLocalState("", "jwt");
    const value = {jwt, setJwt};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};


export {UserProvider, UserContext};