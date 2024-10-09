import React, { useState, useEffect } from "react";
import profileIMG from "../../../assets/images/profile.png"
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import "./style.css"


const ShowGrade = () => {

    const GRADEURL = 'http://localhost:8000/api/alumno/'



    const { id } = useParams();
    const [alumnoById, setAlumnoById] = useState([]);

    useEffect(() => {
        const getNoteById = async () => {
            try {
                const response = await axios.get(`${GRADEURL}${id}`);
                setAlumnoById(response.data);
            } catch (error) {
                console.log(error, "Error");
            }
        };

        getNoteById();

    }, [id]);


    const showNote = (alumnoById) => {
        if (alumnoById.grade && alumnoById.grade.grade < 6) {
            return "Desaprobado";
        } else {
            return "Aprobado";
        }
    }

    // {alumnoById.asistencia ? (
    //     <div>
    //         {alumnoById.asistencia.map((asistencia) => (
    //             <div key={asistencia.id}>
    //                 <p>Estado de Asistencia: {asistencia.estado}</p>
    //             </div>
    //         ))}
    //     </div>
    // ) : (
    //     <p>No hay asistencias para este alumno.</p>
    // )}


    return (
        <div className="show-alumno-container">
            <div className="background-alumnos">
                <div className='asistencias-alumnos-header'>
                    <h2>Perfil del alumno</h2>
                    <p>La información detallada de cada uno de tus alumnos.</p>
                    <p>También podras modificar su información.</p>
                    <div className='back-to-index'>
                        <Link to="/alumnos">

                            Volver atrás</Link>
                    </div>
                </div>
            </div>
            {
                alumnoById && (
                    <div className="alumno-id">
                        <div className="alumno-img">
                            <img src={profileIMG} alt="profile" className="profile-img" />
                            <div className="name-surname">
                                <h3> {alumnoById.name}</h3>
                                <h3> {alumnoById.surname}</h3>
                            </div>
                        </div>
                        <div className="informacion-profile">
                            <span className="icon-profile material-symbols-outlined">
                                person
                            </span>
                            <div className="informacion-profile-text">
                                <p className="info-p"><span>Edad:</span> {alumnoById.age}</p>
                                <p><span>Email:</span> {alumnoById.email ? alumnoById.email : "No email added."}</p>
                                <p><span>País:</span> {alumnoById.nationality ? alumnoById.nationality : "No país added."}</p>
                            </div>
                        </div>
                        {
                            alumnoById.grade ? (
                                <div className="informacion-profile">
                                    <span className="icon-profile material-symbols-outlined">
                                        table_chart
                                    </span>
                                    <div className="informacion-profile-text" >
                                        <p><span>Nota:</span> {alumnoById.grade.grade ? alumnoById.grade.grade : "Note no added."}</p>
                                        <p><span>Materia:</span> {alumnoById.grade.subject}</p>

                                        <p className="" ><span>Estado:</span> {showNote(alumnoById)}</p>

                                    </div>

                                </div>
                            ) : (<div className="informacion-profile">
                                <span className="icon-profile material-symbols-outlined">
                                    table_chart
                                </span>
                                <div className="informacion-profile-text" >
                                    <p>Nota: Note/Materia no added</p>
                                </div>
                            </div>)


                        }

                    </div>

                )
            }
            {alumnoById && alumnoById.asistencia && alumnoById.asistencia.length > 0 ? (
                alumnoById.asistencia.map((asistencia) => (
                    <div key={asistencia.id} className="informacion-profile">
                        <span className=" icon-profile material-symbols-outlined">
                            calendar_month
                        </span>
                        <div className="informacion-profile-text">
                            <p><span>Asistencia:</span>  {asistencia.estado} </p>
                        </div>
                    </div>
                ))
            ) : (
                <div className="informacion-profile">
                    <span className="icon-profile material-symbols-outlined">
                        calendar_month
                    </span>
                    <div className="informacion-profile-text" >
                        <p>Nota: Note/Materia no added</p>
                    </div>
                </div>
            )}

            <div className="button-alumno">

                <Link className="a-alumno" to={`/edit/${alumnoById.id} `}>Modificar alumno</Link>

            </div>






        </div>
    );
}

export default ShowGrade;
