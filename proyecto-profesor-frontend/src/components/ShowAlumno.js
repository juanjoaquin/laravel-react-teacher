import React, { useEffect, useState } from "react";
import axios from 'axios';



import { Link } from 'react-router-dom';

const ShowAlumno = () => {

    const APIURL = 'http://localhost:8000/api';

    const [alumnos, setAlumnos] = useState([]);

    const getAllAlumnos = async () => {
        const response = await axios.get(`${APIURL}/alumnos`)
        setAlumnos(response.data)
    }

    const deleteAlumnos = async (id) => {
        await axios.delete(`${APIURL}/alumno/${id}`);
        getAllAlumnos()
    }

    const showNote = (alumno) => {
        if (alumno.grade && alumno.grade.grade < 6) {
            return "Desaprobado";
        }

        else {
            return "Aprobado";
        }
    }

    const showNull = (alumno) => {
        if (alumno.grade === null) {
            return "NO NOTA CAPO"
        }
    }

    const showAsistencia = (alumno) => {
        if(alumno.asistencia.length > 0) {
            return(
                <ul>
                    {alumno.asistencia.map(asistencia => (
                        <li key={asistencia.id}>

                            Estado: {asistencia.estado}
                        </li>
                    ))}
                </ul>
            );
        }
        else {
            return <ul>
            <li>No hay asistencias registradas</li>
        </ul>;
        }
    }




    useEffect(() => {
        getAllAlumnos();
    }, [])

    const renderField = (field, defaultValue = "Campo vacío") => {
        return field ? field : defaultValue
    }


    return (
        <div>
            

            <Link to="/asistencias">Ver asistencias</Link>

            <Link to="/create">Agregar alumno</Link>

            <div>
                {alumnos.length === 0 ? (<p>No se encuentran alumnos</p>) : alumnos.map((alumno) => {
                    return (
                        <div key={alumno.id}>
                            <p>Nombre: {alumno.name}</p>
                            <p>Apellido: {alumno.surname}</p>
                            <p>Edad: {renderField(alumno.age)}</p>
                            <p>Email: {renderField(alumno.email)}</p>
                            <p>Nacionalidad: {renderField(alumno.nationality)}</p>
                            <h2>Nota: {alumno.grade ? alumno.grade.grade : 'No hay nota disponible aún'}</h2>
                            <h3>Materia: {alumno.grade ? alumno.grade.subject : 'No inscripto en materia'}</h3>
                            <p>Estado: {showNote(alumno)}</p>
                            <p>Estado 2: {showNull(alumno)}</p>
                            <p>ID: {alumno.id}</p>

                            {/* {showNotes(alumno)} */}
                            {/* <Link to={`/alumno-perfil/${alumno.id}`}>Ver alumno</Link> */}
                            <Link to={`/alumno/${alumno.id}`}>Ver alumno</Link>
                            {
                                alumno.grade ? (<div>
                                    <Link to={`/edit-grade/${alumno.grade.id}`}>EDITAR NOTA CHAVAL</Link>
                                </div>) : (
                                    <div>
                                        <Link to={`/create-grade/${alumno.id}`}>CREAR NOTA</Link>
                                    </div>
                                )
                            }


                            {/*                                     <div>
                                    <Link to={`/edit-grade/${alumno.grade.id}`}>EDITAR NOTA CHAVAL</Link>
                                </div> */}

                            <Link to={`/edit/${alumno.id}`}>Editar alumno</Link>
                            <button onClick={() => deleteAlumnos(alumno.id)}>Eliminar alumno</button>

                            {showAsistencia(alumno)}

                        {/* {alumno.asistencia && alumno.asistencia.length > 0 ? (
                            <ul>
                                {alumno.asistencia.map(asistencia => (
                                    <li key={asistencia.id}>
                                        Estado: {asistencia.estado}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No hay asistencias registradas.</p>
                        )} */}



                        </div>

                    )
                }
                )}



            </div>
            
        </div>
    );
}

export default ShowAlumno