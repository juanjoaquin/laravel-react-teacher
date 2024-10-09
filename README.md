# Proyecto de gestión de alumnos 

Aplicación web desarrollada con Laravel para el backend, y React para lo que sería el frontend full responsive. Utilizando MySQL como base de datos. 
Es una gestión de alumnos basada en un CRUD, en la que el profesor le puede asignar al alumno notas, ausencias o presencias, registrar materias.
Y poder ver de manera dinámica el ID del alumno con toda la información detallada. 

Esta diseñada con la idea de que sea un único profesor que posee la app para poder gestionar su clase.

# Pasos a seguir para utilizarlo

1. Clonar el repositorio
2. Instalar React create app
3. Una vez creado Laravel con Composer realizar las migraciones con `php artisan migrate`
4. Ejecutar `npm run start` para la copilación del frontend.
5. Ejecutar `php artisan serve` para levantar el backend. 
