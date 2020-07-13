import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import React from "react";
import TextField from "@material-ui/core/TextField";
import useAuth from '../../components/AuthContext';
import Navbar from "../../components/customNavbar";
import Router from 'next/router';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";

export default function LoginPage() {
    const [values, setValues] = React.useState({
        email: '',
        password: ''
    });

    const { login, user } = useAuth()

    if (user) {
        Router.push('/')
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = () => {
        login(values.email, values.password)
    }

    return (
        <Box>
            <Navbar />
                <Container>
                    <Grid
                        container
                        spacing={3}
                        direction="column"
                        alignItems="center"
                        justify="center"
                        style={{ minHeight: '100vh' }}
                    >
                        <Typography >

                        </Typography>
                        <TextField
                            label="Email"
                            id="outlined-full-width"
                            style={{ margin: 8 }}
                            placeholder="Email"
                            variant="outlined"
                            margin="dense"
                            value={values.email}
                            onChange={handleChange('email')}
                        />
                        <TextField
                            label="Password"
                            id="outlined-full-width-pw"
                            style={{ margin: 8 }}
                            type="password"
                            variant="outlined"
                            margin="dense"
                            value={values.password}
                            onChange={handleChange('password')}
                        />

                        <Button color="primary" onClick={handleSubmit}>
                            Login
                        </Button>
                    </Grid>
                </Container>
        </Box>
    )
}