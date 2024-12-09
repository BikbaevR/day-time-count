import {createContext, useState} from "react";
import { logger } from '../static_scripts/tools/logger'
import * as SecureStore from "expo-secure-store";
import {saveToSecureStore} from "../secureStore/SecureStore";
import {generateId} from "../static_scripts/tools/Tools";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(null);
    const [authorized, setAuthorized] = useState(false);
    const [storedValue, setStoredValue] = useState(null);
    const [user, setUser] = useState(null);


    const tempData = [
        {
            login: 'rafael',
            password: '123456',
        },
        {
            login: 'admin',
            password: '123456',
        },
        {
            login: '1',
            password: '1',
        }
    ]

    const _checkLoginData = ({ loginValue, passwordValue}) => {

        logger.writeLog("checkLoginData | login  | data --> " + loginValue)

        const isValid = tempData.some(
            (item) => item.login === loginValue && item.password === passwordValue
        );
        if (isValid) {
            logger.writeLog(`checkLoginData | user with login [${loginValue}] authorized`);
            return true;
        }
        logger.writeLog(`checkLoginData | user with login [${loginValue}] not authorized`);
        return false;
    };

    const login = ({loginValue, passwordValue}) => {

        logger.writeLog("login  | data --> " + loginValue)

        if(_checkLoginData({loginValue, passwordValue})){
            setAuthorized(true);
            setUser(loginValue);
            saveToSecureStore('userToken', generateId()).then(r => {logger.writeLog("Авторизация завершена и токен записан")})
        }
        else{
            logger.writeLog("login | error")
        }
    }

    const logout = () => {
        setAuthorized(false);
        setUser(null)
        
    }

    const _checkLoginName = (loginName) => {
        return !tempData.some((item) => item.login === loginName);
    };

    const register = (registerData) => {
        if(_checkLoginName(registerData.login)){
            logger.writeLog(`register _checkLoginName is true`);
            tempData.push({
                login: registerData.login,
                password: registerData.password,
            })
            logger.writeLog(`register | user with login [${registerData.login}] registered`);
            return true;
        }
        logger.writeLog(`register _checkLoginName is false`);
        logger.writeLog(`register | user with login [${registerData.login}] not registered`);
        return false;
    }

    return (
        <AuthContext.Provider value={{ token, setToken, authorized, user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    )
}