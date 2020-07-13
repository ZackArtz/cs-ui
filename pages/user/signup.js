import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import React from "react";
import TextField from "@material-ui/core/TextField";
import useAuth from '../../components/AuthContext';
import Navbar from "../../components/customNavbar";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";

export default function SignupPage() {
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        username: ''
    });

    const { signup } = useAuth()

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = () => {
        signup(values.email, values.password, values.username)
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
                    <Typography style={{ color: '#FFF' }}>
                        Sign Up
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
                        label="Username"
                        style={{ margin: 8 }}
                        placeholder="Email"
                        variant="outlined"
                        margin="dense"
                        value={values.username}
                        onChange={handleChange('username')}
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
                        Sign Up
                    </Button>
                </Grid>
            </Container>
        </Box>
    )
}