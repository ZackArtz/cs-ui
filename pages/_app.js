import {AuthProvider} from "../components/AuthContext";
import 'fontsource-roboto';
import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "../components/theme";

function MyApp({ Component, pageProps }) {

    React.useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side")
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles)
        }
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </ThemeProvider>
    )
}

export default MyApp