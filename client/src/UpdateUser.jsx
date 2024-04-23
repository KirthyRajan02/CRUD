import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'

function UpdateUser () {
    const {id} = useParams()
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [physics, setPhysics] = useState()
    const [chemistry, setChemistry] = useState()
    const [maths, setMaths] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => {  console.log(result)
            setName(result.data.name)
            setAge(result.data.age)
            setPhysics(result.data.physics)
            setChemistry(result.data.chemistry)
            setMaths(result.data.maths)
        })
        .catch(err => console.log(err))

    }, [])

    const Update = (e) =>{
        e.preventDefault()
        axios.put("http://localhost:3001/updateUser/"+id, {name, age, physics, chemistry, maths})
        .then(result => {
            console.log(result) 
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center"> 
            <div className='w-60 bg-white rounded p-4'>
                <form onSubmit={Update}>
                    <h2>Update User</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control'
                        value= {name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder='Enter Name' className='form-control'
                        value= {age} onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Physics</label>
                        <input type="text" placeholder='Enter Mark' className='form-control'
                        value= {physics} onChange={(e) => setPhysics(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Chemistry</label>
                        <input type="text" placeholder='Enter Mark' className='form-control'
                        value= {chemistry} onChange={(e) => setChemistry(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Maths</label>
                        <input type="text" placeholder='Enter Mark' className='form-control'
                        value= {maths} onChange={(e) => setMaths(e.target.value)}/>
                    </div>                    
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;

