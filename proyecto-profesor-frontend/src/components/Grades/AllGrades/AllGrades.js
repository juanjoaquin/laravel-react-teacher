import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./style.css"


const AllGrades = () => {
    const GRADEURL = 'http://localhost:8000/api';

    const [alumnos, setGrades] = useState([]);

    useEffect(() => {
        const getGrades = async () => {
            try {
                const response = await axios.get(`${GRADEURL}/alumnos`);
                setGrades(response.data);
            } catch (error) {
                console.log(error, "Error");
            }
        };

        getGrades();
    }, []);


    const showNote = (alumno) => {
        if (alumno.grade && alumno.grade.grade < 6) {
            return <span style={{color: "red"}}>Desaprobado</span>
        }
        else if(alumno.grade === null) {
            return <span>No state</span>
        }
        else {
            return <span style={{color: "green"}}>Aprobado</span>
        }
    }

    return (

        <div>
            <div className="background-alumnos">
                <div className='asistencias-alumnos-header'>
                    <h2>Notas</h2>
                    <p>Tendras el manejo de las notas y las materias de tus alumnos.</p>
                    <p>Podrás agregarlas o modificarlas.</p>
                </div>
            </div>
            <div className="table-container">
                <table className="table-alumnos">
                    <thead className="table-thead-alumnos">
                        <tr>
                            <th>Nombre</th>
                            {/* <th>Apellido</th> */}
                            <th>Nota</th>
                            <th>Materia</th>
                            <th>Más</th>
                            <th>Estado</th>
                        </tr>
                    </thead>

                    <tbody className="tbody-alumnos">
                        {alumnos.map((alumno) => {
                            return (
                                <tr key={alumno.id} >
                                    <td>{alumno.name}</td>
                                    {/* <td>{alumno.surname}</td> */}
                                    <td>{alumno.grade ? alumno.grade.grade : <span>No add</span>}</td>
                                    <td> {alumno.grade ? alumno.grade.subject : <span>No add</span>}</td>
                                    <td>
                                        {alumno.grade ? (<Link to={`/edit-grade/${alumno.grade.id}`}>
                                            <span className="edit-icon-grades material-symbols-outlined">
                                                edit_note
                                            </span>
                                        </Link>)

                                            : (<Link to={`/create-grade/${alumno.id}`}><span className="create-icon-grades material-symbols-outlined">
                                                edit_note

                                            </span>
                                            </Link>)}
                                    </td>
                                    <td>{showNote(alumno)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>
            <div className="button-alumno">

                <Link to="/alumnos" className="a-alumno">
                    <span class="material-symbols-outlined">
                        arrow_back
                    </span>
                    Volver atrás

                </Link>

            </div>
        </div>


    );
}

export default AllGrades;
