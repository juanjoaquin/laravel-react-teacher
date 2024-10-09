import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";



const CrateAsistencia = () => {

    const APIURL = `http://localhost:8000/api/asistencia/`;

    const [estado, setEstado] = useState("");

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        const fetchAsistencia = async () => {
            try {
                const response = await axios.get(`${APIURL}${id}`)
                setEstado(response.data.estado)
            }
            catch (error) {
                console.log("Error =>", error);
            }
        }
        fetchAsistencia()
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(APIURL, {
                estado: estado,
                alumno_id: id
            })
            navigate('/asistencias');
        }

        catch (error) {
            console.log(error, "error")
        }
    }

    return (
        <div>
            <div className="background-alumnos">
                <div className='asistencias-alumnos-header'>
                    <h2>Agregar asistencia</h2>
                    <p>Tendras el manejo de las asistencias de tus alumnos.</p>
                    <p>Aquí podras agregar la asistencia a tú alumno.</p>
                    <div className='back-to-index'>
                        <Link to="/alumnos">

                            Volver atrás</Link>
                    </div>
                </div>
            </div>
            <div className='form-edit-assist-container'>
                <form className='form-edit-asisst' onSubmit={handleSubmit}  >
                    
                        <label className='label-edit-assist'>Estado <span className="span-label">(únicamente "presente/ausente")</span></label>
                        <input
                            className='input-edit-assist'
                            type="text"
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                            placeholder="Ingrese el estado"
                        />
                    
                    <button type="submit" className='button-save-assist'>Guardar cambios</button>
                </form>
            </div>
        </div>
    );
};

export default CrateAsistencia