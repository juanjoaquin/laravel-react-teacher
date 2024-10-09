import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import AlumnosTable from "./AlumnosTable";


const AllAlumnos = () => {

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

    useEffect(() => {
        getAllAlumnos()
    }, [])



    return (
            <section>

                <div className="all-alumnos-container">
                    <div className="background-alumnos">

                        <div className="header-alumnos">
                            <h4>Tienes</h4>
                            <h1>{alumnos.length}</h1>
                            <h4>alumnos.</h4>
                        </div>

                        <div className="block-alumnos">
                            <div className="block-one">
                                <Link to="/create"><p>Agregar</p>
                                    <span className="add-alumno material-symbols-outlined">
                                        add_circle
                                    </span>
                                </Link>
                            </div>
                            <div className="block-two">
                                <Link to="/asistencias"><p>Asistencia</p>

                                    <span className="asistencia-table material-symbols-outlined">
                                        table_chart
                                    </span>

                                </Link>
                            </div>
                            <div className="block-three">
                                <Link to="/grades"><p>Ver notas</p>

                                <span className="open-alumno material-symbols-outlined">
                                    open_in_new
                                </span>
                                </Link>
                            
                            </div>
                        </div>
                        <div className="info-all-alumnos">
                            <p>Para agregar las notas y las asistencias, debe clickear sobre los botones. <span class="material-symbols-outlined">
                                keyboard_double_arrow_up
                            </span></p>
                        </div>


                    </div>
                </div>
                
                <AlumnosTable alumnos={alumnos} deleteAlumnos={deleteAlumnos}/>

                <div className="button-alumno">

                    <Link to="/" className="a-alumno">
                        <span className="material-symbols-outlined">
                            arrow_back
                        </span>
                        Volver atrás

                    </Link>

                </div>
            </section>
    );
};

export default AllAlumnos;