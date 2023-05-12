import React, { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";


function Login(props) {
    return (
        <div className="login-container">
            <div className="form-container">
                <img className="logo"
                    src="https://icon-library.com/images/pokedex-icon/pokedex-icon-20.jpg"
                    alt="ball-logo"
                />
                <h2>Effettua l'accesso</h2>
                <Form>
                    <FormGroup>
                        <input type="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <input type="password" placeholder="password" />
                    </FormGroup>
                    <Button type="submit"
                        onClick={
                            () => props.onStateSwitch('pokedex')
                        }>Login</Button>
                </Form>
                <p>Non hai un account?

                <span
                    onClick={
                        () => props.onStateSwitch('register')
                    }
                >Registrati</span></p>
        </div>
    </div >
    )
}

export default Login