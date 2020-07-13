import React, {useState} from "react";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from '@material-ui/core/Button';
import useAuth from "./AuthContext";

function CodeSubmit() {
    const [values, setValues] = useState({
        lang: '',
        code: ''
    })

    const [checked, setChecked] = useState(false)

    const { createSnippet } = useAuth();

    const handleSubmit = (event) => {
        createSnippet(values.code, values.lang, checked)
    }
    
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }

    const handleChecked = (event) => {
        setChecked(event.target.checked);
    }

    return (
        <Grid
            container
            spacing={3}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '90vh', maxWidth: '100vw' }}
        >
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom style={{ marginBottom: 12 }}>
                        Your code goes here
                    </Typography>
                    <FormGroup>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Code"
                            multiline
                            rows={7}
                            value={values.code}
                            style={{ width: 500, marginBottom: 12 }}
                            onChange={handleChange}
                            color="#FFF"
                            name="code"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-singleLine-flexible"
                            label="Language"
                            value={values.lang}
                            style={{ width: 500, marginBottom: 12 }}
                            onChange={handleChange}
                            color="#FFF"
                            name="lang"
                            variant="outlined"
                        />
                        <FormControlLabel control={
                            <Switch
                                checked={checked}
                                onChange={handleChecked}
                                name="check"
                                color="primary"
                                disabled
                            />
                        }  label="Private" style={{ marginBottom: 12 }}/>
                        <Button variant="outlined" color="primary" onClick={handleSubmit}>
                            Share!
                        </Button>
                    </FormGroup>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CodeSubmit;