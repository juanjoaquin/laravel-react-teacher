import React from "react";
import "./style.css";
import studentIMG from "../../../../src/assets/images/student3d.png"
import gradesIMG from "../../../../src/assets/images/grades-img.png"
import asistenciaIMG from "../../../../src/assets/images/asistencia.png"


import { Link } from "react-router-dom";

const Redirections = () => {
    return (
        <div>
            <div className="redirection-container">

                <div className="cards">
                    <div className="cards-children">
                        <div className="card-content">

                            <img className="studentIMG" src={studentIMG} alt="student3d" />

                            <div className="card-text">
                                <Link to="/alumnos"><h2 className="h3-text-1">Alumnos</h2></Link>
                                <p>Ver información de los alumnos.</p>
                                <div>
                                    <Link to="/alumnos">
                                    <span className="arrow-redirection material-symbols-outlined">

                                        arrow_forward_ios
                                    </span>
                                    </Link>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>

                <div className="cards">
                    <div className="cards-children-2">
                        <div className="card-content">

                            <img className="studentIMG" src={gradesIMG} alt="student3d" />

                            <div className="card-text">
                                <Link to="/grades"><h2>Notas</h2></Link>
                                <p>Manejo de notas de tus alumnos.</p>

                                <div>
                                    <Link to="/grades">
                                    <span className="arrow-redirection material-symbols-outlined">
                                        arrow_forward_ios
                                    </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cards">
                    <div className="cards-children">
                        <div className="card-content">

                            <img className="studentIMG" src={asistenciaIMG} alt="student3d" />

                            <div className="card-text">
                                <Link to="/asistencias"><h2 className="h3-text-1">Asistencias</h2></Link>
                                <p>Control de asistencia de tus alumnos.</p>
                                <div>
                                    <Link to="/asistencias">
                                    <span className="arrow-redirection material-symbols-outlined">
                                        arrow_forward_ios
                                    </span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Redirections;