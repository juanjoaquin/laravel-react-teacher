import React from "react";
import { Link } from "react-router-dom";
import "./style.css"


const AlumnosTable = ({ alumnos, deleteAlumnos }) => {

    const renderAssist = (alumno) => {
        if (alumno.asistencia && alumno.asistencia.length > 0) {
            return (
                <div>
                    {alumno.asistencia.map((asistencia) => {
                        return (
                            <div>
                                <p className={asistencia.estado.toLowerCase()}>{asistencia.estado}</p>
                            </div>
                        )
                    })}
                </div>
            )
        }
        else {
            return <div>
                <p>No assist</p>
            </div>
        }
    }

    return (
        <div className="table-container">
            {alumnos.length === 0 ? (
                <h1>No hay alumnos disponibles. </h1>
            ) : (
                <table className="table-alumnos">
                    <thead className="table-thead-alumnos">
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Nota</th>
                            <th>Asistencia</th>
                            <th>Más</th>
                        </tr>
                    </thead>
                    <tbody className="tbody-alumnos">
                        {alumnos.map((alumno) => (
                            <tr key={alumno.id}>
                                <td>{alumno.name}</td>
                                <td>{alumno.surname}</td>
                                <td>{alumno.grade ? alumno.grade.grade : <p>Empty</p>}</td>
                                <td>{renderAssist(alumno)}</td>
                                <td>
                                    <Link to={`/alumno/${alumno.id}`}>
                                        <span className="open-table material-symbols-outlined">
                                            arrow_outward
                                        </span>
                                    </Link>
                                    <span className="delete-table material-symbols-outlined" onClick={() => deleteAlumnos(alumno.id)}>
                                        delete_forever
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default AlumnosTable