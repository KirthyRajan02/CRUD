import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser () {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [physics, setPhysics] = useState()
    const [chemistry, setChemistry] = useState()
    const [maths, setMaths] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", {name, age, physics, chemistry, maths})
        .then(result => {
            console.log(result) 
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center"> 
            <div className='w-60 bg-white rounded p-4'>
                <form onSubmit={Submit}>
                    <h2>Add User</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control'
                        onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder='Enter Name' className='form-control'
                        onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Physics</label>
                        <input type="text" placeholder='Enter Mark' className='form-control'
                        onChange={(e) => setPhysics(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Chemistry</label>
                        <input type="text" placeholder='Enter Mark' className='form-control'
                        onChange={(e) => setChemistry(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Maths</label>
                        <input type="text" placeholder='Enter Mark' className='form-control'
                        onChange={(e) => setMaths(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;

