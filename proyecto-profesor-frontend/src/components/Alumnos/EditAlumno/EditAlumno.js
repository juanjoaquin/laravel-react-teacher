import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";


const EditAlumno = () => {

    const APIURL = 'http://localhost:8000/api/alumno/';

    const { id } = useParams();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState(18);
    const [email, setEmail] = useState("");
    const [nationality, setNationality] = useState("");

    const navigate = useNavigate();

    const update = async (e) => {
        e.preventDefault()

        await axios.put(`${APIURL}${id}`,
            {
                name: name,
                surname: surname,
                age: age,
                email: email,
                nationality: nationality
            });

        navigate(`/all-alumnos`);
    }

    useEffect(() => {
        const getAlumnoById = async () => {
            const response = await axios.get(`${APIURL}${id}`)
            setName(response.data.name || "")
            setSurname(response.data.surname || "")
            setAge(response.data.age || "")
            setEmail(response.data.email || "")
            setNationality(response.data.nationality || "")
        }
        getAlumnoById()
    }, [id])

    return (
        <div>
            <div className="background-alumnos">
                <div className='asistencias-alumnos-header'>
                    <h2>Modificar alumno</h2>
                    <p>Tendras el manejo de la información de tus alumnos.</p>
                    <p>Aquí podras cambiar su información si es necesario.</p>
                    <div className='back-to-index'>
                        <Link to="/grades">

                            Volver atrás</Link>
                    </div>
                </div>
            </div>
            <div className='form-edit-assist-container'>
                <form onSubmit={update} className='form-edit-asisst' >
                    <label className='label-edit-assist'>Nombre del alumno:</label>

                    <input value={name}
                        className='input-edit-assist'
                        onChange={(e) => setName(e.target.value)}
                        type='text' />

                    <label className='label-edit-assist'>Apellido del alumno:</label>

                    <input value={surname}
                        className='input-edit-assist'
                        onChange={(e) => setSurname(e.target.value)}
                        type='text' />

                    <label className='label-edit-assist'>Email del alumno:</label>

                    <input value={email}
                        className='input-edit-assist'
                        onChange={(e) => setEmail(e.target.value)}
                        type='email' />

                    <label className='label-edit-assist'>Nacionalidad del alumno:</label>

                    <input value={nationality}
                        className='input-edit-assist'
                        onChange={(e) => setNationality(e.target.value)}
                        type='text' />

                    <label className='label-edit-assist'>Edad del alumno:</label>

                    <input value={age}
                        className='input-edit-assist'
                        onChange={(e) => setAge(e.target.value)}
                        type='number' />

                    <button type='submit' className='button-save-assist'>Agregar</button>

                </form>
            </div>
        </div>
    );
}

export default EditAlumno;