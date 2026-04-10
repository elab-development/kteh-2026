import React from 'react';

// Definisanje tipova za props koji se prosleđuju komponenti
type StudentProps={
    ime:string;
    prezime:string;
    godine:number;
}

// Definisanje funkcionalne komponente Student koja prima props
function Student(props:StudentProps){
    return(
        <p>
            Student: {props.ime} {props.prezime}, godine: {props.godine}
        </p>
    )
}
export default Student;