import './App.css';
import ShowAlumnoProfile from './components/ShowAlumno';
import CreateAlumno from './components/Alumnos/CreateAlumno/CreateAlumno'
import EditAlumno from './components/Alumnos/EditAlumno/EditAlumno';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import EditGrade from './components/Grades/EditGrade/EditGrade';

import CreateGrade from './components/Grades/CreateGrade/CreateGrade';
import ShowAsistencia from './components/Asistencia/ShowAsistencia/ShowAsistencia';
import EditAsistencia from './components/Asistencia//EditAsistencia/EditAsistencia';
import CreateAsistencia from './components/Asistencia/CreateAsistencia/CreateAsistencia';
import HomePage from './components/UI/HomePage';
import AllAlumnos from './components/UI/AllAlumnos/AllAlumnos';
import AllGrades from './components/Grades/AllGrades/AllGrades';
import NavBar from './components/UI/NavBar/NavBar';
import ShowGrade from './components/Alumnos/DetailAlumno/ShowGrade';







function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
      
      <Route path='/' element={<HomePage />}/>

        <Route path='/alumnos' element={<AllAlumnos />} />
        <Route path='/create' element={<CreateAlumno />}/>
        <Route path='/edit/:id' element={<EditAlumno />}/>

        
        <Route path='/alumno/:id' element={<ShowGrade />} />

        <Route path='/grades' element={< AllGrades/>}/>
        <Route path='/edit-grade/:id' element={<EditGrade />}/>
        <Route path='/create-grade/:id' element={<CreateGrade />}/>


        <Route path='/asistencias' element={<ShowAsistencia />}/>
        <Route path="/edit-asistencia/:id" element={<EditAsistencia />} />
        <Route path='/create-asistencia/:id' element={<CreateAsistencia/>}/>

        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
