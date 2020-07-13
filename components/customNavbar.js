import useAuth from "./AuthContext";
import useSWR from "swr";
import api from "../services/api";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Button from "@material-ui/core/Button";
import Router from 'next/router';
import styles from './css/navbar.module.css';

export default function Navbar() {
    const {user, loading, logout} = useAuth();
    const { data: { data: users } = {}, isValidating } = useSWR(loading ? false : 'api/users', api.get)

    const showSkeleton = isValidating || loading

    const handleLogout = () => {
        if (!user) {
            Router.push('/user/login')
        } else {
            logout();
        }
    }

    return (
        <AppBar position="static" color="#333">
            <Toolbar>
                <Typography variant="h6" className={styles.title}>
                    Code Share
                </Typography>
                <Button color="inherit" onClick={handleLogout}>{user ? user.username : 'Sign In'}</Button>
            </Toolbar>
        </AppBar>
    )
}