import React from "react";

const DogList = ({dogs}) => {
    return (
        <div className="DogList">
            {dogs.map(dog => {
                return (
                    <ul>
                        <li key={dog.name}><b>Name:</b> {dog.name}</li>
                        <li key={dog.age}><b>age:</b> {dog.age}</li>
                        <li key={`src_${dog.src}`}><b>src:</b> {dog.src}</li>
                        <b>facts:</b>
                        {dog.facts.map(fact => {
                            <li key={fact}>{fact}</li>
                        })}
                    </ul>
                )
            })}
        </div>
    )
}
export default DogList;