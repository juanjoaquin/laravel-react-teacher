import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";





const CreateGrade = () => {
    const GRADEAPI = `http://localhost:8000/api/grade/`;

    const [grade, setGrade] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [gradeId, setGradeId] = useState(null);

    const navigate = useNavigate();

    const { id } = useParams()

    useEffect(() => {
        const fetchGrade = async () => {
            try {

                const response = await axios.get(`${GRADEAPI}${id}`);
                setGrade(response.data.grade);
                setSubject(response.data.subject);
                setGradeId(response.data.id);
            }
            catch (error) {
                console.error(error, "Error");
                
            }
        }

        fetchGrade()
    }, [id, GRADEAPI])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            /*             if (gradeId) {
                            await axios.put(`${GRADEAPI}${gradeId}`, {
                                grade: grade,
                                subject: subject
                            });
                            setMessage("Nota actualizada correctamente");
                        }  */
            await axios.post(GRADEAPI, {
                alumno_id: id,
                grade: grade,
                subject: subject
            });
            setMessage("Nota creada correctamente");

            navigate('/alumnos');
        } catch (error) {
            setMessage("Error al actualizar/crear la nota");
            console.log(error);
        }
    };



    return (
        <div>
            <div className="background-alumnos">
                <div className='asistencias-alumnos-header'>
                    <h2>Notas</h2>
                    <p>Tendras el manejo de las notas de tus alumnos.</p>
                    <p>Aquí podras agregar su nota, y su materia.</p>
                    <div className='back-to-index'>
                        <Link to="/grades">

                            Volver atrás</Link>
                    </div>
                </div>
            </div>
            <div className='form-edit-assist-container'>
                <form onSubmit={handleSubmit} className='form-edit-asisst'>
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
                    <button type="submit" className='button-save-assist'>Actualizar nota</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default CreateGrade;