import useAuth from "./AuthContext";
import {useRouter} from "next/router";
import {useEffect} from "react";

export function ProtectRoute(Component) {
    return () => {
        const { user, isAuthenticated, loading } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (!isAuthenticated && !loading) Router.push('/login')
        }, [loading, isAuthenticated])

        return (<Component {...arguments} />)
    }
}