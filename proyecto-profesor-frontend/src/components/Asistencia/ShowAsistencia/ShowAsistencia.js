import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./style.css"

const ShowAsistencia = () => {
    const APIURL = 'http://localhost:8000/api';

    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        const fetchAlumnos = async () => {
            try {
                const response = await axios.get(`${APIURL}/alumnos`);
                setAlumnos(response.data);
            } catch (error) {
                console.error('Error fetching alumnos:', error);
            }
        };
        fetchAlumnos();
    }, []);

    // {
    //     alumnos.asistencia ? (<div>
    //         <Link to={`/edit-asistencia/${alumno.asistencia.id}`}>Editar asistencia</Link>
    //     </div>) : (
    //         <div>
    //         <Link to={`/create-asistencia/${alumno.asistencia.id}`}>Crear asistencia</Link>
    //         </div>
    //     )
    // }

    const AsistenciaDeAlumnos = (alumno) => {
        if (alumno.asistencia && alumno.asistencia.length > 0) {
            return (
                <div >

                    {alumno.asistencia.map((asistencia) => (
                        <div key={asistencia.id} className='alumno-asistencia-map'>

                            <p className={asistencia.estado}>{asistencia.estado} </p>
                            <Link to={`/edit-asistencia/${asistencia.id}`}>
                                <span className="add-assit material-symbols-outlined">
                                    add_circle
                                </span>
                            </Link>


                        </div>

                    ))}
                </div>
            );
        } else {
            return <div className='alumno-asistencia-map'>
                <p className='no-assist-map'>No assist</p>
                <Link to={`/create-asistencia/${alumno.id}`} >
                    <span className="add-assit material-symbols-outlined">
                        add_circle
                    </span>
                </Link>
            </div>
        }
    };



    return (
        <>
            <div className="background-alumnos">
                <div className='asistencias-alumnos-header'>
                    <h2>Asistencias</h2>
                    <p>Tendras el manejo de las asistencias de tus alumnos.</p>
                    <p>Podrás agregar, o modificar su asistencia.</p>
                </div>
            </div>
            <div className='asistencias-container'>
                <div className='mapeo-assist'>
                    {alumnos.map((alumno) => (
                        <div key={alumno.id} className='mapeo-child'>
                            <div className='mapeo-name-surname'>
                                <p> {alumno.name}</p>
                                <p> {alumno.surname}</p>
                            </div>

                            {AsistenciaDeAlumnos(alumno)}

                        </div>
                    ))}
                    <div className="button-alumno">

                        <Link to="/alumnos" className="a-alumno">
                            <span className="material-symbols-outlined">
                                arrow_back
                            </span>
                            Volver atrás

                        </Link>

                    </div>
                </div>
            </div>
        </>

    );
};

export default ShowAsistencia;