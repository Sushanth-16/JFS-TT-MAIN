import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Reg() {
    const [data, setData] = useState({
        name:"",
        email:"",
        password:""
    });
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    };
   const submit = async (e) => {
    e.preventDefault();

    try {
        await axios.post(
            "https://JFS-BACKEND-TT.onrender.com/api/register",
            data
        );

        alert("Registration successful!");
    } catch (err) {
        alert(err.response?.data?.message || "Registration failed");
    }
};
    return (
    <>
      <h2>Registration Page</h2>
      <p>Please fill in the form to register.</p>
      <form onSubmit={submit}>
        <input type="text" name="name" placeholder="enter user name" value={data.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="enter email" value={data.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="enter password" value={data.password} onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
    </>
    );
}

export default Reg;