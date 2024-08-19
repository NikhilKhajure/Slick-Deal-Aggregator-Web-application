import React, { useState } from 'react'
import './Auth.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/Images/logos/logo.png'
import axios from 'axios';
function Signup() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: ""
    });
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }
    const toasOpt = {
        position: "bottom-right",
        autoClose: "8000",
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    };
    const handleValidation = () => {
        const { username, email, password, confirmpassword } = values;
        if (username.length < 3) {
            toast.error("Username Should Be Greater Than 3 Character", toasOpt)
            return false;
        } else if (email === "") {
            toast.error("Email Must Be Given", toasOpt);
            return false;
        } else if (password !== confirmpassword) {
            toast.error("Password And Confirm Password Should Be Same", toasOpt);
            return false;
        }
        return true;
    }
    const signUpUrl = "http://localhost:8000/auth/register"
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { username, email, password } = values;
        if (handleValidation()) {
            try {
                const { data } = await axios.post(signUpUrl, {
                    username,
                    email,
                    password
                })
                if (data.status === false) {
                    toast.error(data.msg, toasOpt);
                }
                if (data.status === true) {
                    toast.success(data.msg, toasOpt);
                    localStorage.setItem("slick-deal-user", JSON.stringify(data.newUser));
                    navigate("/");
                }
            } catch (error) {
                toast.error("Server Is Busy", toasOpt);
            }
        }
    }
    return (
        <>
            <div className="registerContainer">
                <div className="brand">
                    <img src={logo} alt="" />
                    <h3>Sign Up</h3>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder='Username' onChange={(e) => handleChange(e)} id="" />
                    <input type="email" onChange={(e) => handleChange(e)} name="email" placeholder='Emai' id="" />
                    <input type="password" onChange={(e) => handleChange(e)} name="password" placeholder='Password' id="" />
                    <input type="password" name="confirmpassword" placeholder='confirmpassword' onChange={(e) => handleChange(e)} id="" />
                    <button type='submit'>SignUp</button>
                    <span>Already a User <Link to="/signin">signin</Link></span>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default Signup
