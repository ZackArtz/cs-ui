import Head from 'next/head'
import CodeSubmit from '../components/codesubmit'
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";
import Navbar from "../components/customNavbar";
import Typography from "@material-ui/core/Typography";

export default function Home() {
    return (
        <Box>
            <Head>
                <title>Code Share!</title>
            </Head>
            <Navbar />
            <Typography>

            </Typography>
            <CodeSubmit />
        </Box>
    )
}