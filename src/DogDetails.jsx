import React from "react";
import { useParams } from "react-router-dom";

const DogDetails = ({dogs}) => {
    const { name } = useParams();
    return(
        <div className="DogDetails">
            {dogs.map(dog => {
                if (dog.name  === name){
                    return (<ul>
                        <li><b>Name:</b> {dog.name}</li>
                        <li><b>age:</b> {dog.age}</li>
                        <li><b>src:</b> {dog.src}</li>
                        <b>facts:</b>
                        {dog.facts.map(fact => {
                            return(<li>{fact}</li>)
                        })}
                    </ul>)
                }
            })}
        </div>
    )
}

export default DogDetails;