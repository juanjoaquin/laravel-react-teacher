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

# Funcionamiento

1. ``Sección general``

![1](https://imgur.com/Ho8iESl.png)

2. ```Sección de Alumnos```
Información general de los Alumnos con el CRUD del mismo. Además de poseer la información de sus notas y de sus asistencias.

![2](https://imgur.com/tBG7buP.png)

ID dinámico del alumno
![3](https://imgur.com/C1akfXJ.png)

Creación del alumno
![4](https://imgur.com/bl4GaTI.png)

3. ```Sección de asistencias```

Información básica de la asistencia de los alumnos, si está presente o no.

![5](https://imgur.com/6S8A7gz.png)

![6](https://imgur.com/sEwdCfF.png)

4. ```Sección de notas```

Información de los alumnos que poseen notas, y su respectivo CRUD.

![7](https://imgur.com/BFdST2Y.png)

![8](https://imgur.com/wIdf749.png)
