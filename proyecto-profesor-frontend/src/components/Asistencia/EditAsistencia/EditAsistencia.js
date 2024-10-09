import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./style.css"

const EditAsistencia = () => {
    const APIURL = 'http://localhost:8000/api/asistencia/';

    const { id } = useParams();
    const [estado, setEstado] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchAsistencia = async () => {
            try {
                const response = await axios.get(`${APIURL}${id}`);
                setEstado(response.data.estado);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAsistencia();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.get(`${APIURL}${id}`);
            const alumnoId = response.data.alumno_id;

            await axios.put(`${APIURL}${id}`, {
                alumno_id: alumnoId,
                estado: estado
            });
            navigate('/alumnos');
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setEstado(e.target.value);
    };

    return (
        <body>
            <div>
                <div className="background-alumnos">
                    <div className='asistencias-alumnos-header'>
                        <h2>Asistencia</h2>
                        <p>Tendras el manejo de las asistencias de tus alumnos.</p>
                        <p>Aquí podras modificar su asistencia.</p>
                        <div className='back-to-index'>
                        <Link to="/alumnos">

                            Volver atrás</Link>
                    </div>
                    </div>
                </div>
                <div className='form-edit-assist-container'>
                    <form onSubmit={handleSubmit} className='form-edit-asisst'>

                            <label className='label-edit-assist'>Estado</label>
                            <input
                                className='input-edit-assist'
                                type="text"
                                value={estado}
                                onChange={handleChange}
                                placeholder="Ingrese el estado (presente/ausente)"
                            />

                        <button type="submit" className='button-save-assist'>Guardar cambios</button>
                    </form>
                </div>
            </div>
        </body>
    );
};

export default EditAsistencia;
