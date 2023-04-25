import React,{ useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import logo from './logo.png';

function Login(){
    const navigate = useNavigate();
    const [values,setValues] = useState({
        username: "",
        password:""
    });

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    };
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    
    const validateForm = () => {
        const { username, password } = values;
        if (username === "") {
            toast.error("Email and Password is required.", toastOptions);
            return false;
        } else if (password === "") {
                toast.error("Email and Password is required.", toastOptions);
                return false;
            }
        return true;
    };
    const handleSubmit = async (event) => {
      event.preventDefault();
      if(validateForm()) {
        const { data } = await axios.post('http://localhost:1234/login',values);
        if(data.status === false) {
          toast.error(data.msg, toastOptions);
        }
        if(data.status === true) {
          navigate("/dashboarddoctor",{state:{id:data}}); //navigate("/dashboarddoctor",{state:{id:data}});
        }
      }
    };
    
    return (
        <>
          <FormContainer>
            <div className="body">
            <div className="bg">
              <form className="form-containers"  onSubmit={(event) => handleSubmit(event)}>
                <div className="brand">
                  <img src= {logo}/>
                  <h1>Doctor Login</h1>
                </div>
                <div className="forms">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={(e) => handleChange(e)}
                  min="3"
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                />
                <button type="submit">Log In</button>
                </div>
              </form>
              </div>
              </div>
          </FormContainer>
          <ToastContainer />
        </>
      );
    }
    
    const FormContainer = styled.div`
      margin: 0;
      box-sizing: border-box;
      .body{
        background-color: #444;
        position: relative;
        height: 100vh;
        width: 100%;
        background-size: cover;
        background-position: center center;
      }
      img {
        border-radius: 4px;
        width: 100px;
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        display: block;
      }
      .bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(45deg, #8D72E1, turquoise, white);
        animation: animate-bg 8s ease infinite;
      }
      
      .form-containers {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 50px 30px;
        width: 380px;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 5);
        animation: animate-form 1s ease forwards;
      }
      h1 {
        margin-bottom: 20px;
        text-align: center;
        color: #444;
      }
      .forms {
        display: flex;
        flex-direction: column;
      }
      input[type="text"],
      input[type="password"] {
      width: 90%;
      padding: 12px;
      margin: 1em 0;
      border: none;
      border-radius: 5px;
      background-color: #eee;
    }
    button[type="submit"] {
      background-color: red;
      width: 90%;it
      color: #fff;
      border: none;
      border-radius: 5px;
      margin: 0.5em;
      padding: 12px;
      padding-left: 140px;
      padding-right: 141px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    button[type="submit"]:hover {
      background-color: black;
    }
    @keyframes animate-bg {
      0% {
        background-position: 0 0;
      }
    
      100% {
        background-position: 500px 500px;
      }
    }
    @keyframes animate-forms {
      from {
        opacity: 0;
        transform: translate(-50%, -60%);
      }
    
      to {
        opacity: 1;
        transform: translate(-50%, -50%);
      }
    }
    `;

    export default Login; 
    