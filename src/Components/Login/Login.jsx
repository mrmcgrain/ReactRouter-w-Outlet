import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    let info = {
        username: "user",
        password: 'password'
    }


    const navigate = useNavigate();

    const [loginValue, setLoginValue] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {

        setLoginValue((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }))

    }



    const handleLogin = () => {

        if (loginValue.username === info.username && loginValue.password === info.password) {
            console.log("GOOD LOGIN")

            navigate('/loggedIn');

        } else {
            alert("Bad login")
        }

    }



    return (
        <>
            {console.log("my  label", loginValue)}


            <div>Login</div>
            <br />
            <input
                id="username"
                placeholder='username'
                onChange={(e) => handleChange(e)}>

            </input>
            <br />
            <br />
            <input
                id="password"
                placeholder='password'
                onChange={(e) => handleChange(e)}>
            </input>













            <br />
            <br />

            <button
                onClick={handleLogin}>submit</button>


        </>
    )
}

export default Login