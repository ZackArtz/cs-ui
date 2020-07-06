import Router from "next/router";
import {createRef, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function CodeSubmit() {
    const [code, setCode] = useState('');
    const [lang, setLang] = useState('');
    const ref = createRef();

    const handleSubmit = (event) => {
        fetch('https://api.zacharymyers.com/api/create', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: code,
                private: isOn(ref.current.value),
                language: lang
            })
        }).then(r => {
            r.json().then(res => {
                Router.push(`/${res.slug}`)
            })
        })
        console.log(code)
        console.log(ref.current)
        console.log(lang)
        event.preventDefault()
    }
    
    function isOn(value) {
        return value === "on";
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Code</Form.Label>
                <Form.Control as="textarea" onChange={(event => setCode(event.target.value))} placeholder="Your code goes here" rows="7" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Language</Form.Label>
                <Form.Control type="text" onChange={event => setLang(event.target.value)} placeholder="Language" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Private" ref={ref}  />
                <Form.Text className="text-muted">
                    Only people with the link will be able to access it.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit!
            </Button>
        </Form>
    )
}

export default CodeSubmit;