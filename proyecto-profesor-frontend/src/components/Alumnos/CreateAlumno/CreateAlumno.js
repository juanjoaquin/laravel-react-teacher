import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import "./style.css"

const CreateAlumno = () => {

    const APIURL = 'http://localhost:8000/api/alumno';

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [nationality, setNationality] = useState("");

    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault()

        await axios.post(APIURL, {
            name: name,
            surname: surname,
            age: age,
            email: email,
            nationality: nationality
        })

        navigate('/alumnos')
    }

    return (
        <>
            <div className='background-alumnos'>
                <div className='text-create-alumno'>
                    <h4>Acá podras agregar tu nuevo alumno a la clase.</h4>
                    <div className='back-to-index'>
                        <Link to="/alumnos">

                            Volver atrás</Link>
                    </div>
                </div>

            </div>
            <div className='form-container'>

                <form onSubmit={store} className='form-create-alumno'>

                    <input value={name}
                        placeholder='Nombre del aluno'
                        required
                        onChange={(e) => setName(e.target.value)}
                        type='text' />


                    <input value={surname}
                        placeholder='Apellido del alumno'
                        required
                        onChange={(e) => setSurname(e.target.value)}
                        type='text' />


                    <input value={email}
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        type='email' />


                    <input value={nationality}
                        placeholder='Nacionalidad del alumno'
                        onChange={(e) => setNationality(e.target.value)}
                        type='text' />


                    <input value={age}
                        placeholder='Edad (debe ser mayor a 18)'
                        onChange={(e) => setAge(e.target.value)}
                        type='number' />

                    <button type='submit'>Agregar</button>

                </form>
            </div>
            </>
    )
}

export default CreateAlumno;