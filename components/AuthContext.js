import React, {createContext, useContext, useEffect, useState} from "react";
import Cookies from 'js-cookie';

import api from '../services/api';
import Router from "next/router";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [snippet, setSnippet] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
            const token = Cookies.get('token')
            if (token) {
                console.log('Got a token in the cookies, lets see if it is valid')
                api.defaults.headers.Authorization = `Bearer ${token}`
                const { data: user } = await api.get('api/user/me')
                if (user) setUser(user);
                user.token = token;
            }
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    const login = async (email, password) => {
        const { data: token } = await api.post('api/login', JSON.stringify({
            email: email,
            password: password
        }))
        if (token) {
            console.log('Got token')
            Cookies.set('token', token.token, { expires: 60 })
            api.defaults.headers.Authorization = `Bearer ${token.token}`
            const { data: user } = await api.get('api/user/me')
            setUser(user)
            user.token = token.token
            await Router.push('/')
            console.log('Got user', user)
        }
    }

    const signup = async (email, password, username) => {
        const signup = await api.post('api/signup', JSON.stringify({
            email: email,
            username: username,
            password: password
        }))
        await Router.push('/user/login')
    }

    const createSnippet = async (code, lang, checked) => {
        const token = Cookies.get('token')
        if (token) {
            api.defaults.headers.Authorization = `Bearer ${token}`
        }
        const { data: slug } = await api.post('api/create', JSON.stringify({
            code: code,
            lang: lang,
            private: checked
        }))
        await Router.push(`/${slug.slug}`)
    }

    const logout = () => {
        Cookies.remove('token')
        setUser(null)
        window.location.pathname = 'user/login'
    }

    async function getUserToken() {
        return userToken;
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, snippet, login, loading, logout, signup, createSnippet }}>
            {children}
        </AuthContext.Provider>
    );
}

export default function useAuth() {
    return useContext(AuthContext)
};