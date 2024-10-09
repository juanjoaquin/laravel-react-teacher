import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";



const EditGrade = () => {

    const GRADEAPI = `http://localhost:8000/api/grade/`;
    const { id } = useParams();

    const [grade, setGrade] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchGrade = async () => {
            try {
                const response = await axios.get(`${GRADEAPI}${id}`);
                setGrade(response.data.grade);
                setSubject(response.data.subject);
            } catch (err) {
                console.log(err);
                setMessage("Error al cargar la nota");
            }
        };
        fetchGrade();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${GRADEAPI}${id}`, {
                grade: grade,
                subject: subject
            });

            navigate('/alumnos');
        } catch (error) {
            setMessage("Error al actualizar la nota");
        }
    };

    return (
        <div>
            <div className="background-alumnos">
                <div className='asistencias-alumnos-header'>
                    <h2>Notas</h2>
                    <p>Tendras el manejo de las notas de tus alumnos.</p>
                    <p>Aquí podras modificar su nota, y su materia.</p>
                    <div className='back-to-index'>
                        <Link to="/grades">

                            Volver atrás</Link>
                    </div>
                </div>
            </div>
            <div className='form-edit-assist-container'>
            <form  onSubmit={handleSubmit} className='form-edit-asisst'>
                <label className='label-edit-assist'>Nota</label>
                <input
                    className='input-edit-assist'
                    type="number"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                />
                <label className='label-edit-assist'>Materia</label>
                <input
                    className='input-edit-assist'
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <button type="submit" className='button-save-assist'>Agregar nota</button>
            </form>
            {message && <p>{message}</p>}
        </div>
        </div>
    );
};

export default EditGrade;