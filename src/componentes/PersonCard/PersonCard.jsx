//Para los estilos de este componente, edite el :root{} de index.css
import React from 'react';
const PersonCard = props => {
    return(
        <>
            <h1>{props.lastName}, {props.firstName}</h1>
            <h3>Age: {props.age}</h3>
            <h3>Hair Color: {props.hairColor}</h3>
        </>
    )
}
export default PersonCard;