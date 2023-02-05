import { createContext, useState } from "react";

export const UserData = createContext(null);

function Context({ children }) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <UserData.Provider value={{ loggedIn, setLoggedIn, email, setEmail, password, setPassword }}>
            {children}
        </UserData.Provider>
    );
}

export default Context
